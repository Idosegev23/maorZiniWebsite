import Image from 'next/image';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import { generateMetadata } from '@/components/seo/Metadata';
import ClientSchemaOrg from '@/components/seo/ClientSchemaOrg';

export const metadata = generateMetadata({
  title: 'אודות | מאור זיני - ביטוח ופיננסים',
  description: 'הכירו את מאור זיני, סוכנת ביטוח מקצועית עם מעל 15 שנות ניסיון. מידע על הרקע המקצועי, הגישה והערכים שלי.',
  url: 'https://www.example.co.il/about',
  image: 'https://www.example.co.il/maorhead.png',
  type: 'profile',
});

export default function AboutPage() {
  return (
    <main dir="rtl" lang="he">
      <ClientSchemaOrg />
      
      <section className="relative bg-white pt-8 pb-12 md:pt-12 md:pb-16">
        {/* קו דקורטיבי עדין בחלק העליון */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      
        <div className="container">
          <SectionTitle
            title="אודות מאור זיני"
            subtitle="סוכנת ביטוח פנסיוני ופיננסי תוך ליווי אישי ומקצועי, שותפה לדרך."
            showUnderline
            rightAligned
            boldSubtitle
            className="text-right mb-6"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-6">
            <div className="relative">
              <Image
                src="/maorhead.png"
                alt="מאור זיני"
                width={450}
                height={450}
                className="rounded-2xl h-auto mx-auto"
                priority
              />
              {/* אלמנט דקורטיבי מאחורי התמונה */}
              <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-2xl bg-gradient-to-br from-brandGold/20 to-brandBlue/10"></div>
            </div>
            <div className="text-right space-y-4">
              <p className="text-lg text-brandGray border-r-2 border-brandGold/60 pr-4">
                שמי מאור זיני, ואני מלווה לקוחות במסע הכלכלי שלהם כבר יותר מ15 שנה.
                מאחורי המספרים, המונחים והטפסים – יש אנשים. משפחות. סיפורים.
                אני כאן בדיוק בשביל האנשים האלו.
              </p>
              
              <p className="text-lg text-brandGray border-r-2 border-brandGold/60 pr-4">
                מאז 2009 אני עוסקת בליווי וניהול תיקי ביטוח, פנסיה וחיסכון ללקוחות פרטיים, משפחות ועסקים.
                אבל האמת? אני לא "מוכרת ביטוחים".
                אני עוזרת לאנשים לקבל החלטות כלכליות שקטות, חכמות ובטוחות – שמתאימות בדיוק להם.
              </p>
            </div>
          </div>
        </div>

        {/* קו דקורטיבי עדין בחלק התחתון */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      </section>
      
      <section className="bg-brandBeige py-16">
        <div className="container">
          <SectionTitle
            title="הדרך שלי"
            subtitle="השירות שאני נותנת הוא לא רק כלכלי – הוא גם רגשי"
            showUnderline
            center
            boldSubtitle
          />
          
          <div className="max-w-4xl mx-auto mt-10">
            <p className="text-lg text-brandGray mb-6 text-right">
              כשהתחלתי את דרכי בעולם הביטוח והפיננסים, היה לי ברור:
              אני לא מתכוונת להיות עוד סוכנת.
              אני רוצה להיות מישהי שהלקוחות שלה מרימים אליה טלפון – גם כשטוב, לא רק כשיש בעיה.
            </p>
            
            <p className="text-lg text-brandGray mb-10 text-right">
              עם השנים, ליוויתי מאות משפחות ברגעים חשובים בחיים: חתונה, הולדת ילד, רכישת דירה, גירושין, פתיחת עסק, פרישה.
              הבנתי שהשירות שאני נותנת הוא לא רק כלכלי – הוא גם רגשי.
              הוא מבוסס על הקשבה, אמפתיה, מקצועיות חסרת פשרות וזמינות אמיתית.
            </p>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16 relative">
        {/* קו דקורטיבי עדין בחלק העליון */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      
        <div className="container">
          <SectionTitle
            title="השכלה ורקע מקצועי"
            showUnderline
            center
            boldSubtitle
          />
          
          <div className="max-w-4xl mx-auto mt-10">
            <p className="text-lg text-brandGray mb-6 text-right">
              אני בעלת תואר ראשון בהצטיינות בכלכלה וניהול מהמסלול האקדמי של המכללה למנהל.
              בעלת רישיון סוכנת ביטוח פנסיוני מטעם רשות שוק ההון.
              במהלך השנים עברתי הכשרות מקצועיות רבות בתחומי הפיננסים, הביטוח, תכנון פרישה וניהול חיסכון לטווח ארוך.
            </p>
            
            <p className="text-lg text-brandGray mb-10 text-right">
              כיום אני מלווה גם ארגונים, מוסדות ציבוריים ועסקים קטנים בתחומי זכויות עובדים, בניית מערך ביטוחים פנסיוניים והדרכות מקצועיות לעובדים.
            </p>
          </div>
        </div>

        {/* קו דקורטיבי עדין בחלק התחתון */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      </section>
      
      <section className="bg-brandBeige py-16">
        <div className="container">
          <SectionTitle
            title="למה לפנות דווקא אליי?"
            showUnderline
            center
            boldSubtitle
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-brandBlue border-r-2 border-brandGold pr-3 text-right">אין פתרונות מדף</h3>
              <p className="text-brandGray text-right">
                אני מתאימה לכל אדם את המעטפת שמתאימה לו – לפי הצרכים, החלומות והמציאות הכלכלית שלו.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-brandBlue border-r-2 border-brandGold pr-3 text-right">שקיפות מלאה</h3>
              <p className="text-brandGray text-right">
                אני פועלת בשקיפות מלאה, בלי אותיות קטנות ובלי הבטחות מוגזמות.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-brandBlue border-r-2 border-brandGold pr-3 text-right">זמינות תמיד</h3>
              <p className="text-brandGray text-right">
                אני זמינה תמיד – גם אחרי שסיימנו "לחתום".
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-brandBlue border-r-2 border-brandGold pr-3 text-right">בצד שלך</h3>
              <p className="text-brandGray text-right">
                אני תמיד בצד שלך – גם כשצריך להדריך, גם כשצריך להיאבק, ובעיקר – כשצריך מישהי שדואגת באמת.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16 relative">
        {/* קו דקורטיבי עדין בחלק העליון */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      
        <div className="container">
          <SectionTitle
            title="תחומי ליווי ושירות"
            showUnderline
            center
            boldSubtitle
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-lg font-bold mb-2 text-brandBlue border-r-2 border-brandGold pr-3 text-right">תכנון תיק ביטוח</h3>
              <p className="text-brandGray text-right">
                תכנון תיק ביטוח אישי, משפחתי או עסקי
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-lg font-bold mb-2 text-brandBlue border-r-2 border-brandGold pr-3 text-right">בדיקת כפל ביטוחים</h3>
              <p className="text-brandGray text-right">
                בדיקת כפל ביטוחים וחיסכון כספי משמעותי
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-lg font-bold mb-2 text-brandBlue border-r-2 border-brandGold pr-3 text-right">תכנון פנסיוני</h3>
              <p className="text-brandGray text-right">
                תכנון פנסיוני והכנה לפרישה
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-lg font-bold mb-2 text-brandBlue border-r-2 border-brandGold pr-3 text-right">בניית חיסכון</h3>
              <p className="text-brandGray text-right">
                בניית חיסכון לטווח קצר וארוך (גמל להשקעה, קופת גמל, קרן השתלמות)
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-lg font-bold mb-2 text-brandBlue border-r-2 border-brandGold pr-3 text-right">ליווי עסקים</h3>
              <p className="text-brandGray text-right">
                ליווי עצמאים ועסקים קטנים בתכנון ביטוחי וניהול סיכונים
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-lg font-bold mb-2 text-brandBlue border-r-2 border-brandGold pr-3 text-right">תביעות ביטוח</h3>
              <p className="text-brandGray text-right">
                תמיכה והכוונה בהגשת תביעות מול חברות הביטוח
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <h3 className="text-lg font-bold mb-2 text-brandBlue border-r-2 border-brandGold pr-3 text-right">הרצאות וסדנאות</h3>
              <p className="text-brandGray text-right">
                הרצאות וסדנאות בארגונים
              </p>
            </div>
          </div>
        </div>

        {/* קו דקורטיבי עדין בחלק התחתון */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      </section>
      
      <section className="bg-brandBeige py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brandBlue mb-8">בסוף כל מספר – יש בן אדם</h2>
            <p className="text-lg text-brandGray mb-6 text-right">
              אני מאמינה שכל אחד ואחת זכאים לשקט כלכלי, שמבוסס על ידע, הקשבה ותכנון נכון.
              התפקיד שלי הוא להסביר, לתרגם, ללוות – ולעזור לך להרגיש שיש מישהי בצד שלך, שמבינה עניין ולא מוותרת על מה שמגיע לך.
            </p>
            
            <p className="text-lg text-brandGray mb-10 text-right">
              נשמח להכיר.
              אפשר להתחיל בשיחת היכרות לא מחייבת, ולבדוק יחד מה נכון עבורך.
            </p>
            
            <Button 
              variant="primary" 
              href="/contact"
              ariaLabel="לתיאום שיחת היכרות"
              className="text-lg py-4 px-8 bg-brandBlue text-white hover:bg-transparent hover:text-brandBlue border border-brandBlue transition-all shadow-lg"
            >
              לתיאום שיחה
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
} 