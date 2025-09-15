"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, AlertTriangle } from "lucide-react";

interface Props {
  onClose?: () => void;
  inline?: boolean;
}

const ConfirmationUpload: React.FC<Props> = ({ onClose, inline = false }) => {
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [note, setNote] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const submit = async () => {
    try {
      if (!privacyAccepted) {
        alert('יש לאשר את מדיניות הפרטיות לפני השליחה');
        return;
      }
      
      if (!fullName || !idNumber || !file) {
        alert("נא למלא שם מלא, תעודת זהות ולצרף קובץ PDF");
        return;
      }
      setIsSubmitting(true);
      const fd = new FormData();
      fd.append("type", "confirmation");
      fd.append("fullName", fullName);
      fd.append("idNumber", idNumber);
      if (note) fd.append("note", note);
      fd.append("file", file);
      const res = await fetch("/api/standing-order", { method: "POST", body: fd });
      if (!res.ok) throw new Error("failed");
      setSuccess(true);
    } catch (e) {
      alert("שליחה נכשלה. נסו שוב או שלחו במייל.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const FormContent = () => (
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
      
      {/* אזהרה על מסמכים רגישים */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
          <div className="text-xs text-orange-800">
            <p className="font-medium mb-1">חשוב לדעת:</p>
            <p>מומלץ לא לשלוח מסמכים רפואיים רגישים במייל. בקבצים רגישים נשתמש בערוץ מאובטח לפי צורך.</p>
          </div>
        </div>
      </div>
      
      {/* הודעת שקיפות */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <div className="flex items-start gap-2">
          <Shield className="w-4 h-4 text-brandBlue mt-0.5 flex-shrink-0" />
          <div className="text-xs text-brandBlue leading-relaxed">
            <p className="font-medium mb-1">שקיפות:</p>
            <p className="mb-1">
              הפרטים נדרשים לצורך טיפול בבקשה ותיעוד. ייתכן שנעביר מידע לספקי תשתית (אירוח/דוא"ל) 
              ולגוף ביטוחי רלוונטי לבקשה. לפרטים המלאים וזכויות עיון/תיקון/מחיקה – 
              ראו <Link href="/privacy-policy" className="underline hover:text-brandGold">מדיניות פרטיות</Link>.
            </p>
            <p>
              פניות בנושא פרטיות: <a href="mailto:maor@maorz.co.il" className="underline">maor@maorz.co.il</a>, 
              טל' <a href="tel:03-5040049" className="underline">03-5040049</a>.<br/>
              <strong>מאור זיני - ביטוח ופיננסים</strong>
            </p>
          </div>
        </div>
      </div>
      
      {/* תיבת הסכמה */}
      <div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="mt-0.5 w-4 h-4 text-brandBlue border-gray-300 rounded focus:ring-brandBlue"
            required
          />
          <span className="text-xs text-brandGray">
            קראתי והבנתי את{' '}
            <Link href="/privacy-policy" className="text-brandBlue underline hover:text-brandGold">
              מדיניות הפרטיות
            </Link>
            {' '}ואני מסכים/ה לעיבוד הפרטים לצורך מתן מענה לבקשה
          </span>
        </label>
      </div>
      
      <button 
        onClick={submit} 
        disabled={isSubmitting || !privacyAccepted} 
        className={`w-full bg-brandBlue text-white py-2 rounded hover:bg-opacity-90 ${
          isSubmitting || !privacyAccepted ? 'opacity-60 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? "שולח..." : "שלח אישור"}
      </button>
    </div>
  );

  if (inline) {
    return (
      <div className="bg-white border border-brandGold/20 rounded-lg p-5">
        <h4 className="text-lg font-bold text-brandBlue mb-3">שליחת אישור הקמה</h4>
        {success ? (
          <div className="p-3 bg-green-50 text-green-700 rounded text-sm">האישור נשלח בהצלחה. תודה!</div>
        ) : (
          <FormContent />
        )}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg p-5 w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-bold text-brandBlue">שליחת אישור הקמה</h4>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">סגור</button>
        </div>
        {success ? (
          <div className="p-3 bg-green-50 text-green-700 rounded text-sm">האישור נשלח בהצלחה. תודה!</div>
        ) : (
          <FormContent />
        )}
      </div>
    </div>
  );
};

export default ConfirmationUpload;