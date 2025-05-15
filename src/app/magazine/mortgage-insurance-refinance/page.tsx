import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'האם כדאי למחזר את ביטוח המשכנתא שלך? | מאור זיני - ביטוח ופיננסים',
  description: 'מתי כדאי לבדוק מחדש את הכיסוי? יתרונות, חסרונות וטיפים.',
};

export default function MortgageInsurancePage() {
  return (
    <main dir="rtl" lang="he" className="container px-4 md:px-8 lg:px-20 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="text-sm text-brandGold font-medium mb-4">18 אפריל 2023</div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-brandBlue mb-6">
            האם כדאי למחזר את ביטוח המשכנתא שלך?
          </h1>
          
          <div className="flex items-center mb-8 text-sm text-gray-600">
            <span className="font-medium ml-1">מאת</span>
            <span className="font-bold ml-2">מאור זיני</span>
            <span className="mx-2">|</span>
            <span>ביטוח ופיננסים</span>
          </div>
          
          <p className="text-lg text-brandGray mb-10 border-r-4 border-brandGold pr-4">
            מתי כדאי לבדוק מחדש את הכיסוי? יתרונות, חסרונות וטיפים.
          </p>
        </header>

        <div className="relative aspect-[16/9] w-full mb-14 rounded-lg overflow-hidden">
          <Image
            src="/images/magazine/mortgage-keys.jpg"
            alt="מפתח בית על רקע כחול כהה"
            fill
            priority
            className="object-cover"
          />
        </div>

        <article className="prose prose-lg max-w-none prose-headings:text-brandBlue prose-headings:font-bold prose-p:text-brandGray prose-p:mb-6 prose-headings:mt-10 prose-headings:mb-6">
          <p className="font-medium text-xl text-brandBlue bg-gray-50 p-4 rounded-md">ביטוח משכנתא זה לא לנצח. לפעמים שווה לבדוק מחדש.</p>
          
          <p>רוב האנשים חותמים על ביטוח משכנתא ביום שבו הם מקבלים את המפתח – ולא נוגעים בו שוב. אבל מה שרלוונטי ביום החתימה, לא תמיד מתאים שלוש או חמש שנים קדימה. המצב האישי משתנה, הסכום שנותר להחזר פוחת, והפרמיות? הן ממשיכות לרדת רק אם עוצרים לרגע ובודקים.</p>
          
          <p>מחזור ביטוח משכנתא הוא פעולה פשוטה שיכולה לחסוך כסף – ולשפר את הכיסוי בצורה משמעותית.</p>
          
          <h2 className="border-b-2 border-brandGold pb-2 inline-block">מה זה אומר "למחזר ביטוח משכנתא"?</h2>
          
          <p>מחזור הביטוח לא אומר למחזר את ההלוואה – אלא את הפוליסה עצמה. מדובר בבדיקה מחודשת של ביטוח החיים והמבנה שצמודים למשכנתא, והשוואה להצעות חדשות מחברות ביטוח אחרות. במקרים רבים ניתן לקבל תנאים טובים יותר, פרמיה נמוכה יותר או התאמה מחודשת של הכיסוי.</p>
          
          <h2 className="border-b-2 border-brandGold pb-2 inline-block">מתי כדאי לבדוק את זה?</h2>
          
          <ul className="list-disc pr-6 space-y-4 my-6 bg-gray-50 p-5 rounded-md">
            <li><span className="font-semibold text-brandBlue">כשמצב הבריאות השתנה:</span> לדוגמה – אם הפסיקו לעשן, ירדו במשקל, או עברו ניתוח ששיפר את המצב.</li>
            <li><span className="font-semibold text-brandBlue">אם עברו כמה שנים:</span> סכום ההלוואה שנותר לתשלום נמוך משמעותית מהמקור. ייתכן שהכיסוי כבר לא תואם את הצורך.</li>
            <li><span className="font-semibold text-brandBlue">אם מרגישים שמשלמים יותר מדי:</span> במיוחד אם לא השוו מחירים מאז קבלת המשכנתא.</li>
            <li><span className="font-semibold text-brandBlue">כשמחליפים דירה או בונים בית מחדש:</span> זו נקודת זמן מעולה לבדוק הכול מהתחלה.</li>
            <li><span className="font-semibold text-brandBlue">כשרוצים לבדוק ולסדר את כל התיק הפיננסי:</span> רענון כולל גם בתיק הביטוחי.</li>
          </ul>
          
          <h2 className="border-b-2 border-brandGold pb-2 inline-block">יתרונות של מחזור הביטוח</h2>
          
          <ul className="list-disc pr-6 space-y-4 my-6">
            <li><strong className="text-brandBlue">חיסכון כספי</strong> – לא מעט. הפחתה של עשרות שקלים בחודש מצטברת לאלפי שקלים לאורך חיי ההלוואה.</li>
            <li><strong className="text-brandBlue">התאמת הכיסוי</strong> – אם סכום המשכנתא ירד, אין צורך לשלם על כיסוי מיותר.</li>
            <li><strong className="text-brandBlue">אפשרות לשפר תנאים</strong> – למשל: להוסיף שותף לפוליסה, לשנות נוסח של מוטבים, או לקצר תקופות המתנה.</li>
            <li><strong className="text-brandBlue">ביטוח מותאם</strong> – לגיל, מצב רפואי, שינויים משפחתיים ועוד.</li>
          </ul>
          
          <h2 className="border-b-2 border-brandGold pb-2 inline-block">ומה הסיכונים?</h2>
          
          <ul className="list-disc pr-6 space-y-4 my-6 bg-gray-50 p-5 rounded-md">
            <li><strong className="text-brandBlue">מצב רפואי פחות טוב מבעבר</strong> – אם מבצעים את המחזור לאחר התפתחות רפואית משמעותית, ייתכן שהכיסוי יעלה או שלא יאושר.</li>
            <li><strong className="text-brandBlue">תקופת אכשרה חדשה</strong> – כשעוברים לחברת ביטוח חדשה, מתחילה תקופת המתנה מחודשת בחלק מהמקרים.</li>
            <li><strong className="text-brandBlue">דרישה להצהרת בריאות מחדש</strong> – מה שעלול להקשות במקרים של עבר רפואי מסוים.</li>
            <li><strong className="text-brandBlue">חשש מביטול פוליסה קיימת</strong> – לפני שיש אישור לחדשה – וזה חשוב: לא מבטלים כלום לפני שיש כיסוי חדש חתום.</li>
          </ul>
          
          <h2 className="border-b-2 border-brandGold pb-2 inline-block">טיפים למחזור חכם</h2>
          
          <ol className="list-decimal pr-6 space-y-4 my-6">
            <li><strong className="text-brandBlue">לא לבדוק לבד</strong> – שווה להיעזר בסוכן או ביועץ ביטוח שמבין את השוק ויודע להשוות בין החברות.</li>
            <li><strong className="text-brandBlue">להשוות את הכול</strong> – לא רק את המחיר – חשוב לבדוק גם כיסויים, תנאים, תקופות אכשרה, הגדרה של מקרה ביטוח.</li>
            <li><strong className="text-brandBlue">לשמור על רצף ביטוחי</strong> – רק לאחר אישור סופי על פוליסה חדשה – מבטלים את הישנה.</li>
            <li><strong className="text-brandBlue">לעדכן את הבנק</strong> – כל שינוי בביטוח המשכנתא צריך לקבל אישור מהבנק, והוא חייב להיות תואם לדרישות ההלוואה.</li>
            <li><strong className="text-brandBlue">להיזהר מהבטחות לא מבוססות</strong> – במיוחד בפרסומות. ביטוח משכנתא הוא חוזה לכל דבר, וצריך להבין כל סעיף.</li>
          </ol>
          
          <div className="my-12 py-6 px-5 border-t border-b border-gray-200 bg-gray-50 rounded-md">
            <h2 className="text-2xl text-brandBlue font-bold mb-6 border-r-4 border-brandGold pr-4">לסיכום</h2>
            <p>מחזור ביטוח משכנתא לא נשמע מרגש – אבל הוא כן יכול לחסוך לא מעט, ולתת כיסוי מדויק יותר. בעולם שבו כל שקל נחשב, אין סיבה להמשיך לשלם על פוליסה ישנה – כשאפשר לבדוק, לעדכן ולהתאים אותה לצרכים של היום.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 my-12">
            <Link 
              href="/contact" 
              className="bg-brandGold text-brandBlue font-medium py-4 px-6 rounded-md text-center hover:bg-opacity-90 transition-colors"
            >
              בדיקת ביטוח המשכנתא שלי
            </Link>
            <a 
              href="https://wa.me/972123456789" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-gray-300 text-brandBlue py-4 px-6 rounded-md text-center hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              שליחת הודעה מהירה
            </a>
          </div>
        </article>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <Link 
            href="/magazine" 
            className="text-brandGold hover:text-brandBlue font-medium transition-colors inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            חזרה לכל המאמרים
          </Link>
        </div>
      </div>
    </main>
  );
}