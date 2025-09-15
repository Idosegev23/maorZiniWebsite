import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Rate limiting - פשוט בזיכרון (לא מתאים לפרודקשן עם מספר שרתים)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_MAX_REQUESTS = 5; // מקסימום 5 בקשות
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // בתוך 15 דקות

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit || now - userLimit.lastReset > RATE_LIMIT_WINDOW_MS) {
    // איפוס או יצירת רשומה חדשה
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }
  
  userLimit.count++;
  return false;
}

// פונקציה לניקוי נתונים מקלט משתמש
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/<script[^>]*>.*?<\/script>/gi, '').replace(/<[^>]*>/g, '');
}

// בדיקת תקינות אימייל
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// בדיקת תקינות טלפון ישראלי
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^0[2-9]\d{7,8}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ''));
}

export async function POST(req: NextRequest) {
  try {
    // בדיקת Content-Type
    const contentType = req.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type חייב להיות application/json' },
        { status: 400 }
      );
    }
    
    // קבלת IP לצורך rate limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
    
    // בדיקת rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'יותר מדי בקשות. נסו שוב בעוד 15 דקות.' },
        { status: 429 }
      );
    }
    
    const body = await req.json();
    let { name, email, phone, message } = body;
    
    // ניקוי נתונים
    name = sanitizeInput(name);
    email = sanitizeInput(email);
    phone = sanitizeInput(phone);
    message = sanitizeInput(message);

    // בדיקות תקינות מורחבות
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'חסרים שדות חובה' },
        { status: 400 }
      );
    }
    
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: 'שם חייב להיות באורך 2-100 תווים' },
        { status: 400 }
      );
    }
    
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'כתובת אימייל לא תקינה' },
        { status: 400 }
      );
    }
    
    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'מספר טלפון לא תקין' },
        { status: 400 }
      );
    }
    
    if (message && message.length > 2000) {
      return NextResponse.json(
        { error: 'הודעה ארוכה מדי (מקסימום 2000 תווים)' },
        { status: 400 }
      );
    }

    // יצירת טרנספורטר למיילים
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // תאריך נוכחי בפורמט עברי
    const today = new Date();
    const dateOptions: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    const hebrewDate = today.toLocaleString('he-IL', dateOptions);

    // יצירת תבנית HTML למייל
    const htmlTemplate = `
    <!DOCTYPE html>
    <html dir="rtl" lang="he">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&display=swap" rel="stylesheet">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          text-align: right;
          direction: rtl;
        }
        
        body {
          font-family: 'Heebo', Arial, sans-serif;
          line-height: 1.6;
          color: #505050;
          margin: 0;
          padding: 0;
          background-color: #f7f7f7;
        }
        
        .email-container {
          max-width: 650px;
          margin: 0 auto;
          padding: 0;
          background-color: #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-radius: 6px;
          overflow: hidden;
        }
        
        .header {
          background-color: #1B2A4E;
          text-align: center;
          padding: 30px 20px;
          position: relative;
          border-bottom: 4px solid #C0A16B;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 6px;
          background: linear-gradient(to left, #C0A16B, #F1EFEA);
          opacity: 0.7;
        }
        
        .header h1 {
          color: #C0A16B;
          margin-bottom: 5px;
          font-size: 26px;
          font-weight: 700;
        }
        
        .header p {
          color: #ffffff;
          font-size: 16px;
          margin: 0;
        }
        
        .date-display {
          background-color: #F1EFEA;
          padding: 10px 25px;
          color: #505050;
          font-size: 14px;
          border-bottom: 1px solid rgba(192, 161, 107, 0.3);
        }
        
        .content {
          padding: 30px 25px;
          background-color: #ffffff;
        }
        
        .section {
          margin-bottom: 28px;
        }
        
        .section:last-child {
          margin-bottom: 0;
        }
        
        .section-title {
          color: #1B2A4E;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 15px;
          border-right: 4px solid #C0A16B;
          padding-right: 12px;
        }
        
        .contact-info {
          background-color: #F1EFEA;
          padding: 20px;
          border-radius: 6px;
          margin-bottom: 25px;
          border-right: 4px solid #1B2A4E;
        }
        
        .message-box {
          background-color: #F9F9F9;
          padding: 20px;
          border-radius: 6px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          border-right: 4px solid #C0A16B;
        }
        
        .message-content {
          white-space: pre-line;
          font-size: 15px;
          color: #505050;
          line-height: 1.7;
        }
        
        .info-row {
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(192, 161, 107, 0.2);
          display: flex;
          align-items: flex-start;
        }
        
        .info-row:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        
        .info-label {
          color: #1B2A4E;
          font-weight: 700;
          width: 80px;
          flex-shrink: 0;
        }
        
        .info-value {
          color: #505050;
          flex-grow: 1;
        }
        
        .action-note {
          background-color: #1B2A4E;
          color: #ffffff;
          padding: 15px 20px;
          border-radius: 6px;
          margin-bottom: 20px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .action-note::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 5px;
          background-color: #C0A16B;
        }
        
        .footer {
          text-align: center;
          padding: 20px;
          background-color: #1B2A4E;
          color: #F1EFEA;
          font-size: 14px;
          border-top: 4px solid #C0A16B;
        }
        
        .footer p {
          margin: 5px 0;
          text-align: center;
        }
        
        .contact-methods {
          margin-top: 20px;
          text-align: center;
        }
        
        .contact-item {
          display: inline-block;
          padding: 8px 12px;
          margin: 0 5px;
          color: #C0A16B;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          text-decoration: none;
        }
        
        .divider {
          height: 1px;
          background: linear-gradient(to left, transparent, #C0A16B, transparent);
          margin: 15px 0;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>פנייה חדשה מהאתר</h1>
          <p>התקבלה הודעה חדשה מטופס יצירת הקשר</p>
        </div>
        
        <div class="date-display">
          תאריך הפנייה: ${hebrewDate}
        </div>
        
        <div class="content">
          <div class="action-note">
            לקוח פוטנציאלי השאיר פרטים ומעוניין בשירותיך
          </div>
          
          <div class="section">
            <div class="section-title">פרטי הפונה</div>
            <div class="contact-info">
              <div class="info-row">
                <div class="info-label">שם מלא:</div>
                <div class="info-value">${name}</div>
              </div>
              
              <div class="info-row">
                <div class="info-label">טלפון:</div>
                <div class="info-value">${phone}</div>
              </div>
              
              <div class="info-row">
                <div class="info-label">דוא"ל:</div>
                <div class="info-value">${email}</div>
              </div>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">תוכן ההודעה</div>
            <div class="message-box">
              <div class="message-content">${message || "לא הושארה הודעה נוספת"}</div>
            </div>
          </div>
          
          <div class="divider"></div>
          
          <p style="text-align: center; font-size: 14px; color: #777;">
            לצורך מענה מהיר, ניתן להשיב ישירות למייל זה או להתקשר לפונה.
          </p>
        </div>
        
        <div class="footer">
          <p>© מאור זיני - ביטוח ופיננסים</p>
          <div class="contact-methods">
            <span class="contact-item">טל: 03-5040049</span>
            <span class="contact-item">דוא"ל: maor@maorz.co.il</span>
          </div>
          <p style="margin-top: 20px; font-size: 12px; opacity: 0.7;">
            מייל זה נשלח באופן אוטומטי מאתר האינטרנט
          </p>
        </div>
      </div>
    </body>
    </html>
    `;

    // הגדרת פרטי המייל
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "maor@maorz.co.il",
      subject: `פנייה חדשה מהאתר: ${name}`,
      html: htmlTemplate,
      replyTo: email,
    };

    // שליחת המייל
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("שגיאה בשליחת המייל:", error);
    return NextResponse.json(
      { error: "אירעה שגיאה בשליחת המייל" },
      { status: 500 }
    );
  }
} 