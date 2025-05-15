import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { Wallet } from 'lucide-react';

export const metadata = {
  title: 'חיסכון והשקעות | מאור זיני - ביטוח ופיננסים',
  description: 'תכנון וניהול של חסכונות פיננסיים באמצעות כלים שונים, המותאמים לטווח הזמן, רמת הסיכון והמטרות הפיננסיות האישיות שלך.',
};

const ManagedSavingsPage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="חיסכון והשקעות"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/investment2.jpg"
                    alt="חיסכון והשקעות"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Wallet size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">ממטרה חכמה – לצמיחה יציבה</h2>
                  <p className="text-brandGray mb-6">
                    כסף שיושב בעו"ש לא עובד. עם תכנון נכון, גם סכום קטן יכול לצמוח ולהפוך לביטחון כלכלי בעתיד. חיסכון והשקעה הם כלים פשוטים ונגישים שיכולים לשרת מטרות שונות: חינוך לילדים, רכישת נכס, פרישה נוחה או פשוט שקט כלכלי.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">למי זה מתאים?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  לכל מי שרוצה לייצר לעצמו גב כלכלי – גם בלי להיות מומחה לשוק ההון. מתאים במיוחד למי שמעדיף תכנון אישי, ללא סיכון מיותר, ובהתאם לקצב שמתאים ליכולות ולמטרות החיים.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מה אפשר להשיג?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4 mb-8">
                <li>חיסכון גמיש עם נזילות מלאה – בלי קנסות או התחייבויות</li>
                <li>השקעות בהתאמה אישית לפי רמת סיכון ופרק זמן</li>
                <li>פיזור בין מסלולים: סולידי, מחקה מדד, מנייתי או משולב</li>
                <li>אפשרות להפקדות חודשיות קבועות או הפקדות חד-פעמיות</li>
                <li>התאמה מלאה למיסוי – כולל ניצול פטורים והקלות מס</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למה זה עדיף על השארת הכסף בבנק?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4 mb-8">
                <li>כי בריבית אפסית הכסף נשחק</li>
                <li>כי גם חיסכון של 200 ₪ בחודש יכול לגדול משמעותית לאורך זמן</li>
                <li>כי יש דרכים חכמות להרוויח יותר – בלי לקחת סיכונים מיותרים</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">איך מתחילים?</h2>
              
              <div className="space-y-4">
                <p>
                  המפתח הוא תכנון מדויק: מטרה, תקופה ורמת נוחות. בשיחה קצרה אפשר להבין מה מתאים, לבחון את האפשרויות, ולהתחיל לבנות תהליך חיסכון שלא מרגיש כבד – אבל כן מביא תוצאות.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מוכנים להתחיל לבנות את העתיד הכלכלי שלכם?</h2>
              <p className="mb-8">אשמח לסייע לכם לבנות תכנית חיסכון והשקעות מותאמת אישית לצרכים ולמטרות שלכם.</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button 
                  variant="primary" 
                  href="/contact"
                  ariaLabel="התחלת תכנון חכם"
                  className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
                >
                  התחלת תכנון חכם
                </Button>
                
                <Button 
                  variant="secondary"
                  href="https://wa.me/972534842700" // יש להחליף למספר הטלפון הנכון
                  ariaLabel="קבלת מידע ב-WhatsApp"
                  className="text-lg py-4 px-8 bg-[#25D366] border-2 border-[#25D366] hover:bg-transparent hover:text-[#25D366] shadow-lg"
                >
                  קבלת מידע
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

export default ManagedSavingsPage; 