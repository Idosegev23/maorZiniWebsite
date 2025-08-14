"use client";

import React, { useState } from "react";
import { getDepositAccounts } from './depositAccounts';

interface Props {
  bankId: string;
  insuranceId?: string;
  onClose: () => void;
}

const StandingOrderInstructions: React.FC<Props> = ({ bankId, insuranceId, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [note, setNote] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitConfirmation = async () => {
    try {
      if (!fullName || !idNumber || !file) {
        alert("נא למלא שם מלא, תעודת זהות ולצרף קובץ PDF");
        return;
      }
      setSubmitting(true);
      const fd = new FormData();
      fd.append("type", "confirmation");
      fd.append("fullName", fullName);
      fd.append("idNumber", idNumber);
      if (note) fd.append("note", note);
      fd.append("file", file);
      const res = await fetch("/api/standing-order", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch (e) {
      alert("שליחה נכשלה. נסו שוב או שלחו במייל.");
    } finally {
      setSubmitting(false);
    }
  };
  const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-4">
      <h4 className="font-bold text-brandBlue mb-2">{title}</h4>
      <div className="text-sm text-brandGray leading-6">{children}</div>
    </div>
  );

  const renderDepositAccounts = () => {
    if (!insuranceId) return null;
    const accounts = getDepositAccounts(insuranceId);
    if (!accounts || accounts.length === 0) return null;
    return (
      <Section title="פרטי חשבון להפקדה">
        <div className="space-y-1">
          {accounts.map((acc, idx) => (
            <div key={idx} className="text-sm">
              בנק {acc.bankCode}, סניף {acc.branch}, חשבון {acc.account}
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-gray-500">
          ניתן להשתמש בפרטים אלו הן להפקדה חד-פעמית והן להוראת קבע.
        </div>
      </Section>
    );
  };

  const content = () => {
    switch (bankId) {
      case "hapoalim":
        return (
          <>
            <Section title="אתר">
              נכנסים לחשבון באתר → חיובים/הוראות קבע → הקמת הרשאה לחיוב חשבון → הזנת קוד מוסד/אסמכתא → קביעת מגבלות (אם צריך) → אישור.
              <br />
              קישור ישיר: <a className="text-brandBlue underline" target="_blank" rel="noopener noreferrer" href="https://links.bankhapoalim.co.il/account/chaccount/new/">links.bankhapoalim.co.il</a>
            </Section>
            <Section title="אפליקציה">
              תפריט הוראת קבע בחשבון → הקמת הרשאה לחיוב חשבון → אימות → מילוי פרטים → אישור.
            </Section>
          </>
        );
      case "leumi":
        return (
          <>
            <Section title="אתר ואפליקציה">
              תשלומים → פתיחת הרשאה לחיוב חשבון → הזנת פרטים → אישור. ניתן לבחור כללית או עם מגבלת סכום/תוקף.
              <br />
              מדריך: <a className="text-brandBlue underline" target="_blank" rel="noopener noreferrer" href="https://www.leumi.co.il">בנק לאומי</a>
            </Section>
            <Section title="מדריך מצולם">
              כל הפעולות → העברות ותשלומים בשקלים → פתיחת הרשאה לחיוב חשבון.
            </Section>
            <Section title="Pepper">
              דרך הצ'אט באפליקציה או בטלפון <a className="underline" href="tel:*8988">*8988</a> לבקש הקמת הרשאה. מידע נוסף ב־<a className="text-brandBlue underline" target="_blank" rel="noopener noreferrer" href="https://www.pepper.co.il">pepper.co.il</a>
            </Section>
          </>
        );
      case "discount":
        return (
          <>
            <Section title="אתר">
              עו"ש/תשלומים → הקמת הרשאה לחיוב חשבון → הזנת קוד מוסד/אסמכתא → אישור. השירות זמין גם באפליקציה.
              <br />
              קישור: <a className="text-brandBlue underline" target="_blank" rel="noopener noreferrer" href="https://www.discountbank.co.il">דיסקונט</a>
            </Section>
            <Section title="אפליקציה">
              עו"ש או תשלומים → הקמת הרשאה לחיוב חשבון → מילוי הפרטים → אישור.
            </Section>
          </>
        );
      case "mizrahi":
        return (
          <Section title="אתר">
            אתר הפעולות → אזור עו"ש → ניהול הרשאות והוראות קבע → פתיחת הרשאה חדשה לחיוב חשבון → הזנת קוד מוסד/אסמכתא → קביעת מגבלות אם צריך → שלח.
          </Section>
        );
      case "international":
        return (
          <Section title="אתר">
            עו"ש/תשלומים → חיובים על פי הרשאה → הקמת הרשאה → מילוי הפרטים → אישור.
          </Section>
        );
      case "mercantile":
        return (
          <Section title="אתר">
            כניסה לחשבון → תפריט עו"ש מימין → הקמת הרשאה לחיוב חשבון → הזנת אסמכתא/מגבלות אם נדרש → אישור. זמין גם באפליקציה.
            <br />
            קישור: <a className="text-brandBlue underline" target="_blank" rel="noopener noreferrer" href="https://www.mercantile.co.il">mercantile.co.il</a>
          </Section>
        );
      case "yahav":
        return (
          <Section title="אתר">
            כניסה לחשבון באתר → עו"ש → הקמת הרשאה לחיוב חשבון → קוד מוסד ואישור. יש מדריך מצולם קצר.
            <br />
            קישור: <a className="text-brandBlue underline" target="_blank" rel="noopener noreferrer" href="https://www.bank-yahav.co.il">bank-yahav.co.il</a>
          </Section>
        );
      case "jerusalem":
        return (
          <Section title="אתר ואפליקציה">
            באזור האישי → בקשות שירות → בקשה להקמת הרשאה לחיוב חשבון/העברת הרשאה → מילוי פרטים → שליחה.
            <br />
            קישור: <a className="text-brandBlue underline" target="_blank" rel="noopener noreferrer" href="https://www.bankjerusalem.co.il">בנק ירושלים</a>
          </Section>
        );
      case "one-zero":
        return (
          <Section title="אפליקציה">
            הקמת הרשאה מתבצעת ישירות דרך האפליקציה או דרך המוקד. חפשו "הרשאה לחיוב חשבון" באפליקציה או פנו לצ'אט/מוקד ובקשו הקמה, אשרו את תנאי ההרשאה.
            <br />
            קישור: <a className="text-brandBlue underline" target="_blank" rel="noopener noreferrer" href="https://www.1zerobank.co.il">One Zero</a>
          </Section>
        );
      default:
        return (
          <Section title="כללי">
            יש להיכנס לאתר/אפליקציית הבנק → תשלומים/הוראות קבע → הקמת הרשאה לחיוב חשבון → הזנת קוד מוסד/אסמכתא → בחירת מגבלות אם צריך → אישור.
          </Section>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-bold text-brandBlue mb-4">הנחיות להשלמת קופת גמל להשקעה</h3>
        {content()}
        {renderDepositAccounts()}
        <div className="mt-4 p-3 bg-brandBeige rounded">
          <p className="text-sm text-brandGray">
            לאחר השלמת התהליך בבנק, יש לשלוח את אישור ה-PDF לכתובת המייל
            {" "}
            <a className="text-brandBlue underline" href="mailto:maor@maorz.co.il">maor@maorz.co.il</a>
            {" "}
            או להעלות כאן בתיבה הייעודית באתר.
          </p>
        </div>

        <div className="mt-5">
          <h4 className="font-bold text-brandBlue mb-2">שליחת אישור הקמה</h4>
          {submitted ? (
            <div className="p-3 bg-green-50 text-green-700 rounded">האישור נשלח בהצלחה. תודה!</div>
          ) : (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm mb-1">שם מלא</label>
                  <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border rounded p-2" placeholder="שם מלא" />
                </div>
                <div>
                  <label className="block text-sm mb-1">תעודת זהות</label>
                  <input value={idNumber} onChange={(e) => setIdNumber(e.target.value)} className="w-full border rounded p-2" placeholder="מס' ת.ז." />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">קובץ אישור (PDF)</label>
                <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files?.[0] || null)} className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">הערה (אופציונלי)</label>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} className="w-full border rounded p-2" rows={2} placeholder="הערה..." />
              </div>
              <button onClick={submitConfirmation} disabled={submitting} className="w-full bg-brandBlue text-white py-2 rounded hover:bg-opacity-90 disabled:opacity-60">
                {submitting ? "שולח..." : "שלח אישור"}
              </button>
            </div>
          )}
        </div>
        <div className="mt-6 text-center">
          <button onClick={onClose} className="bg-brandBlue text-white py-2 px-4 rounded-lg">סגור</button>
        </div>
      </div>
    </div>
  );
};

export default StandingOrderInstructions;

