import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { Calculator } from 'lucide-react';

export const metadata = {
  title: 'תכנון פנסיוני | מאור זיני - ביטוח ופיננסים',
  description: 'תכנון נכון של הפנסיה מבטיח עתיד כלכלי בטוח. אני מסייעת בבחירת הקרן המתאימה, בדיקת דמי ניהול, והתאמת מסלול השקעה לצרכים האישיים.',
};

const PensionPlanningPage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="חיסכון פנסיוני"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/pension.jpg"
                    alt="חיסכון פנסיוני"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Calculator size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">כדי להגיע מוכנים ליום שאחרי</h2>
                  <p className="text-brandGray mb-6">
                    החיים לא עוצרים בגיל הפרישה – להפך. דווקא אז נדרש ביטחון כלכלי שמאפשר להמשיך לחיות באותה רמת חיים, בלי להיות תלויים באחרים. ככל שמתחילים לתכנן מוקדם יותר – כך אפשר לבנות תשתית יציבה ונכונה יותר לעתיד.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">למה חשוב לעצור ולבדוק?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4 mb-8">
                <li>כדי לוודא שלא יהיו פערים בהכנסה אחרי גיל הפרישה</li>
                <li>כדי לתקן קופות ישנות או כפולות</li>
                <li>כדי להבין כמה באמת נשאר בסוף – נטו</li>
                <li>כדי לא לפספס הטבות מס שמגיעות כחוק</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מה כולל התכנון?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4 mb-8">
                <li>מיפוי מלא של כל הקופות, הביטוחים וההפקדות</li>
                <li>בדיקה של כיסוי ביטוחי קיים – אובדן כושר עבודה, שאירים וסיעוד</li>
                <li>התאמה של מסלולי השקעה לפי גיל ויעדים</li>
                <li>בדיקה של דמי ניהול ואפשרות להפחתתם</li>
                <li>תכנון משיכת קצבאות ו/או היוון לפי הצרכים המשתנים</li>
                <li>שילוב חכם של קופות גמל, קרנות פנסיה וביטוחי מנהלים</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למי זה רלוונטי?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  לשכירים ולעצמאיים בכל גיל. במיוחד למי שמרגיש שהדברים "מתנהלים לבד", אבל רוצה להבין מה באמת קורה עם הכסף שחוסך. כדאי במיוחד לבדוק במעבר מקום עבודה, עם פתיחת עסק, או לקראת גיל 50–60.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מה ההבדל בין מוצרי הפנסיה?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">קרן פנסיה</h3>
                  <p>
                    הפתרון הנפוץ ביותר, כולל גם כיסויים ביטוחיים. מסלול חיסכון פנסיוני המעניק קצבה חודשית לאחר הפרישה וכולל גם כיסוי לאובדן כושר עבודה וביטוח שארים למקרה פטירה.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">קופת גמל</h3>
                  <p>
                    חיסכון הוני או קצבתי, גמיש ונזיל בפרישה. מאפשרת משיכת כספים כקצבה (אנונה) או כסכום הוני בתנאים מסוימים ומתאימה כהשלמה לחיסכון פנסיוני בסיסי.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">ביטוח מנהלים</h3>
                  <p>
                    מסלול פרמיות קבועות עם הבטחה פנסיונית. פוליסת ביטוח חיים הכוללת חיסכון פנסיוני, המאפשרת גמישות רבה בבחירת הכיסויים הביטוחיים והסדרי הפרישה.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="font-medium">
                  לכל אחד יתרונות וחסרונות – מה שחשוב זה לבחור את השילוב שמתאים לצרכים האישיים ולשלב החיים.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">שיקולים בבחירת חיסכון פנסיוני</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">דמי ניהול</h3>
                  <p>
                    הבדל של כמה עשיריות האחוז בדמי הניהול עשוי להסתכם במאות אלפי שקלים בטווח הארוך.
                    חשוב לבדוק הן את דמי הניהול מההפקדות והן את דמי הניהול מהצבירה.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">מסלולי השקעה</h3>
                  <p>
                    חשוב לבחור את מסלול ההשקעה בהתאם לגיל, נטיית הסיכון, והמומחיות של הגוף המנהל.
                    לצעירים מומלץ לשקול מסלולים עם חשיפה גבוהה יותר למניות.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">כיסויים ביטוחיים</h3>
                  <p>
                    כיסויי ביטוח כמו אובדן כושר עבודה וביטוח חיים הם חלק חשוב מהתכנון הפנסיוני הכולל.
                    יש לשקול אותם כחלק מהפתרון, תוך מציאת האיזון המתאים בין כיסוי להפקדות לחיסכון.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">איך מתקדמים?</h2>
              <p className="mb-8">מפגש קצר מאפשר להבין את התמונה המלאה ולבנות מסלול מותאם אישית. התכנון לוקח בחשבון גם את ההווה – וגם את המחר.</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button 
                  variant="primary" 
                  href="/contact"
                  ariaLabel="תיאום פגישת תכנון פנסיוני"
                  className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
                >
                  תיאום פגישת תכנון פנסיוני
                </Button>
                
                <Button 
                  variant="secondary"
                  href="https://wa.me/972534842700" // יש להחליף למספר הטלפון הנכון
                  ariaLabel="שיחת ייעוץ מהירה ב-WhatsApp"
                  className="text-lg py-4 px-8 bg-[#25D366] border-2 border-[#25D366] hover:bg-transparent hover:text-[#25D366] shadow-lg"
                >
                  שיחת ייעוץ מהירה
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

export default PensionPlanningPage; 