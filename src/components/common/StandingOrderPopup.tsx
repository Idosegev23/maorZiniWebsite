"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import StandingOrderForm from './StandingOrderForm';
import StandingOrderInstructions from './StandingOrderInstructions';

interface StandingOrderPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'insurance' | 'bank' | 'otherBanks' | 'form';

interface InsuranceCompany {
  id: string;
  name: string;
  code: string;
  logo?: string;
}

interface Bank {
  id: string;
  name: string;
  code: string;
  directUrl?: string;
}

const insuranceCompanies: InsuranceCompany[] = [
  { id: 'harel', name: 'הראל', code: '001', logo: '/logos/harel_logo.png' },
  { id: 'menorah', name: 'מנורה מבטחים', code: '002', logo: '/logos/menora.png' },
  { id: 'altshuler', name: 'אלטשולר שחם', code: '003', logo: '/logos/altshuler.png' },
  { id: 'clal', name: 'כלל', code: '004', logo: '/logos/clal.png' },
  { id: 'migdal', name: 'מגדל', code: '005', logo: '/logos/migdal.png' },
  { id: 'hachshara', name: 'הכשרה', code: '006', logo: '/logos/Hachshara_logo.png' },
  { id: 'analyst', name: 'אנליסט', code: '007', logo: '/logos/analyst.png' },
  { id: 'excelence', name: 'אקסלנס', code: '008', logo: '/logos/excellence-logo.webp' },
  { id: 'meitav', name: 'מיטב', code: '009', logo: '/logos/meitav.png' },
  { id: 'more', name: 'מור', code: '010', logo: '/logos/more.png' },
];

const mainBanks: Bank[] = [
  { id: 'leumi', name: 'בנק לאומי', code: '10' },
  { id: 'discount', name: 'בנק דיסקונט', code: '11' },
  { id: 'hapoalim', name: 'בנק הפועלים', code: '12', directUrl: 'https://links.bankhapoalim.co.il/account/chaccount/new/' },
  { id: 'mizrahi', name: 'בנק מזרחי טפחות', code: '20' },
];

const otherBanks: Bank[] = [
  { id: 'igud', name: 'בנק איגוד', code: '13' },
  { id: 'otzar', name: 'בנק אוצר החייל', code: '14' },
  { id: 'yahav', name: 'בנק יהב', code: '04' },
  { id: 'jerusalem', name: 'בנק ירושלים', code: '54' },
  { id: 'massad', name: 'בנק מסד', code: '46' },
  { id: 'arab', name: 'הבנק הערבי הישראלי', code: '17' },
  { id: 'mercantile', name: 'הבנק המרכנתיל', code: '17' },
  { id: 'international', name: 'הבנק הבינלאומי', code: '31' },
];

