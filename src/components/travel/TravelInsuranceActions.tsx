'use client';

import React, { useState } from 'react';
import Button from '@/components/common/Button';
import InsurancePopup from '@/components/common/InsurancePopup';

const TravelInsuranceActions = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
        <Button 
          variant="primary" 
          href="/contact"
          ariaLabel="לתיאום שיחה קצרה לפני הנסיעה"
          className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
        >
          לתיאום שיחה קצרה לפני הנסיעה
        </Button>
        
        <Button 
          variant="secondary"
          href="https://wa.me/972534842700" // יש להחליף למספר הטלפון הנכון
          ariaLabel="בקשת ביטוח מהירה ב-WhatsApp"
          className="text-lg py-4 px-8 bg-[#25D366] border-2 border-[#25D366] hover:bg-transparent hover:text-[#25D366] shadow-lg"
        >
          בקשת ביטוח מהירה
        </Button>

        <button
          onClick={openPopup}
          className="text-lg py-4 px-8 bg-brandBlue text-white border-2 border-brandBlue hover:bg-transparent hover:text-brandBlue shadow-lg rounded-lg transition-colors"
          aria-label="רכישת ביטוח נסיעות לחו״ל"
        >
          רכישת ביטוח נסיעות לחו״ל
        </button>
      </div>

      <InsurancePopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
};

export default TravelInsuranceActions; 