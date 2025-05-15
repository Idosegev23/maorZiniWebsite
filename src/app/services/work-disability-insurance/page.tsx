import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { Briefcase } from 'lucide-react';

export const metadata = {
  title: 'ביטוח אובדן כושר עבודה | מאור זיני - ביטוח ופיננסים',
  description: 'כשהיכולת להתפרנס נפגעת בעקבות מחלה או תאונה – ביטוח אובדן כושר עבודה נועד לשמור על רצף כלכלי ולהבטיח יציבות בתקופה של חוסר ודאות.',
};

const WorkDisabilityInsurancePage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="ביטוח אובדן כושר עבודה"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/lostworkins.jpg"
                    alt="ביטוח אובדן כושר עבודה"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Briefcase size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">כי החיים לא תמיד מתנהלים לפי התוכנית</h2>
                  <p className="text-brandGray mb-6">
                    כשהיכולת להתפרנס נפגעת בעקבות מחלה או תאונה – ההכנסה נעצרת, אבל ההוצאות לא. ביטוח אובדן כושר עבודה נועד לשמור על רצף כלכלי גם כשאי אפשר להמשיך לעבוד, ולהבטיח יציבות כלכלית בתקופה של חוסר ודאות.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מתי נכנס לפעולה?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  כאשר מתרחש מצב רפואי שמונע להמשיך לעבוד באותו עיסוק או בכל עיסוק אחר שמתאים לניסיון ולכישורים הקיימים. הכיסוי תקף לאחר תקופת המתנה (בדרך כלל 30–90 ימים), וממשיך כל עוד מתקיים אובדן כושר העבודה, בהתאם לתנאים שנקבעו מראש.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מה הביטוח נותן?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">תשלום חודשי קבוע</h3>
                  <p>בדומה לשכר שהיה לפני הפגיעה</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">אפשרות לבחור כיסוי לעיסוק ספציפי</h3>
                  <p>ולא רק לכל עבודה שהיא</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">מענה למקרים של נכות זמנית או קבועה</h3>
                  <p>תמיכה כלכלית במגוון מקרים רפואיים</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">גמישות בהתאמה</h3>
                  <p>לפי מקצוע, גיל ורמת הכנסה</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">שילוב עם כיסויים אחרים</h3>
                  <p>כמו ביטוח חיים או פנסיה קיימת</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למי זה מתאים?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  לכל אדם שמתפרנס מעבודתו – שכיר, עצמאי, בעל עסק או נותן שירות. מי שפרנסתו תלויה ביכולת פיזית, קוגניטיבית או מנטלית – חשוף לסיכון, גם בגיל צעיר.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מה ההבדל מול ביטוח פנסיוני?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  בקרן הפנסיה יש כיסוי בסיסי, אך הוא מוגבל בהגדרות ובגובה התשלום. ביטוח ייעודי לאובדן כושר עבודה מאפשר הגנה רחבה יותר, גם במצבים שלא מכוסים בתוכנית הפנסיונית.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למה זה קריטי?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4 mb-8">
                <li>כי פציעה או מחלה יכולים לקרות בלי אזהרה מוקדמת</li>
                <li>כי תהליך שיקום לוקח זמן – והחיים לא עוצרים בינתיים</li>
                <li>כי משפחה, משכנתא והוצאות יומיומיות לא אמורים להיפגע בגלל נסיבות בריאותיות</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">איך בונים את זה נכון?</h2>
              
              <div className="space-y-4">
                <p>
                  הכיסוי נבחר לפי סוג העיסוק, רמת ההכנסה וגובה הסיכון. אפשר להתאים את ההגדרה העיסוקית, את תקופת ההמתנה ואת גובה הפיצוי כך שיתאימו בדיוק לצרכים – ולא ישאירו מקום לטעויות כשתזדקק לו.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button 
                  variant="primary" 
                  href="/contact"
                  ariaLabel="לבדיקת התאמה אישית"
                  className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
                >
                  לבדיקת התאמה אישית
                </Button>
                
                <Button 
                  variant="secondary"
                  href="https://wa.me/972534842700" // יש להחליף למספר הטלפון הנכון
                  ariaLabel="התחלת שיחה מיידית ב-WhatsApp"
                  className="text-lg py-4 px-8 bg-[#25D366] border-2 border-[#25D366] hover:bg-transparent hover:text-[#25D366] shadow-lg"
                >
                  התחלת שיחה מיידית
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

export default WorkDisabilityInsurancePage; 