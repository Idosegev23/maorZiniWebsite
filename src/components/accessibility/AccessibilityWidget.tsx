import { useState, useEffect } from 'react';
import { Moon, Sun, ZoomIn, ZoomOut, Link, X, MousePointer2 } from 'lucide-react';

type AccessibilityState = {
  fontSize: number;
  highContrast: boolean;
  highlightLinks: boolean;
  biggerCursor: boolean;
};

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilityState>({
    fontSize: 0,
    highContrast: false,
    highlightLinks: false,
    biggerCursor: false
  });

  useEffect(() => {
    // טעינת הגדרות מ-localStorage אם קיימות
    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    // החלת ההגדרות על ה-DOM
    document.documentElement.style.fontSize = `${100 + settings.fontSize * 10}%`;
    
    if (settings.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    if (settings.highlightLinks) {
      document.documentElement.classList.add('highlight-links');
    } else {
      document.documentElement.classList.remove('highlight-links');
    }
    
    if (settings.biggerCursor) {
      document.documentElement.classList.add('bigger-cursor');
    } else {
      document.documentElement.classList.remove('bigger-cursor');
    }
    
    // שמירת ההגדרות ב-localStorage
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const adjustFontSize = (increment: boolean) => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.max(-2, Math.min(5, prev.fontSize + (increment ? 1 : -1)))
    }));
  };

  const toggleHighContrast = () => {
    setSettings(prev => ({
      ...prev,
      highContrast: !prev.highContrast
    }));
  };

  const toggleHighlightLinks = () => {
    setSettings(prev => ({
      ...prev,
      highlightLinks: !prev.highlightLinks
    }));
  };
  
  const toggleBiggerCursor = () => {
    setSettings(prev => ({
      ...prev,
      biggerCursor: !prev.biggerCursor
    }));
  };

  const resetSettings = () => {
    setSettings({
      fontSize: 0,
      highContrast: false,
      highlightLinks: false,
      biggerCursor: false
    });
  };

  return (
    <div className="fixed left-6 top-[50%] transform -translate-y-1/2 z-40">
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-label="פתיחת תפריט נגישות"
        className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="16" cy="4" r="1" />
          <path d="m18 19 1-7-6 1" />
          <path d="m5 8 3-3 5 5-3 3-4.5-4.5" />
          <path d="M7 12a3 3 0 0 0-3 3v5h5v-5a3 3 0 0 0-2-2.8" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-16 top-0 w-64 bg-white p-4 rounded-lg shadow-xl" role="dialog" aria-label="אפשרויות נגישות">
          <button
            onClick={toggleOpen}
            aria-label="סגירת תפריט נגישות"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-lg font-bold mb-4 text-center">אפשרויות נגישות</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">גודל טקסט</h3>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => adjustFontSize(false)}
                  aria-label="הקטנת גודל טקסט"
                  disabled={settings.fontSize <= -2}
                  className="p-2 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                >
                  <ZoomOut size={20} />
                </button>
                <span className="font-medium">{100 + settings.fontSize * 10}%</span>
                <button
                  onClick={() => adjustFontSize(true)}
                  aria-label="הגדלת גודל טקסט"
                  disabled={settings.fontSize >= 5}
                  className="p-2 bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
                >
                  <ZoomIn size={20} />
                </button>
              </div>
            </div>
            
            <div>
              <button
                onClick={toggleHighContrast}
                aria-pressed={settings.highContrast}
                className={`flex items-center w-full p-2 rounded ${
                  settings.highContrast ? 'bg-blue-100' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {settings.highContrast ? <Moon size={20} /> : <Sun size={20} />}
                <span className="mr-2">ניגודיות גבוהה</span>
                <span className="mr-auto">{settings.highContrast ? 'פעיל' : 'כבוי'}</span>
              </button>
            </div>
            
            <div>
              <button
                onClick={toggleHighlightLinks}
                aria-pressed={settings.highlightLinks}
                className={`flex items-center w-full p-2 rounded ${
                  settings.highlightLinks ? 'bg-blue-100' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <Link size={20} />
                <span className="mr-2">הדגשת קישורים</span>
                <span className="mr-auto">{settings.highlightLinks ? 'פעיל' : 'כבוי'}</span>
              </button>
            </div>
            
            <div>
              <button
                onClick={toggleBiggerCursor}
                aria-pressed={settings.biggerCursor}
                className={`flex items-center w-full p-2 rounded ${
                  settings.biggerCursor ? 'bg-blue-100' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <MousePointer2 size={20} />
                <span className="mr-2">סמן מוגדל</span>
                <span className="mr-auto">{settings.biggerCursor ? 'פעיל' : 'כבוי'}</span>
              </button>
            </div>
            
            <div>
              <button
                onClick={resetSettings}
                className="w-full p-2 mt-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
              >
                איפוס הגדרות
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 