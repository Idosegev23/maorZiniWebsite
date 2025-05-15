import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { Plane } from 'lucide-react';
import TravelInsuranceActions from '@/components/travel/TravelInsuranceActions';

export const metadata = {
  title: 'ביטוח נסיעות לחו"ל | מאור זיני - ביטוח ופיננסים',
  description: 'ביטוח נסיעות לחו"ל מעניק מענה מהיר ואפקטיבי כשקורה משהו רפואי, תאונה או עיכוב בלתי צפוי בטיול בחו"ל.',
};

const TravelInsurancePage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title='ביטוח נסיעות לחו"ל'
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/travelins.jpg"
                    alt='ביטוח נסיעות לחו"ל'
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Plane size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">לנסוע בראש שקט – ולחזור בביטחון</h2>
                  <p className="text-brandGray mb-6">
                    טיול בחו״ל אמור להיות חוויה טובה. לפעמים זו חופשה קצרה, לפעמים נסיעת עבודה, ולפעמים ביקור משפחתי. אבל ברגע האמת – כשקורה משהו רפואי, תאונה, או עיכוב בלתי צפוי – חשוב לדעת שיש מענה מהיר, פשוט, ובעיקר אפקטיבי.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">למה חשוב ביטוח נסיעות?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4 mb-8">
                <li>כי טיפול רפואי בחו״ל עלול לעלות אלפי דולרים</li>
                <li>כי תאונה, ביטול טיסה או אובדן מזוודה יכולים להפוך את הנסיעה לסיוט</li>
                <li>כי יש דברים שאי אפשר לצפות מראש – אבל אפשר להתכונן אליהם</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מה כולל הביטוח?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">כיסוי להוצאות רפואיות בחו"ל</h3>
                  <p>כולל אשפוז, רופא, תרופות</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">פינוי רפואי והטסה רפואית</h3>
                  <p>במקרה הצורך</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">ביטול נסיעה</h3>
                  <p>מסיבות רפואיות או משפחתיות</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">איתור כבודה</h3>
                  <p>פיצוי במקרה של גניבה או אובדן</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">אחריות כלפי צד שלישי</h3>
                  <p>במקרה של נזק שגרמת לאחרים</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">אפשרות להוסיף הרחבות</h3>
                  <p>ספורט אתגרי, היריון, ציוד יקר ועוד</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">איך מתאימים את הכיסוי?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  ביטוח טוב נבנה לפי סוג הנסיעה: טיול משפחתי, חופשה קצרה, נסיעת עסקים או טיול ארוך. גם הגיל, מצב רפואי קודם, ויעד הנסיעה משפיעים על ההמלצה.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מתי מצטרפים?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  מומלץ להסדיר את הביטוח מיד אחרי הזמנת הטיסה – כך הכיסוי לביטול נסיעה נכנס לתוקף באופן מיידי. ניתן להצטרף גם ברגע האחרון, אך ככל שהקדמה גדולה יותר – כך גמישות הכיסוי משתפרת.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">ואיך זה עובד בפועל?</h2>
              
              <div className="space-y-4">
                <p>
                  ברגע שקורה משהו – פונים למוקד 24/7, מקבלים הנחיות מדויקות, וממשיכים לקבל את השירות עד לפתרון מלא. כל ההוצאות מכוסות מראש או מוחזרות – לפי סוג האירוע ותנאי התוכנית שנבחרה.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">רוצים לנסוע בראש שקט?</h2>
              <p className="mb-8">אפשר לסגור את הביטוח תוך דקות – עם התאמה אישית לצרכים, ובדיקה מהירה של כל הסעיפים החשובים.</p>
              
              <TravelInsuranceActions />
              
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

export default TravelInsurancePage; 