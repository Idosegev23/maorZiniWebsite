"use client";

import { useState, useEffect } from 'react';

const PensionEstimator = () => {
  const [currentAge, setCurrentAge] = useState<number>(35);
  const [retirementAge, setRetirementAge] = useState<number>(67);
  const [monthlySalary, setMonthlySalary] = useState<number>(10000);
  const [contributionPercentage, setContributionPercentage] = useState<number>(18.5);
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const calculatePension = () => {
    setIsCalculating(true);
    
    // מדמה זמן חישוב
    setTimeout(() => {
      // חישוב מספר החודשים עד פרישה
      const yearsToRetirement = retirementAge - currentAge;
      const monthsToRetirement = yearsToRetirement * 12;
      
      // חישוב סכום כולל שייצבר
      const monthlyContribution = monthlySalary * (contributionPercentage / 100);
      const totalAmount = monthlyContribution * monthsToRetirement;
      
      // חישוב קצבה חודשית (לפי מקדם 180)
      const monthlyPension = totalAmount / 180;
      
      setResult(Math.round(monthlyPension));
      setIsCalculating(false);
    }, 600);
  };

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  // חישוב אוטומטי בטעינה ראשונית
  useEffect(() => {
    calculatePension();
  }, []);

  return (
    <div className="p-6 md:p-8 bg-gradient-to-br from-white to-brandBeige/30 rounded-xl border border-brandGold/20 shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden">
      {/* עיטור רקע */}
      <div className="absolute top-0 left-0 w-32 h-32 -ml-6 -mt-6 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-full h-full text-brandBlue">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      </div>
      
      <div className="flex items-center mb-6 border-b border-brandGold/30 pb-4">
        <div className="bg-gradient-to-br from-brandBlue to-brandBlue/80 p-3 rounded-full mr-4 shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
          </svg>
        </div>
        <h2 className="text-brandBlue text-xl md:text-2xl font-bold">כמה תהיה הקצבה שלך בפרישה?</h2>
      </div>
      
      <div className="space-y-5 relative z-10">
        <div className="flex flex-col">
          <label htmlFor="currentAge" className="mb-2 text-right text-brandGray font-medium flex items-center justify-between">
            <span>גיל נוכחי</span>
            <span className="text-sm text-brandBlue">שנים</span>
          </label>
          <div className="relative">
            <input
              id="currentAge"
              type="number"
              value={currentAge}
              onChange={(e) => {
                setCurrentAge(Number(e.target.value));
                setResult(null);
              }}
              className="p-3 rounded-lg border border-brandGold/30 text-right bg-white/70 focus:outline-none focus:ring-2 focus:ring-brandBlue/50 focus:border-brandBlue transition-all w-full"
              min="18"
              max="67"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="retirementAge" className="mb-2 text-right text-brandGray font-medium flex items-center justify-between">
            <span>גיל פרישה</span>
            <span className="text-sm text-brandBlue">שנים</span>
          </label>
          <div className="relative">
            <input
              id="retirementAge"
              type="number"
              value={retirementAge}
              onChange={(e) => {
                setRetirementAge(Number(e.target.value));
                setResult(null);
              }}
              className="p-3 rounded-lg border border-brandGold/30 text-right bg-white/70 focus:outline-none focus:ring-2 focus:ring-brandBlue/50 focus:border-brandBlue transition-all w-full"
              min={currentAge + 1}
              max="80"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-brandGray/60 font-semibold">
              ברירת מחדל: 67
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="monthlySalary" className="mb-2 text-right text-brandGray font-medium flex items-center justify-between">
            <span>שכר חודשי ממוצע</span>
            <span className="text-sm text-brandBlue">₪</span>
          </label>
          <div className="relative">
            <input
              id="monthlySalary"
              type="number"
              value={monthlySalary}
              onChange={(e) => {
                setMonthlySalary(Number(e.target.value));
                setResult(null);
              }}
              className="p-3 rounded-lg border border-brandGold/30 text-right bg-white/70 focus:outline-none focus:ring-2 focus:ring-brandBlue/50 focus:border-brandBlue transition-all w-full"
              min="1"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brandGray/60 font-bold">
              ₪
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="contributionPercentage" className="mb-2 text-right text-brandGray font-medium flex items-center justify-between">
            <span>שיעור הפקדה</span>
            <span className="text-sm text-brandBlue">%</span>
          </label>
          <div className="relative">
            <input
              id="contributionPercentage"
              type="number"
              value={contributionPercentage}
              onChange={(e) => {
                setContributionPercentage(Number(e.target.value));
                setResult(null);
              }}
              className="p-3 rounded-lg border border-brandGold/30 text-right bg-white/70 focus:outline-none focus:ring-2 focus:ring-brandBlue/50 focus:border-brandBlue transition-all w-full"
              min="1"
              max="30"
              step="0.1"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brandGray/60 font-bold">%</span>
          </div>
          <p className="text-xs text-brandGray mt-1 text-left">הפקדה רגילה: 18.5%</p>
        </div>

        <button
          onClick={calculatePension}
          disabled={isCalculating}
          className="w-full bg-gradient-to-r from-brandBlue to-brandBlue/90 hover:from-brandGold hover:to-brandGold/90 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 mt-6 shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70"
        >
          {isCalculating ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
          {isCalculating ? 'מחשב...' : 'חשב/י'}
        </button>
      </div>

      {result !== null && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-brandGold/20 transform transition-all duration-500">
          <h3 className="text-lg font-semibold text-brandBlue mb-3 text-center">קצבה מוערכת לחודש בפרישה:</h3>
          <div className="flex items-center justify-center">
            <span className="text-3xl font-bold text-brandBlue my-3 flex items-center">
              <span className="ml-2">₪</span>
              <span className="text-gradient-blue">{formatNumber(result)}</span>
            </span>
          </div>
          <div className="mt-3 pt-3 border-t border-brandGold/20">
            <p className="text-sm text-brandGray text-center">
              <span className="inline-flex items-center text-brandBlue/80">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                חשוב לדעת:
              </span>
              <br />
              החישוב מבוסס על מקדם פנסיה סטנדרטי של 180 ואינו לוקח בחשבון גידול בשכר והשקעות
            </p>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .text-gradient-blue {
          background: linear-gradient(to right, #1e3a8a, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default PensionEstimator; 