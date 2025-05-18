"use client";

import { useState, useEffect } from 'react';

const Tikun190Checker = () => {
  const [age, setAge] = useState<number>(55);
  const [receivingPension, setReceivingPension] = useState<boolean>(false);
  const [plannedDeposit, setPlannedDeposit] = useState<number>(100000);
  const [result, setResult] = useState<{ eligible: boolean; taxSavings: number } | null>(null);
  const [isChecking, setIsChecking] = useState<boolean>(false);

  const checkEligibility = () => {
    setIsChecking(true);
    
    // מדמה זמן בדיקה
    setTimeout(() => {
      const eligible = age >= 60 && receivingPension;
      const taxSavings = eligible ? plannedDeposit * 0.15 : 0;
      
      setResult({ eligible, taxSavings });
      setIsChecking(false);
    }, 600);
  };

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  // בדיקה אוטומטית בטעינה ראשונית
  useEffect(() => {
    checkEligibility();
  }, []);

  return (
    <div className="p-6 md:p-8 bg-gradient-to-br from-white to-brandBeige/30 rounded-xl border border-brandGold/20 shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden">
      {/* עיטור רקע */}
      <div className="absolute bottom-0 right-0 w-32 h-32 -mr-6 -mb-6 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-brandGold">
          <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
      </div>
      
      <div className="flex items-center mb-6 border-b border-brandGold/30 pb-4">
        <div className="bg-gradient-to-br from-brandGold to-amber-500 p-3 rounded-full mr-4 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-brandBlue text-xl md:text-2xl font-bold">האם את/ה זכאי/ת לפטור ממס לפי תיקון 190?</h2>
      </div>
      
      <div className="space-y-5 relative z-10">
        <div className="flex flex-col">
          <label htmlFor="age" className="mb-2 text-right text-brandGray font-medium flex items-center justify-between">
            <span>גיל</span>
            <span className="text-sm text-amber-600">שנים</span>
          </label>
          <div className="relative">
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => {
                setAge(Number(e.target.value));
                setResult(null);
              }}
              className="p-3 rounded-lg border border-brandGold/30 text-right bg-white/70 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all w-full"
              min="18"
              max="120"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-brandGray/60 font-medium">
              מעל 60 עשוי להקנות זכאות
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-right text-brandGray font-medium">האם מקבל/ת קצבת פנסיה?</p>
          <div className="flex space-x-6 space-x-reverse justify-end bg-white/70 p-4 rounded-lg border border-brandGold/30">
            <div className="flex items-center">
              <input
                id="pension-no"
                type="radio"
                name="pension"
                className="ml-2 w-5 h-5 text-amber-500 focus:ring-amber-400 border-brandGold/30 cursor-pointer"
                checked={!receivingPension}
                onChange={() => {
                  setReceivingPension(false);
                  setResult(null);
                }}
              />
              <label htmlFor="pension-no" className="text-brandGray cursor-pointer">לא</label>
            </div>
            <div className="flex items-center">
              <input
                id="pension-yes"
                type="radio"
                name="pension"
                className="ml-2 w-5 h-5 text-amber-500 focus:ring-amber-400 border-brandGold/30 cursor-pointer"
                checked={receivingPension}
                onChange={() => {
                  setReceivingPension(true); 
                  setResult(null);
                }}
              />
              <label htmlFor="pension-yes" className="text-brandGray cursor-pointer">כן</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="deposit" className="mb-2 text-right text-brandGray font-medium flex items-center justify-between">
            <span>סכום ההפקדה המתוכנן</span>
            <span className="text-sm text-amber-600">₪</span>
          </label>
          <div className="relative">
            <input
              id="deposit"
              type="number"
              value={plannedDeposit}
              onChange={(e) => {
                setPlannedDeposit(Number(e.target.value));
                setResult(null);
              }}
              className="p-3 rounded-lg border border-brandGold/30 text-right bg-white/70 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all w-full"
              min="1000"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brandGray/60 font-bold">
              ₪
            </span>
          </div>
        </div>

        <button
          onClick={checkEligibility}
          disabled={isChecking}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-brandGold hover:to-brandGold text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 mt-6 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70"
        >
          {isChecking ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
          {isChecking ? 'בודק...' : 'בדוק/י'}
        </button>
      </div>

      {result !== null && (
        <div className={`mt-8 p-6 bg-white rounded-lg shadow-md border ${result.eligible ? 'border-green-300' : 'border-red-300'} transform transition-all duration-500`}>
          <div className={`p-4 mb-4 rounded-lg ${result.eligible ? 'bg-gradient-to-r from-green-50 to-green-100 border border-green-200' : 'bg-gradient-to-r from-red-50 to-red-100 border border-red-200'}`}>
            <div className="flex items-center">
              {result.eligible ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 ml-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              <h3 className={`font-bold text-xl ${result.eligible ? 'text-green-800' : 'text-red-800'}`}>
                {result.eligible ? 'יש לך זכאות!' : 'אין זכאות'}
              </h3>
            </div>
            
            <p className={`mt-2 text-sm ${result.eligible ? 'text-green-700' : 'text-red-700'}`}>
              {result.eligible 
                ? 'אתה עומד בתנאי הזכאות לפטור ממס לפי תיקון 190' 
                : 'עליך להיות מעל גיל 60 ולקבל קצבת פנסיה כדי להיות זכאי'
              }
            </p>
          </div>
          
          {result.eligible && (
            <div className="mb-4 p-5 border border-amber-200 rounded-lg bg-gradient-to-r from-amber-50 to-amber-100">
              <h3 className="text-lg font-semibold text-amber-800 mb-3 text-center">חיסכון מס משוער:</h3>
              <p className="text-3xl font-bold my-2 text-center">
                <span className="text-gradient-amber">₪{formatNumber(result.taxSavings)}</span>
              </p>
              <p className="text-xs text-amber-700 text-center mt-2">
                חיסכון של 15% ממס רווחי הון על סכום ההפקדה המתוכנן
              </p>
            </div>
          )}
          
          <div className="bg-gray-50 p-4 rounded-lg mt-4 border border-gray-100">
            <p className="text-sm text-brandGray text-center leading-relaxed">
              <span className="inline-flex items-center text-brandBlue/80 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                מידע חשוב:
              </span>
              <br />
              תיקון 190 מעניק פטור ממס רווח הון בהפקדות נוספות לקצבה. כלי זה הוא להמחשה בלבד ואינו מהווה המלצה פנסיונית או מיסויית.
            </p>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .text-gradient-amber {
          background: linear-gradient(to right, #92400e, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Tikun190Checker; 