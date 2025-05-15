import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { PiggyBank } from 'lucide-react';

export const metadata = {
  title: 'קרן השתלמות | מאור זיני - ביטוח ופיננסים',
  description: 'קרן השתלמות היא חיסכון לטווח בינוני עם יתרונות מס. אני מסייעת בבחירת הקרן המתאימה, תוך התחשבות בצרכים האישיים והמקצועיים שלך.',
};

const EducationFundPage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="קרן השתלמות"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/hishtalmut.jpg"
                    alt="קרן השתלמות"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <PiggyBank size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">קרן השתלמות</h2>
                  <p className="text-brandGray mb-6">
                    חיסכון לטווח בינוני עם יתרונות מס. אני מסייעת בבחירת הקרן המתאימה, תוך התחשבות בצרכים האישיים והמקצועיים שלך.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מהי קרן השתלמות?</h2>
              
              <div className="space-y-4">
                <p>
                  קרן השתלמות היא מכשיר חיסכון לטווח בינוני (6 שנים) המיועד במקור למימון השתלמויות מקצועיות. 
                  עם זאת, כיום היא משמשת בעיקר כאפיק חיסכון עם הטבות מס משמעותיות.
                </p>
                
                <p>
                  הייחודיות של קרן השתלמות היא בשילוב של נזילות יחסית (משיכה אפשרית לאחר 6 שנים) והטבות מס (פטור ממס רווחי הון), 
                  מה שהופך אותה לאחד ממכשירי החיסכון האטרקטיביים ביותר בישראל.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">יתרונות קרן השתלמות</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">פטור ממס רווחי הון</h3>
                  <p>
                    הטבת המס המשמעותית ביותר היא הפטור ממס רווחי הון על הרווחים שנצברו בקרן, כל עוד הכספים נמשכים כדין 
                    (לאחר 6 שנים או למטרת השתלמות לאחר 3 שנים).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">הפקדות מוכרות למס</h3>
                  <p>
                    עבור עצמאים, הפקדות לקרן השתלמות עד לתקרה מסוימת מוכרות כהוצאה לצורכי מס. עבור שכירים, הפקדות המעסיק 
                    אינן נחשבות כהכנסה חייבת במס עד לתקרה מסוימת.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">נזילות יחסית</h3>
                  <p>
                    בהשוואה לחסכונות פנסיוניים ארוכי טווח, קרן ההשתלמות נזילה יחסית ומאפשרת משיכה לאחר 6 שנים בלבד, מה שהופך 
                    אותה למתאימה לצרכים בטווח הבינוני.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">מגוון מסלולי השקעה</h3>
                  <p>
                    קרנות ההשתלמות מציעות מגוון רחב של מסלולי השקעה (מנייתי, אג"ח, שקלי, כללי ועוד), המאפשרים התאמה 
                    לרמת הסיכון המועדפת ולאופק ההשקעה.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למי מתאימה קרן השתלמות?</h2>
              
              <div className="space-y-4">
                <p>
                  קרן השתלמות רלוונטית למגוון רחב של אנשים:
                </p>
                
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>שכירים - כחלק מתנאי ההעסקה, עם הפקדות משותפות של העובד והמעסיק</li>
                  <li>עצמאים - כאמצעי חיסכון עם הטבות מס</li>
                  <li>אנשים המעוניינים בחיסכון לטווח בינוני (6 שנים)</li>
                  <li>משקיעים המחפשים אפיק השקעה עם פטור ממס רווחי הון</li>
                  <li>מי שמתכנן הוצאות משמעותיות בעתיד הבינוני (שיפוץ בית, רכישת רכב, מימון לימודים)</li>
                </ul>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">שיקולים בבחירת קרן השתלמות</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">דמי ניהול</h3>
                  <p>
                    בדומה למוצרים פיננסיים אחרים, חשוב להשוות את דמי הניהול בין הקרנות השונות, הן דמי הניהול מההפקדה והן דמי הניהול מהצבירה.
                    הבדלים קטנים בדמי הניהול עשויים להצטבר לסכומים משמעותיים לאורך זמן.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">מסלול השקעה</h3>
                  <p>
                    יש לבחור את מסלול ההשקעה בהתאם לאופק ההשקעה, לנטיית הסיכון ולמטרות החיסכון.
                    לקרן עם אופק של שנתיים-שלוש מומלץ לשקול מסלול סולידי יותר, בעוד שלחיסכון לטווח של 6 שנים ומעלה אפשר לשקול מסלול אגרסיבי יותר.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">ביצועי הקרן</h3>
                  <p>
                    אף שביצועי עבר אינם מבטיחים תשואות עתידיות, כדאי לבחון את ביצועי הקרן לאורך זמן, בדגש על יציבות התשואות והתנהגות הקרן בתקופות משבר.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">רוצים ליהנות מיתרונות קרן השתלמות?</h2>
              <p className="mb-8">אשמח לייעץ לכם ולהתאים את קרן ההשתלמות המיטבית עבורכם, תוך התחשבות בצרכים האישיים והמקצועיים שלכם.</p>
              
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

export default EducationFundPage; 