import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'איך לבחור ביטוח בריאות שמתאים באמת? | מאור זיני - ביטוח ופיננסים',
  description: 'הסבר פשוט על סוגי ביטוחים, מה לבדוק ואיך להתאים לצרכים שלך.',
};

export default function HealthInsurancePage() {
  return (
    <main dir="rtl" lang="he" className="container px-4 md:px-8 lg:px-20 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center text-sm text-brandGold font-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>3 מאי 2023</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brandBlue mb-6 leading-tight">
            איך לבחור ביטוח בריאות שמתאים באמת?
          </h1>
          
          <div className="flex items-center mb-6">
            <div>
              <p className="font-medium">מאת מאור זיני</p>
              <p className="text-sm text-gray-600">ביטוח ופיננסים</p>
            </div>
          </div>
          
          <p className="text-xl text-brandGray border-r-4 border-brandGold pr-4 italic">
            הסבר פשוט על סוגי ביטוחים, מה לבדוק ואיך להתאים לצרכים שלך.
          </p>
        </header>

        <div className="relative aspect-[16/9] w-full mb-10 rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/images/magazine/health-insurance.jpg"
            alt="סטטוסקופ על רקע בהיר עם אלמנטים בצבע זהב"
            fill
            priority
            className="object-cover transition-transform hover:scale-105 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlue/50 to-transparent"></div>
        </div>

        <article className="prose prose-lg max-w-none prose-headings:text-brandBlue prose-headings:font-bold prose-p:text-brandGray prose-li:text-brandGray">
          <div className="bg-gray-50 p-6 rounded-xl mb-10 border-r-4 border-brandGold">
            <p className="font-medium text-xl mb-3">בריאות זה לא מותרות – זה הבסיס.</p>
            <p>ביטוח בריאות הוא הרבה מעבר לניירת או שורת הוצאה חודשית.</p>
            <p>זה הביטחון לדעת שיש מענה מהיר, איכותי ונגיש – ברגע האמת.</p>
            <p className="mb-0">אבל עם שלל האפשרויות הקיימות בשוק, קשה לדעת מה באמת צריך, ואיך בוחרים נכון.</p>
          </div>
          
          <p className="lead">במאמר הזה נפרט על סוגי הביטוחים הקיימים, נסביר מה חשוב לבדוק לפני שחותמים – ונעזור לקבל החלטה מושכלת, בלי להסתבך בז'רגון רפואי או ביטוחי.</p>
          
          <h2 className="text-2xl md:text-3xl flex items-center mt-12 after:content-[''] after:h-[1px] after:flex-grow after:bg-brandGold/30 after:mr-4">
            <span className="bg-brandBlue text-white w-10 h-10 flex items-center justify-center rounded-full mr-3 text-xl">1</span>
            שלושת הרבדים של ביטוח בריאות בישראל
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-brandBlue border-b border-gray-200 pb-3 mb-4">ביטוח בריאות ממלכתי</h3>
              <p>כל תושב בישראל זכאי לביטוח בריאות ממלכתי שמספק שירותים רפואיים בסיסיים דרך קופות החולים.</p>
              <div className="mt-4 bg-gray-50 p-3 rounded">
                <p className="mb-1 font-medium">כולל:</p>
                <p className="text-sm mb-0">רופאים, בדיקות, תרופות בסל הבריאות ואשפוזים.</p>
              </div>
              <div className="mt-4 bg-red-50 p-3 rounded">
                <p className="mb-1 font-medium text-red-700">מגבלות:</p>
                <p className="text-sm mb-0">זמני המתנה, היעדר כיסויים מתקדמים או שירותים פרטיים.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-brandBlue border-b border-gray-200 pb-3 mb-4">שב״ן – שירותי בריאות נוספים</h3>
              <p>שכבות ההרחבה של קופות החולים – כמו "כללית מושלם", "מכבי זהב" וכדומה.</p>
              <div className="mt-4">
                <p className="mb-2 font-medium">שב"ן כולל, בין היתר:</p>
                <ul className="list-disc list-inside text-sm space-y-1.5">
                  <li>טיפולים משלימים (פיזיותרפיה, רפואה אלטרנטיבית)</li>
                  <li>ייעוץ עם רופאים מומחים</li>
                  <li>השתתפות בתרופות שאינן בסל</li>
                  <li>בדיקות פרטיות מסוימות</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-brandBlue border-b border-gray-200 pb-3 mb-4">ביטוח בריאות פרטי</h3>
              <p>נרכש מחברות ביטוח – ומיועד להשלים את הפערים שלא מכוסים בביטוח הממלכתי או בשב"ן.</p>
              <div className="mt-4">
                <p className="mb-2 font-medium">הכיסויים יכולים לכלול:</p>
                <ul className="list-disc list-inside text-sm space-y-1.5">
                  <li>ניתוחים בארץ ובחו"ל</li>
                  <li>השתלות</li>
                  <li>תרופות מצילות חיים שאינן כלולות בסל</li>
                  <li>מחלות קשות</li>
                  <li>התייעצות עם רופאים בכירים</li>
                  <li>כיסוי לניתוחים פרטיים ובית חולים לבחירה</li>
                </ul>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl flex items-center mt-12 after:content-[''] after:h-[1px] after:flex-grow after:bg-brandGold/30 after:mr-4">
            <span className="bg-brandBlue text-white w-10 h-10 flex items-center justify-center rounded-full mr-3 text-xl">2</span>
            איך יודעים מה צריך?
          </h2>
          
          <p className="lead">כדי לבחור נכון, חשוב להבין קודם כל את הצרכים הבריאותיים האישיים – ולא לקנות פוליסה רק "כי כולם עושים".</p>
          
          <div className="bg-blue-50 p-6 rounded-lg my-8">
            <h3 className="text-lg font-bold text-brandBlue mb-4">שאלות שכדאי לשאול לפני בחירת ביטוח:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brandGold mt-0.5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>האם יש צורך בגישה מהירה לרופאים פרטיים?</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brandGold mt-0.5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>האם יש היסטוריה משפחתית של מחלות קשות?</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brandGold mt-0.5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>מה התקציב החודשי שאפשר להקצות?</span>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brandGold mt-0.5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <span>האם יש ילדים קטנים שזקוקים למענה מהיר יותר?</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl flex items-center mt-16 after:content-[''] after:h-[1px] after:flex-grow after:bg-brandGold/30 after:mr-4">
            <span className="bg-brandBlue text-white w-10 h-10 flex items-center justify-center rounded-full mr-3 text-xl">3</span>
            5 דברים שחייבים לבדוק לפני רכישת ביטוח פרטי
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-brandGold">
              <div className="flex items-center mb-4">
                <span className="bg-brandGold text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <h3 className="text-xl font-bold text-brandBlue mb-0">מה הפוליסה כוללת?</h3>
              </div>
              <p className="mb-2">אילו טיפולים, שירותים, תרופות וניתוחים כלולים?</p>
              <p className="mb-0 text-sm font-medium italic">יש לוודא שהפוליסה מספקת כיסוי אמיתי ולא רק הבטחות שיווקיות.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-brandGold">
              <div className="flex items-center mb-4">
                <span className="bg-brandGold text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <h3 className="text-xl font-bold text-brandBlue mb-0">מה לא כלול?</h3>
              </div>
              <p className="mb-0">חשוב לקרוא את האותיות הקטנות: החרגות רפואיות, תקופות אכשרה (המתנה), הגבלות גיל או מצב בריאותי קודם.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-brandGold">
              <div className="flex items-center mb-4">
                <span className="bg-brandGold text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <h3 className="text-xl font-bold text-brandBlue mb-0">כמה זה עולה – וכמה זה שווה?</h3>
              </div>
              <p className="mb-2">יש הבדל בין פוליסה זולה לבין פוליסה משתלמת.</p>
              <p className="mb-0 text-sm font-medium italic">לעיתים תוספת קטנה תספק כיסוי מהותי שיכול להציל חיים.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-brandGold">
              <div className="flex items-center mb-4">
                <span className="bg-brandGold text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <h3 className="text-xl font-bold text-brandBlue mb-0">מה רמת השירות?</h3>
              </div>
              <p className="mb-2">האם יש מענה אנושי? מה זמני התגובה? מה אומרים מבוטחים אחרים?</p>
              <p className="mb-0 text-sm font-medium italic">לא פחות חשוב ממה שיש בפוליסה – זה איך מקבלים אותו.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-r-4 border-brandGold md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="bg-brandGold text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</span>
                <h3 className="text-xl font-bold text-brandBlue mb-0">האם יש כפל ביטוחים?</h3>
              </div>
              <p className="mb-2">לא פעם משלמים על כיסויים שכבר קיימים דרך שב"ן או ביטוח קבוצתי.</p>
              <p className="mb-0 text-sm font-medium italic">יש לבדוק היטב לפני שמצטרפים.</p>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl flex items-center mt-16 mb-6 after:content-[''] after:h-[1px] after:flex-grow after:bg-brandGold/30 after:mr-4">
            כלים שיכולים לעזור בהחלטה:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <span className="text-2xl ml-3">🔍</span>
                <div>
                  <p className="font-medium mb-1">מחשבון השוואת ביטוח בריאות</p>
                  <p className="text-sm mb-0">באתר רשות שוק ההון</p>
                </div>
              </div>
              <a 
                href="https://briut.cma.gov.il" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brandBlue hover:text-brandGold underline text-sm transition-colors"
              >
                briut.cma.gov.il
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <span className="text-2xl ml-3">👥</span>
                <div>
                  <p className="font-medium mb-1">פגישה עם סוכן ביטוח מקצועי</p>
                  <p className="text-sm mb-0">יכולה לחסוך כסף וטעויות</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-brandBlue text-white p-6 rounded-xl my-12">
            <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-3">לסיכום:</h2>
            <p>בחירה בביטוח בריאות פרטי היא לא עניין טכני – אלא מהותי.</p>
            <p>היא זו שמבדילה בין טיפול מהיר לאכזבה, בין תחושת שליטה לחוסר אונים.</p>
            <p>וכמו בכל החלטה פיננסית משמעותית – לא חייבים להבין הכל, אבל כדאי מאוד לבחור נכון.</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 my-12">
            <h3 className="text-xl font-bold text-brandBlue mb-4">מתלבטים? אפשר להתייעץ.</h3>
            <p className="mb-6">בכמה שאלות פשוטות – אפשר להבין מה מתאים, מה מיותר ומה כדאי לבחון מחדש.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-brandBlue hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors flex-1 flex items-center justify-center group"
              >
                <span>בדיקת התאמה לביטוח בריאות</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <a 
                href="https://wa.me/+972534842700" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center gap-2 transition-colors flex-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>שיחה קצרה – בלי התחייבות</span>
              </a>
            </div>
          </div>
        </article>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <Link 
            href="/magazine" 
            className="inline-flex items-center text-brandGold hover:text-brandBlue font-medium transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            חזרה לכל המאמרים
          </Link>
        </div>
      </div>
    </main>
  );
} 