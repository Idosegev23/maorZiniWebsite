import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { BriefcaseMedical } from 'lucide-react';

export const metadata = {
  title: 'ביטוח תאונות אישיות | מאור זיני - ביטוח ופיננסים',
  description: 'ביטוח תאונות אישיות נועד לספק פיצוי מהיר שמקל על ההתמודדות עם עומס כלכלי בלתי צפוי בעקבות תאונה.',
};

const PersonalAccidentsPage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="ביטוח תאונות אישיות"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/personalins.jpg"
                    alt="ביטוח תאונות אישיות"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <BriefcaseMedical size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">שכבת הגנה ברגע שלא מתכננים</h2>
                  <p className="text-brandGray mb-6">
                    תאונה יכולה לקרות בכל רגע – במדרגות בבית, בחדר הכושר, בטיול עם הילדים או בדרך לעבודה. כאשר זה קורה, מעבר להתמודדות הרפואית, מגיע גם עומס כלכלי בלתי צפוי: ימי היעדרות, טיפולים, התאמות, ואובדן הכנסה.
                    בדיוק בשביל זה נועד ביטוח תאונות אישיות – לספק פיצוי מהיר שמקל על ההתמודדות.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מה כולל הכיסוי?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">פיצוי כספי חד-פעמי</h3>
                  <p>במקרה של שבר, כוויה או נכות</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">תשלום יומי</h3>
                  <p>עבור ימי אשפוז או חופשת מחלה</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">כיסוי להוצאות רפואיות נלוות</h3>
                  <p>כמו פיזיותרפיה או תחבורה רפואית</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">התאמה למצבים של אובדן כושר עבודה</h3>
                  <p>זמני או קבוע</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">פיצוי במקרה של מוות מתאונה</h3>
                  <p>סכום חד פעמי למוטבים</p>
                </div>
              </div>
              
              <p className="mt-6">הסכומים מוגדרים מראש, ולא תלויים באישורים מקופת החולים או בצבירת הוצאות בפועל.</p>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למי זה מתאים?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  לכל מי שמעוניין בהגנה כלכלית נוספת – בכל גיל, בכל מצב. מתאים במיוחד לעצמאיים, הורים לילדים, אנשים פעילים גופנית, או מי שלא מכוסה דרך מקום העבודה.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למה זה חשוב?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>כי אף אחד לא באמת מתכנן תאונה</li>
                <li>כי כל פגיעה יכולה לעצור את השגרה</li>
                <li>כי התמודדות כלכלית בזמן החלמה לא צריכה להיות חלק מהאתגר</li>
              </ul>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">איך מתקדמים?</h2>
              <p className="mb-8">
                שיחה קצרה מאפשרת להבין מה מתאים, כמה כיסוי נדרש, ואיך משיגים שקט נפשי – בלי בירוקרטיה, בלי התחייבות.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button 
                  variant="primary" 
                  href="/contact"
                  ariaLabel="לקביעת שיחה אישית"
                  className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
                >
                  לקביעת שיחה אישית
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

export default PersonalAccidentsPage; 