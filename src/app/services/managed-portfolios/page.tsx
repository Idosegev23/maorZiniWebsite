import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { BarChart4 } from 'lucide-react';

export const metadata = {
  title: 'תיקים מנוהלים | מאור זיני - ביטוח ופיננסים',
  description: 'ניהול השקעות מקצועי המותאם לפרופיל הסיכון שלך, עם פיזור רחב וניהול שוטף של התיק.',
};

const ManagedPortfoliosPage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="תיקים מנוהלים"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/investment.jpg"
                    alt="תיקים מנוהלים"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <BarChart4 size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">תיקים מנוהלים</h2>
                  <p className="text-brandGray mb-6">
                    ניהול השקעות מקצועי המותאם לפרופיל הסיכון שלך, עם פיזור רחב וניהול שוטף של התיק.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מה הם תיקים מנוהלים?</h2>
              
              <div className="space-y-4">
                <p>
                  תיק השקעות מנוהל הוא שירות השקעות שבו מנהל תיקים מקצועי מקבל החלטות השקעה עבורך, בהתאם למטרותיך, לרמת הסיכון 
                  שבחרת ולטווח ההשקעה שלך. הניהול כולל בחירת נכסים, ביצוע עסקאות, מעקב שוטף, והתאמות בהתאם לשינויים בשווקים.
                </p>
                
                <p>
                  בשונה מקרנות נאמנות, תיק מנוהל הוא אישי לחלוטין, והנכסים בו שייכים לך באופן ישיר. כמו כן, אתה רואה בשקיפות מלאה את כל 
                  הפעולות ועלויות הניהול.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">יתרונות תיק השקעות מנוהל</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">ניהול מקצועי</h3>
                  <p>
                    תיק ההשקעות מנוהל על ידי מומחים בעלי ידע, ניסיון וכלים מקצועיים. מנהלי התיקים עוקבים כל העת אחר מגמות בשווקים, מחקרים 
                    ואירועים כלכליים שעשויים להשפיע על הנכסים בתיק.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">פיזור רחב</h3>
                  <p>
                    תיק מנוהל מאפשר פיזור איכותי של ההשקעות בין מגוון נכסים, ענפים, ואזורים גאוגרפיים. פיזור נכון מפחית את הסיכון הכולל של התיק,
                    מבלי לפגוע בפוטנציאל התשואה.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">התאמה אישית</h3>
                  <p>
                    התיק מותאם לצרכים האישיים שלך, למטרות ההשקעה, למגבלות המס, ולרמת הסיכון המתאימה לך. בניגוד למוצרים אחידים כמו קרנות נאמנות, 
                    בתיק מנוהל יש גמישות מלאה בהתאמת ההשקעות.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">שקיפות מלאה</h3>
                  <p>
                    אתה יכול לצפות בכל עת בפירוט הנכסים בתיק, בפעולות שבוצעו, בתשואות ובעלויות. זוהי שקיפות שלא תמיד קיימת במוצרי השקעה אחרים.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">יעילות מס</h3>
                  <p>
                    תיק מנוהל מאפשר תכנון מס יעיל, כולל קיזוז הפסדים מול רווחים לצורכי מס, דחיית אירועי מס, והתאמה לשיקולי מס אישיים.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למי מתאים תיק השקעות מנוהל?</h2>
              
              <div className="space-y-4">
                <p>
                  תיק השקעות מנוהל מתאים במיוחד למשקיעים הבאים:
                </p>
                
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>אנשים שאין להם את הידע, הזמן או הרצון לנהל בעצמם את השקעותיהם</li>
                  <li>משקיעים עם סכומי השקעה משמעותיים (בד"כ מעל 500 אלף ש"ח)</li>
                  <li>מי שמחפש התאמה אישית של ההשקעות למטרותיו הספציפיות</li>
                  <li>משקיעים המעוניינים בגישה ישירה למנהל ההשקעות</li>
                  <li>אנשים עם צרכי מס מורכבים הדורשים תכנון מס פרטני בהשקעות</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">תהליך בניית תיק השקעות מנוהל</h2>
              
              <div className="space-y-4">
                <p>
                  תהליך בניית תיק השקעות מנוהל כולל בדרך כלל את השלבים הבאים:
                </p>
                
                <ol className="list-decimal list-inside space-y-2 mr-4">
                  <li>פגישת היכרות והבנת צרכים - בירור מטרות ההשקעה, טווח הזמן, צרכי נזילות ושיקולי מס</li>
                  <li>הגדרת פרופיל סיכון - באמצעות שאלון סיכון ושיחה מעמיקה</li>
                  <li>בניית אסטרטגיית השקעה - קביעת אופן פיזור הנכסים בין אפיקים שונים</li>
                  <li>יישום האסטרטגיה - בחירת ני"ע ספציפיים וביצוע ההשקעות</li>
                  <li>מעקב וניהול שוטף - התאמות, איזון מחדש והתאמת האסטרטגיה לשינויים בשוק ובמצבך האישי</li>
                </ol>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">כיצד בוחרים מנהל תיקים?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">ביצועים לאורך זמן</h3>
                  <p>
                    חשוב לבחון את ביצועי מנהל התיקים לאורך זמן, בדגש על התנהגות התיק בתקופות משבר ובהשוואה למדדי ייחוס רלוונטיים.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">פילוסופיית השקעה</h3>
                  <p>
                    חשוב להבין את גישת ההשקעה של מנהל התיקים ולוודא שהיא מתאימה לתפיסת העולם שלך בנוגע להשקעות.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">עלויות ניהול</h3>
                  <p>
                    דמי הניהול והעמלות משפיעים באופן משמעותי על התשואה נטו. חשוב להבין את המבנה המלא של העלויות ולהשוות בין אלטרנטיבות.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">איכות השירות והזמינות</h3>
                  <p>
                    בדקו את תדירות העדכונים, זמינות מנהל התיקים, איכות הדיווחים ויכולתכם לקבל מידע ברור כשאתם זקוקים לו.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מעוניינים לבחון אפשרות של תיק השקעות מנוהל?</h2>
              <p className="mb-8">אשמח לייעוץ ראשוני ללא התחייבות, לבחינת התאמה של תיק מנוהל לצרכים שלכם ולהכוונה בבחירת מנהל תיקים מתאים.</p>
              
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

export default ManagedPortfoliosPage; 