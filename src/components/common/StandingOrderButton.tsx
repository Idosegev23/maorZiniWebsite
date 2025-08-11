"use client";

import { useState } from 'react';
import { CreditCard } from 'lucide-react';
import StandingOrderPopup from './StandingOrderPopup';

const StandingOrderButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsPopupOpen(true)}
        className="
          hidden md:flex fixed z-50
          md:h-16 md:px-5 md:items-center md:justify-start md:gap-3
          md:rounded-full
          md:top-[60%] md:-translate-y-1/2 md:right-5
          bg-brandBlue text-white shadow-lg hover:bg-opacity-90 transition-colors"
        aria-label="קופות גמל להשקעה"
      >
        <CreditCard className="text-brandGold w-5 h-5" />
        <span className="text-sm md:text-base font-medium text-white">
          קופות גמל להשקעה
        </span>
      </button>
      
      <StandingOrderPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </>
  );
};

export default StandingOrderButton;