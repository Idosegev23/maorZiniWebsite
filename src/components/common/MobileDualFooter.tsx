"use client";

import React, { useState } from 'react';
import { Plane, LineChart } from 'lucide-react';
import InsurancePopup from './InsurancePopup';
import StandingOrderPopup from './StandingOrderPopup';

const MobileDualFooter: React.FC = () => {
  const [isTravelOpen, setIsTravelOpen] = useState(false);
  const [isStandingOpen, setIsStandingOpen] = useState(false);

  return (
    <>
      {/* מוצג רק במובייל */}
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
        <div className="grid grid-cols-2 gap-0 bg-white/95 backdrop-blur border-t-4 border-brandGold">
          <button
            onClick={() => setIsTravelOpen(true)}
            className="flex items-center justify-center gap-3 py-8 text-brandBlue font-medium hover:bg-brandBeige/40"
            aria-label="רכישת ביטוח חו״ל"
          >
            <Plane className="text-brandGold w-6 h-6" />
            ביטוח חו"ל
          </button>
          <button
            onClick={() => setIsStandingOpen(true)}
            className="flex items-center justify-center gap-3 py-8 text-brandBlue font-medium hover:bg-brandBeige/40"
            aria-label="פתיחת הרשאה להו״ק"
          >
            <LineChart className="text-brandGold w-6 h-6" />
            פתיחת הרשאה להו״ק
          </button>
        </div>
      </div>

      <InsurancePopup isOpen={isTravelOpen} onClose={() => setIsTravelOpen(false)} />
      <StandingOrderPopup isOpen={isStandingOpen} onClose={() => setIsStandingOpen(false)} />
    </>
  );
};

export default MobileDualFooter;

