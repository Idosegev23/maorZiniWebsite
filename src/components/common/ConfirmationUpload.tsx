"use client";

import React, { useState } from "react";

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

  const submit = async () => {
    try {
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

  if (inline) {
    return (
      <div className="bg-white border border-brandGold/20 rounded-lg p-5">
        <h4 className="text-lg font-bold text-brandBlue mb-3">שליחת אישור הקמה</h4>
        {success ? (
          <div className="p-3 bg-green-50 text-green-700 rounded text-sm">האישור נשלח בהצלחה. תודה!</div>
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
            <button onClick={submit} disabled={isSubmitting} className="w-full bg-brandBlue text-white py-2 rounded hover:bg-opacity-90 disabled:opacity-60">
              {isSubmitting ? "שולח..." : "שלח אישור"}
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg p-5 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-lg font-bold text-brandBlue">שליחת אישור הקמה</h4>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">סגור</button>
        </div>
        {success ? (
          <div className="p-3 bg-green-50 text-green-700 rounded text-sm">האישור נשלח בהצלחה. תודה!</div>
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
            <button onClick={submit} disabled={isSubmitting} className="w-full bg-brandBlue text-white py-2 rounded hover:bg-opacity-90 disabled:opacity-60">
              {isSubmitting ? "שולח..." : "שלח אישור"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationUpload;

