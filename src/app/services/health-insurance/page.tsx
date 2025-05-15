import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { Stethoscope } from 'lucide-react';

export const metadata = {
  title: 'ביטוח בריאות | מאור זיני - ביטוח ופיננסים',
  description: 'ביטוח בריאות פרטי מעניק אפשרות לבחור: את הרופא, את זמן הטיפול ואת הדרך לעבור את התקופה הרפואית עם מינימום אי-ודאות.',
};

const HealthInsurancePage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="ביטוח בריאות"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/healthins.jpg"
                    alt="ביטוח בריאות"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Stethoscope size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">כשהבריאות חשובה – לא מחכים בתור</h2>
                  <p className="text-brandGray mb-6">
                    ביטוח בריאות פרטי מעניק אפשרות לבחור: את הרופא, את זמן הטיפול ואת הדרך לעבור את התקופה הרפואית עם מינימום אי-ודאות.
                    לא במקום מערכת הבריאות הציבורית – אלא כהשלמה חכמה שמאפשרת גישה מהירה לטיפול איכותי, מבלי לוותר על שליטה.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מתי זה רלוונטי?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4 mb-6">
                <li>כשצריך בדיקה מתקדמת – ולא רוצים להמתין חודשים</li>
                <li>כשרוצים לבחור את הרופא או המנתח</li>
                <li>כשיש טיפול שלא כלול בסל הבריאות</li>
                <li>כשיש רצון לשקט נפשי – בידיעה שיש מענה ברגע האמת</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מה הביטוח כולל?</h2>
              <p className="mb-4">התוכנית נבנית בהתאמה אישית, ויכולה לכלול בין היתר:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">ניתוחים בארץ ובחו"ל</h3>
                  <p>כולל בחירת מנתח ובית חולים</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">תרופות שאינן בסל הבריאות</h3>
                  <p>כולל טיפולים ביולוגיים ותרופות חדשניות</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">בדיקות אבחנתיות מתקדמות</h3>
                  <p>MRI, CT ועוד</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">השתלות וטיפולים מיוחדים</h3>
                  <p>גם מחוץ לישראל</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">חוות דעת שנייה וייעוץ עם רופאים מומחים</h3>
                  <p>גישה לרופאים מובילים בתחומם</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">טיפולים מחליפי ניתוח</h3>
                  <p>כמו גלי הלם, הזרקות מתקדמות ועוד</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למי זה מתאים?</h2>
              <p className="mb-6">
                לכל מי שמעוניין בפתרון מהיר, איכותי ונגיש – ברגע שצריך. מתאים במיוחד למשפחות, לעצמאיים ולמי שלא רוצה להסתמך רק על תורים ציבוריים או זכאות חלקית.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">איך מתקדמים?</h2>
              <p className="mb-8">
                בפגישה אחת נבין יחד את הצרכים, נבחן את המצב הקיים (אם יש כבר ביטוח או שב״ן), ונתאים פתרון מדויק שמתאים גם להווה וגם להמשך הדרך.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button 
                  variant="primary" 
                  href="/contact"
                  ariaLabel="שיחת ייעוץ ללא התחייבות"
                  className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
                >
                  שיחת ייעוץ ללא התחייבות
                </Button>
                
                <Button 
                  variant="secondary"
                  href="https://wa.me/972534842700" // יש להחליף למספר הטלפון הנכון
                  ariaLabel="שליחת הודעה מהירה ב-WhatsApp"
                  className="text-lg py-4 px-8 bg-[#25D366] border-2 border-[#25D366] hover:bg-transparent hover:text-[#25D366] shadow-lg"
                >
                  שליחת הודעה מהירה
                </Button>
              </div>
              
              <Button 
                variant="outline"
                href="/services"
                ariaLabel="חזרה לכל השירותים"
                className="text-brandBlue border-brandBlue hover:bg-brandBlue hover:text-white"
              >
                חזרה לכל השירותים
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HealthInsurancePage; 