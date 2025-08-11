"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Loader2, Trash2, Upload } from "lucide-react";
import ConfirmationUpload from "./ConfirmationUpload";
import BranchSelector from "./BranchSelector";

interface InsuranceCompany {
  id: string;
  name: string;
  code: string;
}

interface Bank {
  id?: string;
  name: string;
  code: string;
}

interface StandingOrderFormProps {
  insurance: InsuranceCompany;
  bank: Bank;
  onClose: () => void;
  onSuccess?: () => void;
}

const StandingOrderForm: React.FC<StandingOrderFormProps> = ({ insurance, bank, onClose, onSuccess }) => {
  const [fullName, setFullName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [branchNumber, setBranchNumber] = useState("");
  const [selectedBranch, setSelectedBranch] = useState<{
    branchCode: string;
    branchName: string; 
    branchAddress: string;
  } | undefined>();
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [amountInWords, setAmountInWords] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [collectionDay, setCollectionDay] = useState<string>("");

  // מיפוי מועדי גבייה מותריים לכל חברה
  const allowedDays = useMemo<number[]>(() => {
    const map: Record<string, number[]> = {
      harel: [1, 10, 15],
      excelence: [5, 10, 15, 25],
      migdal: [1, 10, 15],
      // ניתן להרחיב כאן לחברות נוספות כשהמידע קיים
    };
    return map[insurance.id] || [];
  }, [insurance.id]);

  // איפוס ערך מועד גבייה אם אינו מותר לחברה הנוכחית
  useEffect(() => {
    if (collectionDay && !allowedDays.includes(Number(collectionDay))) {
      setCollectionDay("");
    }
  }, [allowedDays, collectionDay]);

  // עדכון אוטומטי של השם המלא כשמשנים שם פרטי או משפחה
  useEffect(() => {
    const autoFullName = [firstName, lastName].filter(Boolean).join(' ');
    if (autoFullName && autoFullName.trim()) {
      setFullName(autoFullName);
    }
  }, [firstName, lastName]);

  // עדכון אוטומטי של פרטי הבנק בהתאם לבחירה
  useEffect(() => {
    if (bank) {
      setBankName(bank.name);
      // מילוי מספר הבנק אם קיים
      if (bank.code) {
        setBranchNumber(bank.code);
      }
    }
  }, [bank]);

  // טיפול בבחירת סניף
  const handleBranchSelect = (branch: any) => {
    setSelectedBranch({
      branchCode: branch.branchCode,
      branchName: branch.branchName,
      branchAddress: branch.branchAddress
    });
    setBranchNumber(branch.branchCode);
    setBranchName(branch.branchName);
    setBranchAddress(branch.branchAddress);
  };

  const sigRef = useRef<SignatureCanvas | null>(null);

  const hasFormSupport = useMemo(() => {
    return ['altshuler', 'clal', 'analyst', 'excelence'].includes(insurance.id);
  }, [insurance.id]);

  const clearSignature = () => {
    sigRef.current?.clear();
  };

  const submitForm = async () => {
    try {
      setIsGenerating(true);
      
      if (!hasFormSupport) {
        alert("כרגע הטפסים הזמינים למילוי הם: אלטשולר שחם, כלל, אנליסט ואקסלנס.");
        setIsGenerating(false);
        return;
      }

      // שליחה לשרת שייצר PDF באיכות גבוהה וישלח במייל
      const fd = new FormData();
      fd.append("type", "order");
      fd.append("fullName", fullName);
      fd.append("firstName", firstName);
      fd.append("lastName", lastName);
      fd.append("idNumber", idNumber);
      fd.append("phone", phone);
      fd.append("email", email);
      fd.append("street", street);
      fd.append("houseNumber", houseNumber);
      fd.append("city", city);
      fd.append("zipCode", zipCode);
      fd.append("bankName", bankName || bank.name);
      fd.append("bankCode", bank.code);
      fd.append("branchName", branchName);
      fd.append("branchAddress", branchAddress);
      fd.append("branchNumber", branchNumber);
      fd.append("accountNumber", accountNumber);
      fd.append("amount", amount);
      fd.append("amountInWords", amountInWords);
      fd.append("collectionDay", collectionDay);
      fd.append("insuranceName", insurance.name);
      fd.append("insuranceId", insurance.id);
      
      // שליחת חתימה אם קיימת
      if (sigRef.current && !sigRef.current.isEmpty()) {
        const img = sigRef.current.getCanvas().toDataURL("image/png");
        fd.append("signatureDataUrl", img);
      }

      const response = await fetch("/api/standing-order", { method: "POST", body: fd });
      if (response.ok) {
        setIsGenerating(false);
        onSuccess?.(); // פופאפ הוראות - הטופס לא נסגר
      } else {
        throw new Error("Failed to send form");
      }
    } catch (err) {
      console.error(err);
      alert("אירעה שגיאה בשליחת הטופס. נסה שוב.");
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="p-3 bg-blue-50 rounded-lg text-sm text-brandBlue">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div>חברת ביטוח: <strong>{insurance.name}</strong></div>
            <div>בנק: <strong>{bank.name}</strong> (קוד {bank.code})</div>
          </div>
          <button
            type="button"
            onClick={() => setShowUpload(true)}
            className="inline-flex items-center gap-2 bg-brandBlue text-white px-3 py-2 rounded-md text-xs hover:bg-opacity-90"
          >
            <Upload size={14} /> כבר פתחת קופת גמל להשקעה? העלה אישור
          </button>
        </div>
      </div>

      

      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">שם פרטי</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full border rounded-lg p-2" placeholder="שם פרטי" />
          </div>
          <div>
            <label className="block text-sm mb-1">שם משפחה</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full border rounded-lg p-2" placeholder="שם משפחה" />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1">
            שם מלא 
            <span className="text-xs text-gray-500 font-normal">(מתמלא אוטומטית)</span>
          </label>
          <input 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            className="w-full border rounded-lg p-2 bg-gray-50" 
            placeholder="יתמלא אוטומטית משדות השם הפרטי והמשפחה" 
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">מספר ת.ז.</label>
            <input value={idNumber} onChange={(e) => setIdNumber(e.target.value)} className="w-full border rounded-lg p-2" placeholder="תעודת זהות" />
          </div>
          <div>
            <label className="block text-sm mb-1">טלפון</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border rounded-lg p-2" placeholder="05XXXXXXXX" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">אימייל</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-lg p-2" placeholder="name@example.com" />
          </div>
          <div></div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-sm mb-1">
              בחירת סניף 
              <span className="text-xs text-gray-500 font-normal">(חיפוש חכם)</span>
            </label>
            <BranchSelector
              bankCode={bank?.code}
              onSelect={handleBranchSelect}
              value={selectedBranch}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm mb-1">מספר חשבון</label>
            <input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className="w-full border rounded-lg p-2" placeholder="מס' חשבון" />
          </div>
        </div>
        
        {/* שדות כתובת */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <h5 className="text-sm font-medium mb-2">כתובת מגורים</h5>
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div className="col-span-2">
              <label className="block text-sm mb-1">רחוב</label>
              <input value={street} onChange={(e) => setStreet(e.target.value)} className="w-full border rounded-lg p-2" placeholder="שם הרחוב" />
            </div>
            <div>
              <label className="block text-sm mb-1">מספר בית</label>
              <input value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} className="w-full border rounded-lg p-2" placeholder="מס' בית" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">עיר</label>
              <input value={city} onChange={(e) => setCity(e.target.value)} className="w-full border rounded-lg p-2" placeholder="שם העיר" />
            </div>
            <div>
              <label className="block text-sm mb-1">מיקוד</label>
              <input value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="w-full border rounded-lg p-2" placeholder="מיקוד" />
            </div>
          </div>
        </div>

        {/* שדות בנק נוספים */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <h5 className="text-sm font-medium mb-2">פרטי בנק נוספים</h5>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-sm mb-1">
                שם בנק 
                <span className="text-xs text-gray-500 font-normal">(מתמלא אוטומטית)</span>
              </label>
              <input 
                value={bankName} 
                onChange={(e) => setBankName(e.target.value)} 
                className="w-full border rounded-lg p-2 bg-gray-50" 
                placeholder="יתמלא אוטומטית לפי הבחירה שלך" 
              />
            </div>
            <div>
              <label className="block text-sm mb-1">
                שם סניף 
                <span className="text-xs text-gray-500 font-normal">(מתמלא אוטומטית)</span>
              </label>
              <input 
                value={branchName} 
                readOnly 
                className="w-full border rounded-lg p-2 bg-gray-50 text-gray-700" 
                placeholder="יתמלא לפי הסניף שנבחר" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">
              כתובת סניף 
              <span className="text-xs text-gray-500 font-normal">(מתמלא אוטומטית)</span>
            </label>
            <input 
              value={branchAddress} 
              readOnly 
              className="w-full border rounded-lg p-2 bg-gray-50 text-gray-700" 
              placeholder="יתמלא לפי הסניף שנבחר" 
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">סכום הפקדה חודשי (₪)</label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              className="w-full border rounded-lg p-2" 
              placeholder="הזן סכום בשקלים" 
            />
          </div>
          <div>
            <label className="block text-sm mb-1">סכום במילים</label>
            <input 
              value={amountInWords} 
              onChange={(e) => setAmountInWords(e.target.value)} 
              className="w-full border rounded-lg p-2" 
              placeholder="למשל: שלושים שקל (אופציונלי)" 
            />
          </div>
        </div>

        {/* מועד גבייה - מוצג רק אם יש לחברה מועדים מוגדרים */}
        {allowedDays.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">מועד גבייה</label>
              <select
                value={collectionDay}
                onChange={(e) => setCollectionDay(e.target.value)}
                className="w-full border rounded-lg p-2 bg-white"
              >
                <option value="">בחר מועד...</option>
                {allowedDays.map((d) => (
                  <option key={d} value={String(d)}>{d} לחודש</option>
                ))}
              </select>
            </div>
            <div className="self-end text-xs text-gray-500">
              המערכת תמלא אוטומטית שדות חודש ושנה (תחילת הגבייה) בטופס
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm mb-2">חתימה</label>
        <div className="border rounded-lg p-2 bg-gray-50">
          <SignatureCanvas
            ref={sigRef}
            penColor="#1B2A4E"
            minWidth={1.0}
            maxWidth={2.5}
            canvasProps={{ width: 520, height: 160, className: "bg-white rounded" }}
          />
          <button type="button" onClick={clearSignature} className="mt-2 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
            <Trash2 size={16} /> נקה חתימה
          </button>
        </div>
      </div>

      <button
        onClick={submitForm}
        disabled={isGenerating || !hasFormSupport}
        className="w-full bg-brandBlue text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors font-medium disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isGenerating ? (
          <span className="inline-flex items-center gap-2"><Loader2 className="animate-spin" size={18} /> שולח בקשה...</span>
        ) : (
          "שליחת בקשה"
        )}
      </button>
      {showUpload && (
        <ConfirmationUpload onClose={() => setShowUpload(false)} />
      )}
    </div>
  );
};

export default StandingOrderForm;

