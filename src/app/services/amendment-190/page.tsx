import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { Coins } from 'lucide-react';

export const metadata = {
  title: 'תיקון 190 | מאור זיני - ביטוח ופיננסים',
  description: 'תיקון 190 הוא פתרון השקעה המיועד לבני 60 ומעלה, המאפשר הפקדת כספים לקופת גמל עם יתרונות מס, כולל אפשרות למשיכת קצבה פטורה ממס.',
};

const Amendment190Page = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="תיקון 190"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/190.jpg"
                    alt="תיקון 190"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Coins size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">תיקון 190</h2>
                  <p className="text-brandGray mb-6">
                    פתרון השקעה המיועד לבני 60 ומעלה, המאפשר הפקדת כספים לקופת גמל עם יתרונות מס,
                    כולל אפשרות למשיכת קצבה פטורה ממס.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מהו תיקון 190?</h2>
              
              <div className="space-y-4">
                <p>
                  תיקון 190 לפקודת מס הכנסה (שנכנס לתוקף ב-2012) הוא תיקון חקיקה שמטרתו לעודד חיסכון לגיל פרישה, 
                  במיוחד עבור אוכלוסיית המבוגרים בגיל 60 ומעלה. התיקון מאפשר הפקדת כספים לקופת גמל ללא מגבלת סכום,
                  תוך קבלת הטבות מס משמעותיות, במיוחד במשיכת הכספים כקצבה.
                </p>
                
                <p>
                  התיקון מציע פתרון ייחודי לכספים פנויים שאנשים מעוניינים להשקיע באפיק עם יתרונות מס, גם בגילאים 
                  מבוגרים יחסית, כאשר אופציות החיסכון הפנסיוני המסורתיות כבר אינן רלוונטיות.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">יתרונות תיקון 190</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">פטור ממס על הרווחים</h3>
                  <p>
                    הכספים המופקדים במסגרת תיקון 190 נהנים מפטור ממס רווחי הון על הרווחים שנצברים, כל עוד הם נמשכים כקצבה 
                    (אנונה) החל מגיל פרישה.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">משיכה כקצבה פטורה ממס</h3>
                  <p>
                    הכספים שנחסכים במסגרת תיקון 190 יכולים להימשך כקצבה חודשית (אנונה) שפטורה ממס הכנסה עד לתקרה הקבועה בחוק.
                    זהו יתרון משמעותי לעומת אפיקי השקעה אחרים.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">גמישות במשיכת הכספים</h3>
                  <p>
                    ניתן למשוך את הכספים בצורה הונית (חד פעמית) בכל עת, אך במקרה כזה הרווחים יחויבו במס רווחי הון (25% כיום).
                    גם אפשרות זו מעניקה גמישות שלא קיימת במוצרי פנסיה אחרים.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">הפקדה ללא מגבלת סכום</h3>
                  <p>
                    אין מגבלה על סכום ההפקדה לקופת גמל במסגרת תיקון 190, מה שהופך אותו לאטרקטיבי במיוחד למי שיש ברשותו סכומי כסף גדולים להשקעה.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">יתרונות בתכנון מס</h3>
                  <p>
                    משיכת כספי תיקון 190 כקצבה יכולה להתבצע בנוסף למשיכת כספים מקופות גמל אחרות, ובכך להגדיל את הקצבה החודשית הפטורה ממס.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">הגנה מפני עיקולים</h3>
                  <p>
                    הכספים בקופת גמל במסגרת תיקון 190 מוגנים מפני עיקולים, מה שמעניק שכבת הגנה נוספת לחוסכים.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למי מתאים תיקון 190?</h2>
              
              <div className="space-y-4">
                <p>
                  תיקון 190 יכול להיות אטרקטיבי במיוחד עבור:
                </p>
                
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>אנשים בני 60 ומעלה עם כספים פנויים להשקעה</li>
                  <li>בעלי הון שמימשו נכסים (מכירת עסק, מכירת נדל"ן וכד') ומחפשים אפיק השקעה עם יתרונות מס</li>
                  <li>מי שמעוניין בתכנון מס לקראת פרישה</li>
                  <li>אנשים שרוצים להבטיח הכנסה קבועה נוספת בגיל פרישה</li>
                  <li>מי שמעוניין להעביר כספים לילדים בצורה יעילה מבחינת מיסוי</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">כיצד מנצלים את היתרונות של תיקון 190?</h2>
              
              <div className="space-y-4">
                <p>
                  כדי לנצל באופן מיטבי את היתרונות של תיקון 190, מומלץ לבצע תכנון מוקדם בליווי אנשי מקצוע. התכנון כולל:
                </p>
                
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>תכנון עיתוי ההפקדה והמשיכה של הכספים</li>
                  <li>בחירת קופת גמל מתאימה עם דמי ניהול תחרותיים</li>
                  <li>בחירת מסלול השקעה בהתאם לצרכים ולנטיית הסיכון</li>
                  <li>תכנון מס כולל, תוך התחשבות בכלל מקורות ההכנסה בגיל פרישה</li>
                  <li>תכנון אופן המשיכה האופטימלי - קצבה מלאה, משיכה הונית, או שילוב ביניהן</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">רוצים לבדוק אם תיקון 190 מתאים לכם?</h2>
              <p className="mb-8">אשמח לפגישת ייעוץ אישית כדי לבחון את האפשרויות העומדות בפניכם ולהתאים פתרון מיטבי לצרכים שלכם.</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button 
                  variant="primary" 
                  href="/contact"
                  ariaLabel="לתיאום פגישת ייעוץ"
                  className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
                >
                  לתיאום פגישת ייעוץ
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

export default Amendment190Page; 