const StandingOrderPopup: React.FC<StandingOrderPopupProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<Step>('insurance');
  const [selectedInsurance, setSelectedInsurance] = useState<InsuranceCompany | null>(null);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);

  // מונע גלילה של הרקע כשהפופאפ פתוח
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // איפוס מצב כשהפופאפ נסגר
  useEffect(() => {
    if (!isOpen) {
      setCurrentStep('insurance');
      setSelectedInsurance(null);
      setSelectedBank(null);
      setShowInstructions(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleInsuranceSelect = (insurance: InsuranceCompany) => {
    setSelectedInsurance(insurance);
    setCurrentStep('bank');
  };

  const handleBankSelect = (bank: Bank) => {
    setSelectedBank(bank);
    
    // אם לבנק יש קישור ישיר, פתח אותו בחלון חדש
    if (bank.directUrl) {
      window.open(bank.directUrl, '_blank', 'noopener,noreferrer');
      // סגור את הפופאפ
      onClose();
      return;
    }
    
    // אחרת המשך לטופס הפנימי
    setCurrentStep('form');
  };

  const handleOtherBanksClick = () => {
    setCurrentStep('otherBanks');
  };

  const handleBackClick = () => {
    if (currentStep === 'bank') {
      setCurrentStep('insurance');
    } else if (currentStep === 'otherBanks') {
      setCurrentStep('bank');
    } else if (currentStep === 'form') {
      setCurrentStep('bank');
    }
  };

  const renderInsuranceStep = () => (
    <>
      <h3 className="text-xl font-bold text-brandBlue mb-6 text-center">בחר חברת ביטוח</h3>
      <div className="grid grid-cols-2 gap-4">
        {insuranceCompanies.map((company) => (
          <button
            key={company.id}
            onClick={() => handleInsuranceSelect(company)}
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-brandGold transition-colors hover:shadow-md"
          >
            {company.logo ? (
              <div className="h-12 w-28 relative mb-3">
                <Image
                  src={company.logo}
                  alt={`לוגו ${company.name}`}
                  fill
                  sizes="(max-width: 640px) 112px, 160px"
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="h-12 w-28 mb-3 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400">לוגו</span>
              </div>
            )}
            <span className="text-brandBlue font-medium text-sm">{company.name}</span>
          </button>
        ))}
      </div>
    </>
  );

  const renderBankStep = () => (
    <>
      <div className="flex items-center mb-6">
        <button onClick={handleBackClick} className="mr-3 text-gray-500 hover:text-gray-800">
          <ArrowRight size={20} />
        </button>
        <h3 className="text-xl font-bold text-brandBlue">בחר בנק</h3>
      </div>
      
      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-brandBlue">
          חברת ביטוח נבחרה: <strong>{selectedInsurance?.name}</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {mainBanks.map((bank) => (
          <button
            key={bank.id}
            onClick={() => handleBankSelect(bank)}
            className="p-4 border border-gray-200 rounded-lg hover:border-brandGold transition-colors hover:shadow-md text-right flex justify-between items-center"
          >
            <span className="text-brandBlue font-medium">{bank.name}</span>
            {bank.directUrl && (
              <ExternalLink size={16} className="text-gray-400" />
            )}
          </button>
        ))}
        
        <button
          onClick={handleOtherBanksClick}
          className="p-4 border border-gray-300 rounded-lg hover:border-brandGold transition-colors hover:shadow-md text-right bg-gray-50"
        >
          <span className="text-brandBlue font-medium">בנקים אחרים</span>
        </button>
      </div>
      
      {mainBanks.some(bank => bank.directUrl) && (
        <p className="text-xs text-gray-500 mt-3 text-center">
          <ExternalLink size={12} className="inline ml-1" />
          בנקים עם סמל יפתחו באתר הבנק למילוי הרשאה
        </p>
      )}
    </>
  );

  const renderOtherBanksStep = () => (
    <>
      <div className="flex items-center mb-6">
        <button onClick={handleBackClick} className="mr-3 text-gray-500 hover:text-gray-800">
          <ArrowRight size={20} />
        </button>
        <h3 className="text-xl font-bold text-brandBlue">בחר בנק</h3>
      </div>

      <div className="max-h-60 overflow-y-auto">
        <div className="grid grid-cols-1 gap-3">
          {otherBanks.map((bank) => (
            <button
              key={bank.id}
              onClick={() => handleBankSelect(bank)}
              className="p-3 border border-gray-200 rounded-lg hover:border-brandGold transition-colors hover:shadow-md text-right flex justify-between items-center"
            >
              <span className="text-brandBlue font-medium">{bank.name}</span>
              <span className="text-gray-500 text-sm">קוד: {bank.code}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );

  const renderFormStep = () => (
    <>
      <div className="flex items-center mb-4">
        <button onClick={handleBackClick} className="mr-3 text-gray-500 hover:text-gray-800">
          <ArrowRight size={20} />
        </button>
        <h3 className="text-xl font-bold text-brandBlue">
          {showInstructions ? 'הוראות המשך תהליך' : 'מילוי הרשאת הוראת קבע'}
        </h3>
      </div>
      {selectedInsurance && selectedBank && !showInstructions && (
        <StandingOrderForm
          insurance={selectedInsurance}
          bank={selectedBank}
          onClose={onClose}
          onSuccess={() => setShowInstructions(true)}
        />
      )}
      {showInstructions && selectedBank && (
        <div className="p-6">
          <StandingOrderInstructions bankId={selectedBank.id} onClose={onClose} />
        </div>
      )}
    </>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'insurance':
        return renderInsuranceStep();
      case 'bank':
        return renderBankStep();
      case 'otherBanks':
        return renderOtherBanksStep();
      case 'form':
        return renderFormStep();
      default:
        return renderInsuranceStep();
    }
  };

  const getTitle = () => {
    if (showInstructions) return 'הוראות לביצוע';
    if (currentStep === 'insurance') return 'בחירת חברת ביטוח';
    if (currentStep === 'bank') return 'בחירת בנק';
    if (currentStep === 'otherBanks') return 'בחירת בנק אחר';
    return 'מילוי הרשאה להוראת קבע';
  };

  const getSubtitle = () => {
    if (showInstructions) return 'עקוב אחר השלבים המפורטים לביצוע ההרשאה';
    if (currentStep === 'insurance') return 'בחר את חברת הביטוח שלך';
    if (currentStep === 'bank' || currentStep === 'otherBanks') return 'בחר את הבנק שלך';
    return 'מלא את הפרטים הנדרשים והוסף חתימה';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-3xl mx-auto relative overflow-hidden" 
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-brandBlue text-white px-6 py-5 border-b-4 border-brandGold">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {currentStep !== 'insurance' && !showInstructions && (
                <button
                  onClick={handleBackClick}
                  className="rounded-full bg-white/10 hover:bg-white/20 transition-colors p-2"
                  aria-label="חזור"
                >
                  <ArrowRight size={18} />
                </button>
              )}
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-0.5">{getTitle()}</h2>
                <p className="text-xs md:text-sm text-brandBeige">{getSubtitle()}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="rounded-full border border-white/30 hover:bg-white/10 transition-colors p-2"
              aria-label="סגור חלון"
            >
              <X size={20} />
            </button>
          </div>

          {/* Steps indicator */}
          {!showInstructions && (
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className={`h-1.5 w-16 rounded-full ${currentStep === 'insurance' ? 'bg-brandGold' : 'bg-brandBeige/50'}`}></div>
              <div className={`h-1.5 w-16 rounded-full ${(currentStep === 'bank' || currentStep === 'otherBanks') ? 'bg-brandGold' : 'bg-brandBeige/50'}`}></div>
              <div className={`h-1.5 w-16 rounded-full ${currentStep === 'form' ? 'bg-brandGold' : 'bg-brandBeige/50'}`}></div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-6 py-6 max-h-[calc(95vh-140px)] overflow-y-auto bg-white">
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  );
};

export default StandingOrderPopup;