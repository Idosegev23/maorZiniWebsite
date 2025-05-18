import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'בעין משפטית: מארחים את מאור זיני | מאור זיני - ביטוח ופיננסים',
  description: 'ראיון עם מאור על ליווי אישי, תובנות מהשטח ודגשים חשובים.',
};

export default function MaorInterviewPage() {
  return (
    <main dir="rtl" lang="he" className="container px-4 md:px-8 lg:px-20 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <span className="text-sm text-brandGold font-medium mb-4 block">15 מאי 2023</span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brandBlue mb-6">
            בעין משפטית: מארחים את מאור זיני
          </h1>
          <p className="text-lg text-brandGray mb-8">
            ראיון עם מאור על ליווי אישי, תובנות מהשטח ודגשים חשובים.
          </p>
        </div>

        <div className="relative aspect-[16/9] w-full mb-10">
          <Image
            src="/images/magazine/maor-interview.jpg"
            alt="מאור זיני בראיון מקצועי"
            fill
            loading="eager"
            className="object-cover rounded-xl"
          />
        </div>

        <article className="prose prose-lg max-w-none prose-headings:text-brandBlue prose-headings:font-bold prose-p:text-brandGray">
  <h2 className="text-xl md:text-2xl font-bold text-brandBlue mb-6">צפו בראיון המלא</h2>

  <div className="relative w-full pb-[56.25%] mb-10 rounded-xl overflow-hidden">
    <iframe 
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/YlTAlyowW3w" 
      title="מאור זיני - ראיון מקצועי"
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen>
    </iframe>
  </div>

  <p>
    הראיון המיוחד עם מאור זיני חושף מבט כנה, מקצועי ונגיש לעולם הביטוח מזווית של ניסיון מהשטח.  
    הנושאים שעלו רלוונטיים לכל אדם שיש לו ביטוח – או שעדיין לא בטוח במה לבחור:  
    מה זה באמת ביטוח בריאות פרטי? האם קופת החולים מספיקה? מה ההבדל בין ביטוח חיים רגיל לביטוח שארים?  
    השיחה מלווה בדוגמאות מהחיים ובגישה בגובה העיניים – מבלי לוותר על הדיוק.
  </p>

  <h2>נקודות עיקריות מהראיון</h2>

  <p>
    בין הנושאים המרכזיים שנדונו: ביטוח בריאות פרטי מול שב"ן (קופת חולים), האפשרות לרכוש ביטוח לקטסטרופות בלבד (כמו השתלות ותרופות שאינן בסל),  
    הסוגיה של כפל ביטוחי, תקופות אכשרה, ואפילו הסבר פרקטי על ביטוח אובדן כושר עבודה.  
    הוצגו גם הבדלים בין ביטוח חיים בקרן הפנסיה לבין פוליסת חיים פרטית, כולל טיפים למשפחות צעירות ולאנשים עצמאים.
  </p>

  <p>
    מאור גם הסבירה מהו ערך סילוק בביטוח סיעודי פרטי, מה חשוב לבדוק כשמגישים תביעה –  
    ואיך לפעול נכון כדי לשמור על זכויות במקרה של מחלה, נכות או מצב סיעודי.  
    הראיון כולל שאלות אמיצות מהקהל ותשובות ישירות, כמו גם מקרים אמיתיים שהמחישו את החשיבות של ביטוח מותאם אישית.
  </p>

  <h2>על ליווי אישי מול משווקי ביטוח</h2>

  <p>
    מאור מדגישה שלכל אדם יש צרכים שונים – ואין פוליסת קסם שמתאימה לכולם.  
    ההמלצה שלה ברורה: לעצור רגע, לבדוק מה כבר קיים בתיק הביטוחי, מה כפול, מה חסר –  
    ולבנות חבילת הגנה אמיתית שמדברת לצרכים האישיים, הבריאותיים והמשפחתיים.
  </p>

  <p>
    במהלך הראיון מאור משתפת גם בטיפים לניהול שיחה עם סוכני ביטוח, מציינת את החשיבות של פגישות תקופתיות לבדיקת עדכונים,  
    ומציעה כלים לבדיקה עצמאית – או בליווי מקצועי.  
    עבור כל מי שלא מרגיש בטוח בקריאת פוליסות, מדובר במדריך מצולם בגובה העיניים.
  </p>
</article>


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