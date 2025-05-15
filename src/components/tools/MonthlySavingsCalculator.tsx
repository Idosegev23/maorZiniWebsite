"use client";

import { useState, useEffect } from 'react';

const MonthlySavingsCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState<number>(1000);
  const [years, setYears] = useState<number>(10);
  const [annualInterest, setAnnualInterest] = useState<number>(3);
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const calculateFutureValue = () => {
    setIsCalculating(true);
    
    // מדמה זמן חישוב
    setTimeout(() => {
      const P = monthlyPayment;
      const r = annualInterest / 12 / 100; // חישוב הריבית החודשית
      const n = years * 12; // סך החודשים
      
      // חישוב הסכום העתידי: FV = P × [((1 + r)^n - 1) / r]
      const futureValue = P * ((Math.pow(1 + r, n) - 1) / r);
      
      setResult(Math.round(futureValue));
      setIsCalculating(false);
    }, 600);
  };

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  // חישוב אוטומטי בטעינה ראשונית
  useEffect(() => {
    calculateFutureValue();
  }, []);

  return (
    <div className="p-6 md:p-8 bg-gradient-to-br from-white to-brandBeige/30 rounded-xl border border-brandGold/20 shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden">
      {/* עיטור רקע */}
      <div className="absolute top-0 right-0 w-32 h-32 -mr-6 -mt-6 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-brandBlue">
          <path d="M12 7a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 7zm0 8a1 1 0 100-2 1 1 0 000 2z" />
          <path fillRule="evenodd" d="M11.54.637a.75.75 0 01.92 0l10.5 9.75a.75.75 0 010 1.126l-10.5 9.75a.75.75 0 01-.92 0l-10.5-9.75a.75.75 0 010-1.126l10.5-9.75zm1.72 10.638L12 10.148l-1.26 1.127a.75.75 0 11-1 1.12l1.751-1.568a.75.75 0 01.998-.006L14.26 12.4a.75.75 0 11-1 1.124l-1.26-1.125v1.75a.75.75 0 11-1.5 0v-1.75l-1.26 1.125a.75.75 0 11-1-1.124l1.74-1.56a.75.75 0 01.999.006L12.75 11.275v-2.4a.75.75 0 111.5 0v2.4z" clipRule="evenodd" />
        </svg>
      </div>
      
      <div className="flex items-center mb-6 border-b border-brandGold/30 pb-4">
        <div className="bg-gradient-to-br from-brandGold to-brandGold/80 p-3 rounded-full mr-4 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-brandBlue text-xl md:text-2xl font-bold">כמה תחסוך לאורך זמן?</h2>
      </div>
      
      <div className="space-y-5 relative z-10">
        <div className="flex flex-col">
          <label htmlFor="monthlyPayment" className="mb-2 text-right text-brandGray font-medium flex items-center justify-between">
            <span>סכום חודשי להפקדה</span>
            <span className="text-sm text-brandGold">₪</span>
          </label>
          <div className="relative">
            <input
              id="monthlyPayment"
              type="number"
              value={monthlyPayment}
              onChange={(e) => {
                setMonthlyPayment(Number(e.target.value));
                setResult(null);
              }}
              className="p-3 rounded-lg border border-brandGold/30 text-right bg-white/70 focus:outline-none focus:ring-2 focus:ring-brandGold/50 focus:border-brandGold transition-all w-full"
              min="1"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brandGray/60 font-bold">
              ₪
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="years" className="mb-2 text-right text-brandGray font-medium flex items-center justify-between">
            <span>משך החיסכון</span>
            <span className="text-sm text-brandGold">שנים</span>
          </label>
          <div className="relative">
            <input
              id="years"
              type="number"
              value={years}
              onChange={(e) => {
                setYears(Number(e.target.value)); 
                setResult(null);
              }}
              className="p-3 rounded-lg border border-brandGold/30 text-right bg-white/70 focus:outline-none focus:ring-2 focus:ring-brandGold/50 focus:border-brandGold transition-all w-full"
              min="1"
              max="50"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brandGray/60 font-bold">
              שנים
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="interest" className="mb-2 text-right text-brandGray font-medium flex items-center justify-between">
            <span>ריבית שנתית</span>
            <span className="text-sm text-brandGold">%</span>
          </label>
          <div className="relative">
            <input
              id="interest"
              type="number"
              value={annualInterest}
              onChange={(e) => {
                setAnnualInterest(Number(e.target.value));
                setResult(null);
              }}
              className="p-3 rounded-lg border border-brandGold/30 text-right bg-white/70 focus:outline-none focus:ring-2 focus:ring-brandGold/50 focus:border-brandGold transition-all w-full"
              min="0"
              step="0.1"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brandGray/60 font-bold">
              %
            </span>
          </div>
        </div>

        <button
          onClick={calculateFutureValue}
          disabled={isCalculating}
          className="w-full bg-gradient-to-r from-brandGold to-brandGold/90 hover:from-brandBlue hover:to-brandBlue/90 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 mt-6 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70"
        >
          {isCalculating ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
            </svg>
          )}
          {isCalculating ? 'מחשב...' : 'חשב/י'}
        </button>
      </div>

      {result !== null && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-brandGold/20 transition-all duration-500 transform">
          <h3 className="text-lg font-semibold text-brandBlue mb-3 text-center">סכום החיסכון העתידי:</h3>
          <div className="flex items-center justify-center">
            <span className="text-3xl font-bold text-brandGold my-3 flex items-center">
              <span className="ml-2">₪</span>
              <span className="text-gradient-gold">{formatNumber(result)}</span>
            </span>
          </div>
          <div className="mt-3 pt-3 border-t border-brandGold/20">
            <p className="text-sm text-brandGray text-center">
              <span className="inline-flex items-center text-brandBlue/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                שים לב:
              </span>
              <br />
              זהו הסכום שיכול להצטבר בהפקדה חודשית רציפה בריבית קבועה, לפני מס
            </p>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .text-gradient-gold {
          background: linear-gradient(to right, #d4af37, #f9d423);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default MonthlySavingsCalculator; 