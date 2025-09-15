"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Link from "next/link";
import { Loader2, Trash2, Upload, Shield, AlertTriangle } from "lucide-react";
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
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidPhone, setInvalidPhone] = useState<boolean>(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const isFieldMissing = (label: string) => missingFields.includes(label);

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

  // תמיכה פתוחה בכל החברות
  const hasFormSupport = true;

  const clearSignature = () => {
    sigRef.current?.clear();
  };

  const submitForm = async () => {
    try {
      setIsGenerating(true);
      
      // כל החברות נתמכות כעת, אין צורך בהגבלה

      if (!privacyAccepted) {
        alert('יש לאשר את מדיניות הפרטיות לפני השליחה');
        setIsGenerating(false);
        return;
      }
      
      // בדיקת שדות חובה והצגת פירוט חסרים במקום חסימת הכפתור
      const currentMissing: string[] = [];
      if (!firstName.trim()) currentMissing.push("שם פרטי");
      if (!lastName.trim()) currentMissing.push("שם משפחה");
      if (!idNumber.trim()) currentMissing.push("תעודת זהות");
      if (!phone.trim()) currentMissing.push("טלפון");
      if (!email.trim()) currentMissing.push("אימייל");
      if (!accountNumber.trim()) currentMissing.push("מספר חשבון");
      if (!branchNumber.trim()) currentMissing.push("מספר סניף");
      if (allowedDays.length > 0 && !collectionDay) currentMissing.push("מועד גבייה");

      // בדיקות פורמט בסיסיות
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^05\d{8}$/; // טלפון נייד ישראלי בסיסי
      const hasEmail = email.trim().length > 0;
      const hasPhone = phone.trim().length > 0;

      const emailIsInvalid = hasEmail && !emailPattern.test(email.trim());
      const phoneIsInvalid = hasPhone && !phonePattern.test(phone.trim());

      setInvalidEmail(emailIsInvalid);
      setInvalidPhone(phoneIsInvalid);

      if (currentMissing.length > 0 || emailIsInvalid || phoneIsInvalid) {
        setMissingFields(currentMissing);
        setIsGenerating(false);
        return;
      } else {
        setMissingFields([]);
        setInvalidEmail(false);
        setInvalidPhone(false);
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
      alert("אירעה שגיאה בשליחת הבקשה. נסה שוב.");
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
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className={`w-full border rounded-lg p-2 ${isFieldMissing('שם פרטי') ? 'border-red-500' : ''}`} placeholder="שם פרטי" aria-invalid={isFieldMissing('שם פרטי')}
            />
            {isFieldMissing('שם פרטי') && (
              <p className="mt-1 text-xs text-red-600">יש למלא שם פרטי</p>
            )}
          </div>
          <div>
            <label className="block text-sm mb-1">שם משפחה</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className={`w-full border rounded-lg p-2 ${isFieldMissing('שם משפחה') ? 'border-red-500' : ''}`} placeholder="שם משפחה" aria-invalid={isFieldMissing('שם משפחה')}
            />
            {isFieldMissing('שם משפחה') && (
              <p className="mt-1 text-xs text-red-600">יש למלא שם משפחה</p>
            )}
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
            <input value={idNumber} onChange={(e) => setIdNumber(e.target.value)} className={`w-full border rounded-lg p-2 ${isFieldMissing('תעודת זהות') ? 'border-red-500' : ''}`} placeholder="תעודת זהות" aria-invalid={isFieldMissing('תעודת זהות')}
            />
            {isFieldMissing('תעודת זהות') && (
              <p className="mt-1 text-xs text-red-600">יש למלא תעודת זהות</p>
            )}
          </div>
          <div>
            <label className="block text-sm mb-1">טלפון</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className={`w-full border rounded-lg p-2 ${(isFieldMissing('טלפון') || invalidPhone) ? 'border-red-500' : ''}`} placeholder="05XXXXXXXX" aria-invalid={isFieldMissing('טלפון') || invalidPhone}
            />
            {isFieldMissing('טלפון') && (
              <p className="mt-1 text-xs text-red-600">יש למלא טלפון</p>
            )}
            {!isFieldMissing('טלפון') && invalidPhone && (
              <p className="mt-1 text-xs text-red-600">טלפון לא תקין (פורמט: 05XXXXXXXX)</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">אימייל</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full border rounded-lg p-2 ${(isFieldMissing('אימייל') || invalidEmail) ? 'border-red-500' : ''}`} placeholder="name@example.com" aria-invalid={isFieldMissing('אימייל') || invalidEmail}
            />
            {isFieldMissing('אימייל') && (
              <p className="mt-1 text-xs text-red-600">יש למלא אימייל</p>
            )}
            {!isFieldMissing('אימייל') && invalidEmail && (
              <p className="mt-1 text-xs text-red-600">אימייל לא תקין</p>
            )}
          </div>
          <div></div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-sm mb-1">
              בחירת סניף 
              <span className="text-xs text-gray-500 font-normal">(חיפוש חכם)</span>
            </label>
            <div className={`${isFieldMissing('מספר סניף') ? 'rounded-lg ring-1 ring-red-500 p-1' : ''}`}>
              <BranchSelector
                bankCode={bank?.code}
                onSelect={handleBranchSelect}
                value={selectedBranch}
              />
            </div>
            {isFieldMissing('מספר סניף') && (
              <p className="mt-1 text-xs text-red-600">יש לבחור סניף</p>
            )}
          </div>
          <div className="col-span-2">
            <label className="block text-sm mb-1">מספר חשבון</label>
            <input value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} className={`w-full border rounded-lg p-2 ${isFieldMissing('מספר חשבון') ? 'border-red-500' : ''}`} placeholder="מס' חשבון" aria-invalid={isFieldMissing('מספר חשבון')}
            />
            {isFieldMissing('מספר חשבון') && (
              <p className="mt-1 text-xs text-red-600">יש למלא מספר חשבון</p>
            )}
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
                className={`w-full border rounded-lg p-2 bg-white ${isFieldMissing('מועד גבייה') ? 'border-red-500' : ''}`}
                aria-invalid={isFieldMissing('מועד גבייה')}
              >
                <option value="">בחר מועד...</option>
                {allowedDays.map((d) => (
                  <option key={d} value={String(d)}>{d} לחודש</option>
                ))}
              </select>
              {isFieldMissing('מועד גבייה') && (
                <p className="mt-1 text-xs text-red-600">יש לבחור מועד גבייה</p>
              )}
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
      
      {/* אזהרה על מסמכים רגישים */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-orange-800">
            <p className="font-medium mb-1">חשוב לדעת:</p>
            <p>מומלץ לא לשלוח מסמכים רפואיים רגישים במייל. בקבצים רגישים נשתמש בערוץ מאובטח לפי צורך.</p>
          </div>
        </div>
      </div>
      
      {/* הודעת שקיפות ופרטיות */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-brandBlue mt-0.5 flex-shrink-0" />
          <div className="text-sm text-brandBlue leading-relaxed">
            <p className="font-medium mb-2">שקיפות:</p>
            <p className="mb-2">
              הפרטים נדרשים לצורך טיפול בבקשה וחזרה אליך. ייתכן שנעביר מידע לספקי תשתית (אירוח/דוא"ל) 
              ולגוף ביטוחי רלוונטי לבקשה. לפרטים המלאים וזכויות עיון/תיקון/מחיקה – 
              ראו <Link href="/privacy-policy" className="underline hover:text-brandGold">מדיניות פרטיות</Link>.
            </p>
            <p className="text-xs">
              פניות בנושא פרטיות: <a href="mailto:maor@maorz.co.il" className="underline">maor@maorz.co.il</a>, 
              טל' <a href="tel:03-5040049" className="underline">03-5040049</a>.<br/>
              <strong>מאור זיני - ביטוח ופיננסים</strong>
            </p>
          </div>
        </div>
      </div>
      
      {/* תיבת הסכמה לפרטיות */}
      <div className="mt-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="mt-1 w-4 h-4 text-brandBlue border-gray-300 rounded focus:ring-brandBlue"
            required
          />
          <span className="text-sm text-brandGray">
            קראתי והבנתי את{' '}
            <Link href="/privacy-policy" className="text-brandBlue underline hover:text-brandGold">
              מדיניות הפרטיות
            </Link>
            {' '}ואני מסכים/ה לעיבוד הפרטים לצורך מתן מענה לבקשה
          </span>
        </label>
      </div>

      {missingFields.length > 0 && (
        <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-2">
          חסרים שדות: {missingFields.join(", ")}
        </div>
      )}

      <button
        onClick={submitForm}
        disabled={isGenerating || !privacyAccepted}
        className={`w-full bg-brandBlue text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors font-medium ${
          isGenerating || !privacyAccepted ? 'opacity-60 cursor-not-allowed' : ''
        }`}
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

