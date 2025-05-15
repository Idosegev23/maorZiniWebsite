import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { Accessibility } from 'lucide-react';

export const metadata = {
  title: 'ביטוח סיעודי | מאור זיני - ביטוח ופיננסים',
  description: 'ביטוח סיעודי נועד להבטיח תמיכה כלכלית במצבים של ירידה בתפקוד ולהקל על בני המשפחה, גם רגשית וגם כלכלית.',
};

const NursingInsurancePage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="ביטוח סיעודי"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/nursingins.jpg"
                    alt="ביטוח סיעודי"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Accessibility size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">דואגים להיום – וגם למחר</h2>
                  <p className="text-brandGray mb-6">
                    כשבריאות מתערערת ותפקוד יומיומי כבר לא מובן מאליו, חשוב לדעת שלא נשארים לבד. ביטוח סיעודי נועד להבטיח תמיכה כלכלית במצבים של ירידה בתפקוד – בין אם בעקבות מחלה, תאונה או הזדקנות – ולהקל על בני המשפחה, גם רגשית וגם כלכלית.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מה נחשב למצב סיעודי?</h2>
              
              <div className="space-y-4 mb-8">
                <p>כאשר מתקיימת תלות מתמשכת בעזרה בביצוע פעולות יומיומיות כמו:</p>
                
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>לקום ולהתיישב</li>
                  <li>להתלבש ולהתרחץ</li>
                  <li>לאכול, לשתות או לשלוט על הסוגרים</li>
                  <li>להתנייד ממקום למקום</li>
                </ul>
                
                <p>או כאשר קיימת ירידה קוגניטיבית משמעותית, כמו במקרים של דמנציה או אלצהיימר.</p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מה הביטוח נותן?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">תשלום חודשי קבוע</h3>
                  <p>המיועד למימון טיפול בבית או במוסד</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">אפשרות להמשך חיים בכבוד</h3>
                  <p>וללא תלות כלכלית בילדים או בני זוג</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">גמישות בתכנון</h3>
                  <p>כולל התאמה לגיל, מצב משפחתי וצרכים רפואיים</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">המשכיות גם בשינויים עתידיים</h3>
                  <p>כמו מעבר לדיור מוגן או שינוי ברמת התפקוד</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למי זה מתאים?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  לכל מי שרוצה לוודא שהמשפחה לא תצטרך "לסדר הכול" ברגע האמת – לא מבחינה כלכלית, לא מבחינה ארגונית. במיוחד מומלץ להצטרף בגיל העבודה או בפרישה – כשהמצב הרפואי תקין והעלויות נוחות.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למה זה כל כך חשוב?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>כי טיפול סיעודי יכול לעלות בין 5,000 ל-15,000 ש"ח בחודש</li>
                <li>כי המשפחה לא תמיד יכולה להיות שם כל הזמן</li>
                <li>כי מגיעה הזכות לחיות בכבוד – גם במצבים לא פשוטים</li>
              </ul>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">איך מתחילים?</h2>
              <p className="mb-8">
                שיחה קצרה מספיקה כדי להבין אם קיים כיסוי, מה מתאים לפי הגיל והמעמד המשפחתי, ואיך אפשר לבנות תוכנית שתהיה שם בדיוק כשצריך – גם אם מקווים שלא.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button 
                  variant="primary" 
                  href="/contact"
                  ariaLabel="לקביעת שיחת ייעוץ"
                  className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
                >
                  לקביעת שיחת ייעוץ
                </Button>
                
                <Button 
                  variant="secondary"
                  href="https://wa.me/972534842700" // יש להחליף למספר הטלפון הנכון
                  ariaLabel="שיחה מהירה ב-WhatsApp"
                  className="text-lg py-4 px-8 bg-[#25D366] border-2 border-[#25D366] hover:bg-transparent hover:text-[#25D366] shadow-lg"
                >
                  שיחה מהירה
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

export default NursingInsurancePage; 