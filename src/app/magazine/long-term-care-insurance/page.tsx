import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'למה ביטוח סיעודי הוא לא מותרות? | מאור זיני - ביטוח ופיננסים',
  description: 'מה באמת מכסה ביטוח סיעודי, ולמה חשוב לבדוק אם יש לך אחד.',
};

export default function LongTermCarePage() {
  return (
    <main dir="rtl" lang="he" className="container px-4 md:px-8 lg:px-20 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center text-sm text-brandGold font-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>20 מרץ 2023</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brandBlue mb-6 leading-tight">
            למה ביטוח סיעודי הוא לא מותרות?
          </h1>
          
          <div className="mb-6">
            <p className="font-medium">מאת מאור זיני</p>
            <p className="text-sm text-gray-600">ביטוח ופיננסים</p>
          </div>
          
          <p className="text-xl text-brandGray border-r-4 border-brandGold pr-4 italic">
            מה באמת מכסה ביטוח סיעודי, ולמה חשוב לבדוק אם יש לך אחד.
          </p>
        </header>

        <div className="relative aspect-[16/9] w-full mb-10 rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/images/magazine/elder-care.jpg"
            alt="ידיים של אדם צעיר ומבוגר אוחזות זו בזו ברכות"
            fill
            priority
            className="object-cover transition-transform hover:scale-105 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlue/30 to-transparent"></div>
        </div>

        <article className="prose prose-lg max-w-none prose-headings:text-brandBlue prose-headings:font-bold prose-p:text-brandGray prose-li:text-brandGray">
          
          <div className="bg-gray-50 p-6 rounded-xl mb-10 border-r-4 border-brandGold">
            <h2 className="text-2xl !text-brandBlue !font-semibold !mb-3 !mt-0">שקט נפשי הוא לא מותרות – גם לא בגיל השלישי</h2>
            <p>החיים מביאים איתם שינויים. לפעמים צפויים, לפעמים פחות.<br />מצב סיעודי הוא אחד מאותם תרחישים שאף אחד לא רוצה לחשוב עליהם – אבל גם לא כדאי להתעלם מהם.<br />דווקא בגלל שזה לא נושא "נעים", חשוב להבין מה באמת מכסה ביטוח סיעודי, ולמה הוא אחד הביטוחים הקריטיים ביותר שיש.</p>
          </div>
          
          <section className="my-12">
            <h2 className="text-2xl !text-brandBlue !font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brandGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10m0-2s.657-1.343 2.343-3.657m0 0A8.001 8.001 0 0120 12H4" />
              </svg>
              מהו מצב סיעודי – ומתי הביטוח מופעל?
            </h2>
            <p>אדם נחשב סיעודי כאשר הוא מתקשה לבצע שלוש מתוך שש פעולות יומיומיות בסיסיות:</p>
            <ul className="list-disc list-inside space-y-2 my-4 bg-blue-50 p-4 rounded-lg border-r-4 border-blue-400">
              <li>קימה מהמיטה או מהכיסא</li>
              <li>לבוש והתפשטות</li>
              <li>רחצה</li>
              <li>אכילה ושתייה</li>
              <li>שליטה על הסוגרים</li>
              <li>ניידות</li>
            </ul>
            <p className="bg-gray-100 p-4 rounded-lg">בנוסף, מי שמאובחן עם ירידה קוגניטיבית (כמו דמנציה או אלצהיימר), גם אם עדיין מתפקד פיזית – נחשב סיעודי לפי רוב הפוליסות.</p>
          </section>

          <section className="my-12 p-6 bg-green-50 rounded-xl border-l-4 border-green-400">
            <h2 className="text-2xl !text-brandBlue !font-semibold !mt-0 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m0 6H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              מה כולל הביטוח הסיעודי?
            </h2>
            <p>ביטוח סיעודי מספק פיצוי חודשי קבוע (ולא החזר הוצאות), שמיועד למימון מטפל צמוד, מוסד סיעודי, ציוד רפואי או עזרה שוטפת.<br />הכיסוי נמשך כל עוד האדם עומד בהגדרה הסיעודית, בהתאם למה שנקבע בפוליסה.</p>
            <p className="mb-0 italic">יש ביטוחים עם תקופת המתנה קצרה (למשל: 60 יום), ויש כאלו שמחייבים השתתפות עצמית או מסמכים רפואיים מורכבים. לכן חשוב לקרוא את התנאים היטב – או להתייעץ.</p>
          </section>
          
          <section className="my-12">
            <h2 className="text-2xl !text-brandBlue !font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brandGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              ביטוח פרטי או קופת חולים?
            </h2>
            <p>בישראל קיימות שלוש שכבות הגנה סיעודית:</p>
            <div className="space-y-6 mt-6">
              <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-lg text-brandBlue mb-2">1. ביטוח סיעודי של קופת החולים</h3>
                <p className="text-sm">פוליסה אחידה, שנרכשת דרך הקופה. היא זולה יחסית, אך מוגבלת ל-5 שנות פיצוי בלבד.<br />במקרים רבים היא לא מספיקה לכיסוי מלא – במיוחד כשמדובר בטיפול ביתי לאורך זמן.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-lg text-brandBlue mb-2">2. ביטוח סיעודי פרטי</h3>
                <p className="text-sm">נרכש מחברת ביטוח באופן עצמאי, דרך סוכן או ישירות. מאפשר לבחור את גובה הפיצוי, תקופת הכיסוי ופרמיה קבועה.<br />מאז 2019 רוב החברות הפסיקו לשווק פוליסות חדשות – אבל מי שיש לו ביטוח כזה, שווה לשמור עליו.</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
                <h3 className="font-semibold text-lg text-brandBlue mb-2">3. גמלת סיעוד מהמדינה (ביטוח לאומי)</h3>
                <p className="text-sm mb-0">ניתנת לפי מבחני הכנסה ותפקוד. לא כספית – אלא בצורת שעות טיפול.<br />ברוב המקרים לא מספיקה למימון מלא של טיפול סיעודי צמוד.</p>
              </div>
            </div>
          </section>

          <section className="my-12 p-6 bg-red-50 rounded-xl border-r-4 border-red-500">
            <h2 className="text-2xl !text-red-700 !font-semibold !mt-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              אז למה זה לא מותרות?
            </h2>
            <ul className="list-disc list-inside space-y-2 mt-4 !text-red-700">
              <li>כי טיפול סיעודי פרטי עולה בין 5,000 ל-15,000 ש״ח בחודש</li>
              <li>כי בני משפחה לא תמיד יכולים או יודעים לטפל – גם אם מאוד רוצים</li>
              <li>כי אף אחד לא רוצה להיות תלוי בחסדי מערכת או לשחוק חסכונות שנועדו לפנסיה</li>
            </ul>
          </section>
          
          <section className="my-12">
            <h2 className="text-2xl !text-brandBlue !font-semibold flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brandGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              איך בודקים אם יש כיסוי סיעודי?
            </h2>
            <p>אפשר להתחיל כך:</p>
            <ul className="list-decimal list-inside space-y-2 my-4 bg-gray-100 p-4 rounded-lg">
              <li>לבדוק אם יש כיסוי דרך קופת החולים (מופיע באיזור האישי)</li>
              <li>לבדוק אם קיים ביטוח פרטי ישן דרך סוכן או מכתב שנשלח בעבר</li>
              <li>לשים לב אם קיים כיסוי בתוך קרן פנסיה – לפעמים יש רכיב סיעודי בסיסי</li>
            </ul>
          </section>
          
          <div className="bg-brandBlue text-white p-8 rounded-xl my-12 text-center">
            <h2 className="text-3xl font-bold mb-4 !text-white">לסיכום</h2>
            <p className="text-lg leading-relaxed">ביטוח סיעודי הוא לא מותרות – אלא אחריות. לעצמך, למשפחה, ולעתיד.<br />דווקא עכשיו, כשהכול רגוע – זה הזמן לבדוק מה יש, מה אין, ומה אפשר לשפר.<br />לא כדי לחשוב על התרחיש הכי גרוע – אלא כדי להיות מוכנים, ולהישאר בשליטה גם כשדברים משתנים.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 my-12">
            <Link 
              href="/contact" 
              className="bg-brandGold hover:bg-yellow-500 text-brandBlue font-semibold py-3 px-6 rounded-lg text-center transition-colors flex-1 flex items-center justify-center group shadow-md hover:shadow-lg"
            >
              <span>בדיקת כיסוי סיעודי אישי</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a 
              href="https://wa.me/+972534842700" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center justify-center gap-2 transition-colors flex-1 shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>שיחה קצרה – ללא התחייבות</span>
            </a>
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