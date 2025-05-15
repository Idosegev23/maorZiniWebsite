"use client";

import { useState } from 'react';
import { Plane } from 'lucide-react';
import InsurancePopup from './InsurancePopup';

const TravelButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsPopupOpen(true)}
        className="
          fixed z-50 
          md:top-1/2 md:-translate-y-1/2 md:right-5 md:rounded-xl md:px-5 md:py-2.5
          sm:bottom-20 sm:right-5 sm:left-auto sm:rounded-xl
          bottom-0 right-0 left-0 rounded-none
          flex items-center justify-center gap-2 
          sm:py-3 sm:px-4 py-3
          bg-brandBlue text-white shadow-lg hover:bg-opacity-90 transition-colors"
        aria-label="רכישת ביטוח חו״ל"
      >
        <Plane className="text-brandGold w-5 h-5" />
        <span className="text-sm md:text-base font-medium">לרכישת ביטוח נסיעות</span>
      </button>
      
      <InsurancePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
};

export default TravelButton; 