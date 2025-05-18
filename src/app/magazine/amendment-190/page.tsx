import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Tikun190CheckerWrapper from '@/components/wrappers/Tikun190CheckerWrapper';

export const metadata: Metadata = {
  title: 'תיקון 190: האם זה רלוונטי עבורך? | מאור זיני - ביטוח ופיננסים',
  description: 'למי זה מתאים, איך זה עובד ואיך תוכל/י לחסוך מס כחוק.',
};

export default function Amendment190Page() {
  return (
    <main dir="rtl" lang="he" className="container px-4 md:px-8 lg:px-20 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-sm text-brandGold font-medium mb-4 block">1 אפריל 2023</span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brandBlue mb-6">
            תיקון 190: האם זה רלוונטי עבורך?
          </h1>
          <p className="text-lg text-brandGray mb-8">
            מאת מאור זיני – ביטוח ופיננסים
          </p>
        </div>

        <div className="relative aspect-[16/9] w-full mb-10">
          <Image
            src="/services/190.jpg"
            alt="גרף קו בצבעי כחול וזהב עם הספרה 190 בפינה"
            fill
            loading="eager"
            className="object-cover rounded-xl"
          />
        </div>

        <article className="prose prose-lg max-w-none prose-headings:text-brandBlue prose-headings:font-bold prose-p:text-brandGray">
          <h2>מהו תיקון 190, ולמה כל כך הרבה מדברים עליו?</h2>
          <p>תיקון 190 לפקודת מס הכנסה הפך בשנים האחרונות לאחד הכלים הפיננסיים המדוברים ביותר – ובצדק. מדובר בפתרון פשוט, חוקי, ומניב, שיכול לחסוך סכומים משמעותיים במס, במיוחד לאחר גיל פרישה.</p>
          
          <p>כדי להבין האם תיקון 190 אכן רלוונטי, חשוב להכיר את התנאים, היתרונות והאפשרויות שהוא מציע.</p>
          
          <hr className="my-6 border-gray-200" />
          
          <h2>מה זה בעצם תיקון 190?</h2>
          <p>זהו עדכון לחוק מס ההכנסה שנכנס לתוקף בשנת 2012, ומאפשר הפקדת כספים לקופת גמל – גם אחרי גיל פרישה – תוך קבלת הטבות מס, פטורים ומסלולי משיכה גמישים.</p>
          
          <p>בעוד השקעות אחרות מחויבות במס רווח הון של 25%, תיקון 190 מאפשר ליהנות ממס מופחת ואף מפטור, בהתאם למאפייני ההפקדה.</p>
          
          <hr className="my-6 border-gray-200" />
          
          <h2>למי תיקון 190 מתאים?</h2>
          <p>שלושה תנאי סף מרכזיים:</p>
          
          <ol>
            <li>גיל 60 ומעלה</li>
            <li>קבלת קצבת פנסיה חודשית מזכה</li>
            <li>הפקדה לקופת גמל מתוך מטרה למשיכה כקצבה או כסכום חד פעמי בהתאם לחוק</li>
          </ol>
          
          <p>כאשר התנאים מתקיימים, נפתחת אפשרות ליהנות מהטבות מס ייחודיות ופתרונות השקעה יצירתיים.</p>
          
          <hr className="my-6 border-gray-200" />
          
          <h2>מהם היתרונות המרכזיים?</h2>
          <ul>
            <li><strong>הטבת מס משמעותית</strong> – לעיתים פטור מלא ממס רווח הון, ולעיתים מס מופחת של 15% נומינלי בלבד</li>
            <li><strong>נזילות גבוהה</strong> – ניתן למשוך את הכסף כקצבה או בסכום חד פעמי</li>
            <li><strong>העברה בין-דורית נוחה</strong> – הכספים עוברים לשאירים ללא צורך בצו ירושה</li>
            <li><strong>שליטה במסלול ההשקעה</strong> – אפשר לבחור את רמת הסיכון, הגוף המנהל ודמי הניהול</li>
          </ul>
          
          <hr className="my-6 border-gray-200" />
          
          <h2>דוגמה פשוטה:</h2>
          <p>אדם בגיל פרישה שיש ברשותו 400,000 ₪, יכול לבחור להשקיע את הסכום בקופת גמל תחת תיקון 190.<br />
          אם נעשה שימוש נכון, ניתן להמיר את ההפקדה לקצבה פטורה ממס, או למשוך אותה כסכום חד פעמי תוך תשלום מס מופחת.<br />
          בהשוואה לאפיקים אחרים – מדובר בחיסכון של עשרות אלפי שקלים לאורך זמן.</p>
          
          <hr className="my-6 border-gray-200" />
          
          <h2>נקודות חשובות לבדיקה:</h2>
          <ul>
            <li>האם יש קצבה חודשית מוכרת</li>
            <li>האם מדובר בסכום לטווח ארוך או לטווח קצר</li>
            <li>מהם הצרכים המשפחתיים מבחינת ירושה או הגנה על הכסף</li>
            <li>מהן אפשרויות ההשקעה ודמי הניהול המוצעים כיום</li>
          </ul>
          
          <hr className="my-6 border-gray-200" />
          
          <h2>לסיכום:</h2>
          <p>תיקון 190 הוא כלי חשוב בארגז הכלים הפיננסי, ובמקרים מסוימים – גם הזדמנות.<br />
          יחד עם זאת, חשוב לבדוק התאמה אישית, לבצע תכנון מס מקצועי, ולהבין את כל המשמעויות לפני שמבצעים את ההפקדה.</p>
          
          <hr className="my-6 border-gray-200" />
        </article>

        <div className="my-10">
          <h2 className="text-2xl font-bold text-brandBlue mb-6 text-center">
            בדקו את זכאותכם להטבות מס לפי תיקון 190
          </h2>
          <Tikun190CheckerWrapper />
        </div>
          
        <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-xl font-bold text-brandBlue mb-4">מוזמנים לפנות לשיחה מותאמת אישית, ללא התחייבות.</h3>
          <p className="mb-6">אפשר לבדוק ביחד – בשיחה קצרה – האם תיקון 190 יכול לשרת גם אתכם.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-6 py-3 bg-brandBlue text-white font-medium rounded-md hover:bg-blue-700 transition-colors text-center">
              רוצה לדעת עוד?
            </Link>
            <Link href="https://wa.me/972534842700" className="px-6 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors text-center flex items-center justify-center">
              <span className="mr-2">שיחה אישית</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <Link 
            href="/magazine" 
            className="inline-flex items-center text-brandGold hover:text-brandBlue font-medium transition-colors"
          >
            &larr; חזרה לכל המאמרים
          </Link>
        </div>
      </div>
    </main>
  );
} 