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
          hidden md:flex md:fixed md:z-50
          md:h-16 md:px-5 md:items-center md:justify-start md:gap-3
          md:rounded-full md:top-1/2 md:-translate-y-1/2 md:right-5
          bg-brandBlue text-white shadow-lg hover:bg-opacity-90 transition-colors"
        aria-label="רכישת ביטוח חו״ל"
      >
        <Plane className="text-brandGold w-5 h-5" />
        <span className="text-sm md:text-base font-medium text-white">
          לרכישת ביטוח נסיעות לחו"ל
        </span>
      </button>
      
      <InsurancePopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
};

export default TravelButton; 