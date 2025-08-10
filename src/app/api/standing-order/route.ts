import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    console.log("🟢 Standing order API called");
    const formData = await req.formData();
    console.log("🟢 FormData parsed successfully");

    const type = String(formData.get("type") || "order");
    const toEmail = "maor@maorz.co.il";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments: Array<{ filename: string; content: Buffer } | { path: string }> = [];

    const file = formData.get("file");
    // קלט חתימה כ-DataURL מהלקוח (ברירת מחדל חדשה)
    const signatureDataUrl = typeof formData.get("signatureDataUrl") === "string" ? String(formData.get("signatureDataUrl")) : "";
    if (file && typeof file !== "string") {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({ filename: (file as File).name || "attachment.pdf", content: buffer });
    }

    const today = new Date();
    const hebrewDate = today.toLocaleString("he-IL", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    let subject = "";
    let html = "";

    if (type === "order") {
      const fullName = String(formData.get("fullName") || "");
      const firstName = String(formData.get("firstName") || "");
      const lastName = String(formData.get("lastName") || "");
      const idNumber = String(formData.get("idNumber") || "");
      const phone = String(formData.get("phone") || "");
      const email = String(formData.get("email") || "");
      const street = String(formData.get("street") || "");
      const houseNumber = String(formData.get("houseNumber") || "");
      const city = String(formData.get("city") || "");
      const zipCode = String(formData.get("zipCode") || "");
      const bankName = String(formData.get("bankName") || "");
      const bankCode = String(formData.get("bankCode") || "");
      const branchName = String(formData.get("branchName") || "");
      const branchAddress = String(formData.get("branchAddress") || "");
      const branchNumber = String(formData.get("branchNumber") || "");
      const accountNumber = String(formData.get("accountNumber") || "");
      const insuranceName = String(formData.get("insuranceName") || "");
      const insuranceId = (String(formData.get("insuranceId") || "").toLowerCase());
      const amount = String(formData.get("amount") || "");
      const amountInWords = String(formData.get("amountInWords") || "");
      const collectionDay = String(formData.get("collectionDay") || "");

      subject = `הרשאת חיוב - ${fullName}`;
      html = `
        <html dir="rtl" lang="he">
        <body style="font-family: Heebo, Arial, sans-serif; color: #505050;">
          <h2 style="color:#1B2A4E;">פרטי הרשאה לחיוב חשבון</h2>
          <p>תאריך: ${hebrewDate}</p>
          <ul>
            <li><strong>שם מלא:</strong> ${fullName}</li>
            ${firstName ? `<li><strong>שם פרטי:</strong> ${firstName}</li>` : ''}
            ${lastName ? `<li><strong>שם משפחה:</strong> ${lastName}</li>` : ''}
            <li><strong>תעודת זהות:</strong> ${idNumber}</li>
            <li><strong>טלפון:</strong> ${phone}</li>
            <li><strong>דוא"ל:</strong> ${email}</li>
            ${street ? `<li><strong>כתובת:</strong> ${street} ${houseNumber}, ${city} ${zipCode}</li>` : ''}
            <li><strong>חברת ביטוח (מוסד):</strong> ${insuranceName}</li>
            <li><strong>בנק:</strong> ${bankName} (קוד ${bankCode})</li>
            ${branchName ? `<li><strong>שם סניף:</strong> ${branchName}</li>` : ''}
            ${branchAddress ? `<li><strong>כתובת סניף:</strong> ${branchAddress}</li>` : ''}
            <li><strong>מספר סניף:</strong> ${branchNumber}</li>
            <li><strong>חשבון:</strong> ${accountNumber}</li>
            <li><strong>סכום הפקדה:</strong> ${amount ? amount + ' ₪' : 'לא צוין'}</li>
            ${amountInWords ? `<li><strong>סכום במילים:</strong> ${amountInWords}</li>` : ''}
          </ul>
          <p>מצורף קובץ ההרשאה הממולא (אם קיים).</p>
        </body>
        </html>
      `;

      // יצירת PDF שרתית באיכות גבוהה עם עברית: תמיכה במספר חברות
      console.log("🟢 Starting PDF generation for:", insuranceId);
      const supportedCompanies = ["altshuler", "clal", "analyst", "excelence"];
      if (supportedCompanies.includes(insuranceId)) {
        const templatePath = path.join(process.cwd(), "public", "forms", `${insuranceId}.pdf`);
        const fontPath = path.join(process.cwd(), "public", "fonts", "NotoSansHebrew-Regular.ttf");
        const [tplBytes, fontBytes] = await Promise.all([readFile(templatePath), readFile(fontPath)]);
        const pdfDoc = await PDFDocument.load(tplBytes);
        pdfDoc.registerFontkit(fontkit);
        const font = await pdfDoc.embedFont(fontBytes);
        console.log("🟢 Font embedded successfully");
        const form = pdfDoc.getForm();
        const pages = pdfDoc.getPages();
        const page = pages[0];
        
        // בדיקה איזה שדות יש ב-PDF
        const allFields = form.getFields();
        const fieldNames = allFields.map(f => f.getName());
        console.log("📋 Available PDF fields:", fieldNames);
        
        // חיפוש שדות שעלולים להיות קשורים לת"ז
        const idRelatedFields = fieldNames.filter(name => 
          name.toLowerCase().includes('id') || 
          name.toLowerCase().includes('tz') || 
          name.toLowerCase().includes('identity') ||
          name.toLowerCase().includes('tehudat')
        );
        console.log("🆔 ID-related fields found:", idRelatedFields);

        // פונקציה לציור טקסט וקטורי בעברית/ASCII בתוך מלבן השדה
        const drawInField = (name: string, value: string, size = 12, pad = 4) => {
          try {
            console.log(`🔍 Trying to fill field "${name}" with value "${value}"`);
            const anyField: any = form.getTextField(name);
            if (!anyField) {
              console.log(`❌ Field "${name}" not found`);
              return;
            }
            const widgets = anyField?.acroField?.getWidgets?.() || [];
            if (!widgets.length) {
              console.log(`❌ No widgets found for field "${name}"`);
              return;
            }
            const rectObj = widgets[0].getRectangle ? widgets[0].getRectangle() : widgets[0].getRect?.();
            
            // טיפול ב-rect כ-object עם x,y,width,height או כ-array
            let left, right, bottom, top;
            if (rectObj && typeof rectObj === 'object') {
              if ('x' in rectObj && 'y' in rectObj && 'width' in rectObj && 'height' in rectObj) {
                // rect object format: {x, y, width, height}
                left = rectObj.x + pad;
                right = rectObj.x + rectObj.width - pad;
                bottom = rectObj.y + pad;
                top = rectObj.y + rectObj.height - pad;
              } else if (Array.isArray(rectObj) && rectObj.length >= 4) {
                // rect array format: [x1, y1, x2, y2]
                const [x1, y1, x2, y2] = rectObj as number[];
                left = Math.min(x1, x2) + pad;
                right = Math.max(x1, x2) - pad;
                bottom = Math.min(y1, y2) + pad;
                top = Math.max(y1, y2) - pad;
              } else {
                console.log(`❌ Invalid rect format for field "${name}":`, rectObj);
                return;
              }
            } else {
              console.log(`❌ No rect found for field "${name}"`);
              return;
            }
            const fieldWidth = right - left;
            const fieldHeight = top - bottom;

            const textWidth = font.widthOfTextAtSize(value, size);
            const x = right - textWidth; // יישור לימין
            const y = bottom + (fieldHeight - size) / 2; // מרכז אנכי משוער

            console.log(`✅ Drawing "${value}" in field "${name}" at (${x}, ${y})`);
            page.drawText(value, {
              x: x,
              y: y,
              size: size + 1, // גדול יותר לפונט bold
              font,
              color: rgb(0.05, 0.05, 0.05), // שחור יותר לפונט bold
            });
          } catch (e) {
            console.log(`❌ Error filling field "${name}":`, e);
          }
        };

        // פונקציה חכמה למילוי שדות בהתאם לשמות השונים
        const fillField = (fieldMappings: string[], value: string, size = 12) => {
          for (const fieldName of fieldMappings) {
            try {
              drawInField(fieldName, value, size);
            } catch (e) {
              // שדה לא קיים, ממשיכים לשדה הבא
            }
          }
        };

        // מילוי שדות לפי כל האפשרויות השונות
        fillField(["Full_name", "full_name"], fullName, 12);
        fillField(["first_name"], firstName, 12);
        fillField(["last_name"], lastName, 12);
        fillField(["Id_num", "id_num", "Id_num2", "id_num2", "id_num3"], idNumber, 12);
        fillField(["phone_num"], phone, 12);
        fillField(["client_streer", "street", "street_address"], street, 12);
        fillField(["house_num"], houseNumber, 12);
        fillField(["city"], city, 12);
        fillField(["zip_code"], zipCode, 12);
        fillField(["bank_name"], bankName, 12);
        fillField(["branch_name"], branchName, 12);
        fillField(["branch_address"], branchAddress, 12);
        fillField(["bank", "bank_num"], bankCode, 12);
        // אין צורך למלא מספר מוסד - מוכנס ברמת התבנית
        fillField(["branch", "branch_num", "branh_num"], branchNumber, 12);
        fillField(["acount_num", "account_num"], accountNumber, 12);
        // סוג חשבון: עו"ש
        fillField(["account_type", "type_of_account", "account_type_es_:signer"], "עו״ש", 12);
        fillField(["ammount", "ammount2"], amount || "0", 12);
        fillField(["ammount-in-words"], amountInWords, 12);
        fillField(["Check", "Check Box16"], "✓", 14);
        
        // שדות נוספים למילוי
        fillField(["full_name2", "full_name3", "fill_name2"], fullName, 12);
        
        // תאריך נוכחי + חודש/שנה לתחילת גבייה
        const now = new Date();
        const twoDigits = (n: number) => n.toString().padStart(2, "0");
        const dateStr = `${twoDigits(now.getDate())}/${twoDigits(now.getMonth() + 1)}/${now.getFullYear()}`;
        drawInField("date_of_bill", dateStr, 12);
        drawInField("Date13_af_date", dateStr, 12);

        // מילוי חודש/שנה התחלה אם מוגדרים בטופס (למשל הראל)
        const startMonth = twoDigits(now.getMonth() + 1);
        const startYear = String(now.getFullYear());
        fillField(["start_month", "Start_Month", "month_start", "חודש"], startMonth, 12);
        fillField(["start_year", "Start_Year", "year_start", "שנה"], startYear, 12);

        // סימון מועד גבייה (checkbox/radio) לפי הערך שנשלח
        if (collectionDay) {
          const dayMap: Record<string, string[]> = {
            '1': ["collect_1", "day_1", "Checkbox1", "גביה_1"],
            '5': ["collect_5", "day_5", "Checkbox5", "גביה_5"],
            '10': ["collect_10", "day_10", "Checkbox10", "גביה_10"],
            '15': ["collect_15", "day_15", "Checkbox15", "גביה_15"],
            '20': ["collect_20", "day_20", "Checkbox20", "גביה_20"],
            '25': ["collect_25", "day_25", "Checkbox25", "גביה_25"],
          };
          const names = dayMap[collectionDay] || [];
          for (const n of names) {
            try { drawInField(n, "✓", 14); } catch {}
          }
        }

        // מיפוי שדות ייחודי לפי חברה
        switch (insuranceId) {
          case 'harel': {
            // חודש/שנה התחלת גבייה
            fillField(["month", "Month"], startMonth, 12);
            fillField(["year", "Year"], startYear, 12);
            // מועד גבייה (1/10/15)
            const harelDayMap: Record<string, string[]> = {
              '1': ['Check1', '1'],
              '10': ['Check10', '10'],
              '15': ['Check15', '15'],
            };
            if (collectionDay && harelDayMap[collectionDay]) {
              for (const n of harelDayMap[collectionDay]) {
                try { drawInField(n, '✓', 14); } catch {}
              }
            }
            // תאריכים
            fillField(["date"], dateStr, 12);
            break;
          }
          case 'altshuler': {
            // שגיאת כתיב בכמה טפסים
            fillField(["ammoun1"], amount || '0', 12);
            break;
          }
          case 'clal': {
            // שמות: מלא את כל מופעי השם (1,2,3)
            fillField(["full_name", "full_name2", "full_name3", "fill_1"], fullName, 12);
            // תאריכים שונים
            fillField(["date", "date3", "Date37_af_date"], dateStr, 12);
            break;
          }
          case 'analyst': {
            fillField(["Date20_af_date", "Date31_af_date"], dateStr, 12);
            break;
          }
          case 'excelence': {
            // צ׳קבוקסים של מועד גבייה
            const exDayMap: Record<string, string[]> = {
              '5': ['Check5'],
              '10': ['Check10'],
              '15': ['Check15'],
              '25': ['Check25'],
            };
            if (collectionDay && exDayMap[collectionDay]) {
              for (const n of exDayMap[collectionDay]) {
                try { drawInField(n, '✓', 14); } catch {}
              }
            }
            break;
          }
          case 'migdal': {
            // ייתכן שאין AcroForm; נשאיר תאריך אם יש
            fillField(["Date29_es_:signer:date"], dateStr, 12);
            // מועד גבייה 1/10/15
            const migdalDay: Record<string, string[]> = {
              '1': ['1_es_:signer'],
              '10': ['10_es_:signer'],
              '15': ['15_es_:signer'],
            };
            if (collectionDay && migdalDay[collectionDay]) {
              for (const n of migdalDay[collectionDay]) {
                try { drawInField(n, '✓', 14); } catch {}
              }
            }
            break;
          }
          case 'more': {
            // התאמות שמות שדה
            fillField(["bank_namr"], bankName, 12);
            fillField(["bank_code"], bankCode, 12);
            fillField(["branch_code"], branchNumber, 12);
            fillField(["idNum", "idNum2"], idNumber, 12);
            fillField(["ammount1", "amount"], amount || '0', 12);
            fillField(["Date19_es_:signer:date"], dateStr, 12);
            break;
          }
          case 'menora': {
            // שמות שדות עשויים להיות שונים; נוסיף תאריך כללי
            fillField(["date", "Date", "Date_es_:signer:date"], dateStr, 12);
            break;
          }
          case 'meitav': {
            // חלק מהטפסים XFA; נוסיף תאריך כללי
            fillField(["date", "Date", "Date_es_:signer:date"], dateStr, 12);
            break;
          }
        }

        // חתימה בתוך השדה אם קיים
        if (signatureDataUrl && signatureDataUrl.startsWith("data:image")) {
          try {
            const base64 = signatureDataUrl.split(",")[1];
            const sigBytes = Buffer.from(base64, "base64");
            const sigImage = await pdfDoc.embedPng(sigBytes);
            // חיפוש שדה חתימה - כל הטפסים השונים
            const signatureFields = ["Signature12", "Signature32", "Signature38", "Signature41"];
            let anyField: any = null;
            for (const sigFieldName of signatureFields) {
              anyField = form.getFieldMaybe ? form.getFieldMaybe(sigFieldName) : null;
              if (anyField) break;
            }
            let left: number | null = null, right: number | null = null, bottom: number | null = null, top: number | null = null;
            
            if (anyField && anyField.acroField) {
              const widgets = anyField.acroField.getWidgets?.() || [];
              if (widgets[0]) {
                const rectObj = widgets[0].getRectangle ? widgets[0].getRectangle() : widgets[0].getRect?.();
                if (rectObj && typeof rectObj === 'object') {
                  if ('x' in rectObj && 'y' in rectObj && 'width' in rectObj && 'height' in rectObj) {
                    left = rectObj.x + 1; // פחות padding לחתימה גדולה יותר
                    right = rectObj.x + rectObj.width - 1;
                    bottom = rectObj.y + 1;
                    top = rectObj.y + rectObj.height - 1;
                  } else if (Array.isArray(rectObj) && rectObj.length >= 4) {
                    const [x1, y1, x2, y2] = rectObj as number[];
                    left = Math.min(x1, x2) + 1; // פחות padding לחתימה גדולה יותר
                    right = Math.max(x1, x2) - 1;
                    bottom = Math.min(y1, y2) + 1;
                    top = Math.max(y1, y2) - 1;
                  }
                }
              }
            }
            
            if (left === null) {
              // חיפוש לפי שם
              const fieldsArr: any[] = form.getFields() as any;
              for (const f of fieldsArr) {
                const n = typeof f.getName === "function" ? f.getName() : "";
                if (["Signature12", "Signature32", "Signature38", "Signature41", "signature", "sign", "חתימה"].some(c => n.toLowerCase().includes(c.toLowerCase()))) {
                  const widgets = f.getWidgets?.() || f.acroField?.getWidgets?.() || [];
                  const rectObj = widgets[0] && (widgets[0].getRectangle ? widgets[0].getRectangle() : widgets[0].getRect?.());
                  if (rectObj && typeof rectObj === 'object') {
                    if ('x' in rectObj && 'y' in rectObj && 'width' in rectObj && 'height' in rectObj) {
                      left = rectObj.x + 1; // פחות padding לחתימה גדולה יותר
                      right = rectObj.x + rectObj.width - 1;
                      bottom = rectObj.y + 1;
                      top = rectObj.y + rectObj.height - 1;
                      break;
                    } else if (Array.isArray(rectObj) && rectObj.length >= 4) {
                      const [x1, y1, x2, y2] = rectObj as number[];
                      left = Math.min(x1, x2) + 1; // פחות padding לחתימה גדולה יותר
                      right = Math.max(x1, x2) - 1;
                      bottom = Math.min(y1, y2) + 1;
                      top = Math.max(y1, y2) - 1;
                      break;
                    }
                  }
                }
              }
            }
            
            if (left !== null && right !== null && bottom !== null && top !== null) {
              const fieldW = right - left;
              const fieldH = top - bottom;
              const scale = Math.min(fieldW / sigImage.width, fieldH / sigImage.height) * 2; // מגדיל את החתימה ל-120% מגודל השדה (יוצא מהשדה אם צריך)
              const w = sigImage.width * scale;
              const h = sigImage.height * scale;
              const x = left + (fieldW - w) / 2;
              const y = bottom + (fieldH - h) / 2;
              console.log(`✅ Drawing signature at (${x}, ${y}) size: ${w}x${h}`);
              page.drawImage(sigImage, { x, y, width: w, height: h });
            }
          } catch {}
        }

        const out = await pdfDoc.save();
        console.log("🟢 PDF generated successfully, size:", out.length);
        attachments.push({ filename: `standing-order-${insuranceId || "form"}.pdf`, content: Buffer.from(out) });
      } else {
        console.log("⚠️ Non-Altshuler insurance, skipping PDF generation");
      }
    } else if (type === "confirmation") {
      const fullName = String(formData.get("fullName") || "");
      const idNumber = String(formData.get("idNumber") || "");
      const note = String(formData.get("note") || "");
      subject = `אישור הקמת הרשאה - ${fullName}`;
      html = `
        <html dir="rtl" lang="he">
        <body style="font-family: Heebo, Arial, sans-serif; color: #505050;">
          <h2 style="color:#1B2A4E;">אישור הקמת הרשאה</h2>
          <p>תאריך: ${hebrewDate}</p>
          <ul>
            <li><strong>שם מלא:</strong> ${fullName}</li>
            <li><strong>תעודת זהות:</strong> ${idNumber}</li>
          </ul>
          ${note ? `<p><strong>הערה:</strong> ${note}</p>` : ""}
          <p>מצורף אישור ההקמה כפי שנשלח ע"י הלקוח.</p>
        </body>
        </html>
      `;
    } else {
      return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    console.log("🟢 Sending email with", attachments.length, "attachments");
    
    // שליחה למאור
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject,
      html,
      attachments,
    });
    console.log("🟢 Email sent to Maor successfully");
    
    // שליחה ללקוח גם (אם זה הרשאה ויש לו מייל)
    if (type === "order") {
      const clientEmail = String(formData.get("email") || "");
      if (clientEmail && clientEmail.includes('@')) {
        const clientSubject = `העתק הרשאת חיוב - ${String(formData.get("fullName") || "")}`;
        const clientHtml = `
          <html dir="rtl" lang="he">
          <body style="font-family: Heebo, Arial, sans-serif; color: #505050;">
            <h2 style="color:#1B2A4E;">העתק הרשאת החיוב שלך</h2>
            <p>שלום ${String(formData.get("fullName") || "")},</p>
            <p>מצורף העתק של הרשאת החיוב שמילאת.</p>
            <p>במידה ויש שאלות, ניתן לפנות אלינו.</p>
            <br/>
            <p>בברכה,<br/>מאור זיני - יועץ פיננסי</p>
          </body>
          </html>
        `;
        
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: clientEmail,
          subject: clientSubject,
          html: clientHtml,
          attachments,
        });
        console.log(`🟢 Email sent to client (${clientEmail}) successfully`);
      }
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("standing-order send error", e);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

