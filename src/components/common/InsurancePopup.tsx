import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface InsurancePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InsurancePopup: React.FC<InsurancePopupProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-lg p-5 sm:p-6 max-w-md w-full mx-auto relative animate-fadeIn" 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-800 p-1"
          aria-label="סגור חלון"
        >
          <X size={22} />
        </button>
        
        <h3 className="text-xl font-bold text-brandBlue mb-5 sm:mb-6 text-center">בחר חברת ביטוח</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <a 
            href="https://digital.harel-group.co.il/travel-policy/?guid=bee1d408-c6a7-410e-b4ee-ac690224bdd3&an=38635"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-brandGold transition-colors hover:shadow-md"
          >
            <div className="h-16 sm:h-20 w-36 sm:w-40 relative mb-3 sm:mb-4">
              <Image
                src="/logos/harel_logo.png"
                alt="לוגו הראל"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-brandBlue font-medium">הראל</span>
          </a>
          
          <a 
            href="https://buy.passportcard.co.il/existing?AffiliateId=DJngeQ1qicy9ZRA%2FgZY3Ww%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-3 sm:p-4 border border-gray-200 rounded-lg hover:border-brandGold transition-colors hover:shadow-md"
          >
            <div className="h-16 sm:h-20 w-36 sm:w-40 relative mb-3 sm:mb-4">
              <Image
                src="/logos/passportcard_logo.png"
                alt="לוגו PassportCard"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-brandBlue font-medium">PassportCard</span>
          </a>
        </div>
        
        <p className="text-sm text-gray-500 mt-5 sm:mt-6 text-center">
          בחירת חברת הביטוח תוביל אתכם לאתר החברה להשלמת הרכישה
        </p>
      </div>
    </div>
  );
};

export default InsurancePopup; 