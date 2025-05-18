import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/common/SectionTitle';
import { ArrowRight } from 'lucide-react';

// Mock data for services - in a real application, this would come from a CMS or API
const services = {
  'health-insurance': {
    title: 'ביטוח חיים ובריאות',
    description: 'הגנה מקיפה לך ולמשפחתך מפני מצבים רפואיים בלתי צפויים',
    fullDescription: `
      <p>ביטוח בריאות הוא אחד הביטוחים החשובים ביותר לך ולמשפחתך. במקרה של מחלה או תאונה, ביטוח בריאות מקיף יכול לספק לך את הטיפול הרפואי הטוב ביותר בזמן הקצר ביותר, ללא תלות במערכת הבריאות הציבורית.</p>
      <p>השירות שלי בתחום ביטוח הבריאות כולל:</p>
      <ul>
        <li>ניתוח צרכים אישי והתאמת כיסויים מדויקת</li>
        <li>השוואת תוכניות מחברות ביטוח שונות</li>
        <li>חיסכון בעלויות תוך שמירה על כיסוי מקיף</li>
        <li>בדיקת כפילויות עם ביטוחים קיימים</li>
        <li>ליווי בתהליך התביעה במקרה הצורך</li>
      </ul>
      <p>הפתרונות שאני מציעה בתחום הבריאות:</p>
      <ul>
        <li>ביטוח בריאות פרטי: ניתוחים, השתלות, תרופות שאינן בסל</li>
        <li>ביטוח סיעודי: הבטחת טיפול איכותי במקרה של אובדן עצמאות</li>
        <li>ביטוח תאונות אישיות: פיצוי במקרה של פציעה או נכות</li>
        <li>ביטוח אובדן כושר עבודה: הבטחת הכנסה במקרה של אובדן יכולת לעבוד</li>
        <li>ביטוח מחלות קשות: פיצוי כספי במקרה של מחלה קשה</li>
      </ul>
    `,
    image: 'https://placehold.co/1200x800/1B2A4E/FFFFFF/png?text=ביטוח+בריאות',
    features: [
      'כיסוי לניתוחים פרטיים',
      'תרופות שאינן בסל הבריאות',
      'ליווי רפואי מומחים',
      'רפואה משלימה',
      'טיפולים מיוחדים בחו"ל',
    ],
  },
  'pension-planning': {
    title: 'תכנון פנסיוני',
    description: 'בניית תיק פנסיוני חכם שיבטיח לך חיים נוחים לאחר הפרישה',
    fullDescription: `
      <p>תכנון פנסיוני נכון הוא המפתח להבטחת איכות חיים טובה לאחר הפרישה. אני מלווה אותך בתהליך ניתוח המצב הקיים, איחוד קופות וחסכונות, ובניית תיק פנסיוני מאוזן שיתאים בדיוק לצרכים ולמטרות שלך.</p>
      <p>השירות שלי בתחום התכנון הפנסיוני כולל:</p>
      <ul>
        <li>מיפוי כל החסכונות הפנסיוניים הקיימים</li>
        <li>ניתוח דמי ניהול והוצאות נוספות</li>
        <li>התאמת מסלולי השקעה לגיל ולפרופיל הסיכון</li>
        <li>טיפול בקופות "רדומות" ואיחוד חסכונות</li>
        <li>תכנון מסלול פרישה מדורג</li>
      </ul>
      <p>הפתרונות שאני מציעה בתחום הפנסיה:</p>
      <ul>
        <li>קרנות פנסיה: ניהול והתאמת הקרן הטובה ביותר עבורך</li>
        <li>ביטוחי מנהלים: אלטרנטיבה גמישה יותר לקרן פנסיה</li>
        <li>קופות גמל להשקעה: מסלול חיסכון גמיש לטווח הארוך</li>
        <li>קרנות השתלמות: ניצול יתרונות המס וההטבות</li>
        <li>תכנון פרישה: הכנה לקראת הפרישה ומיצוי הזכויות שלך</li>
      </ul>
    `,
    image: 'https://placehold.co/1200x800/1B2A4E/FFFFFF/png?text=תכנון+פנסיוני',
    features: [
      'ניתוח תיק פנסיוני קיים',
      'חיסכון בדמי ניהול',
      'התאמת מסלולי השקעה לגיל',
      'איחוד קופות פנסיה',
      'תכנון מסלול פרישה',
    ],
  },
  'property-insurance': {
    title: 'ביטוחי רכוש',
    description: 'הגנה על הנכסים היקרים לך ביותר: דירה, רכב, תכולה וחפצי ערך',
    fullDescription: `
      <p>ביטוח רכוש נותן לך שקט נפשי ביחס לנכסים החשובים לך. מדובר בהגנה פיננסית במקרה של נזק, גניבה או אובדן של הרכוש שלך, כולל הדירה, הרכב, והחפצים בעלי הערך.</p>
      <p>השירות שלי בתחום ביטוחי הרכוש כולל:</p>
      <ul>
        <li>התאמת כיסוי ביטוחי לשווי האמיתי של הרכוש</li>
        <li>השוואה בין חברות ביטוח והצעות מחיר</li>
        <li>בחינת תנאי הפוליסה וההחרגות</li>
        <li>מציאת איזון בין כיסוי מקיף למחיר הוגן</li>
        <li>ליווי בתהליך התביעה במקרה הצורך</li>
      </ul>
      <p>הפתרונות שאני מציעה בתחום ביטוחי הרכוש:</p>
      <ul>
        <li>ביטוח דירה: מבנה, תכולה, צד ג', ונזקי מים</li>
        <li>ביטוח רכב: חובה, מקיף, וצד ג'</li>
        <li>ביטוח תכשיטים וחפצי ערך: כיסוי מיוחד לפריטים יקרי ערך</li>
        <li>ביטוח עסק: הגנה על העסק, המלאי והציוד</li>
        <li>ביטוח אחריות מקצועית: הגנה מפני תביעות</li>
      </ul>
    `,
    image: 'https://placehold.co/1200x800/1B2A4E/FFFFFF/png?text=ביטוחי+רכוש',
    features: [
      'ביטוח מבנה ותכולת דירה',
      'ביטוח רכב חובה ומקיף',
      'ביטוח צד ג\'',
      'כיסוי לנזקי מים',
      'ביטוח לתכשיטים וחפצי ערך',
    ],
  },
  'investments': {
    title: 'השקעות וחיסכון',
    description: 'תכנון וניהול השקעות חכמות לטווח הקצר והארוך',
    fullDescription: `
      <p>תכנון השקעות נכון יכול לסייע לך להשיג את המטרות הפיננסיות שלך - בין אם מדובר בחיסכון לטווח קצר, חיסכון לילדים, או בניית עושר לטווח ארוך. אני מסייעת בבניית תיק השקעות מאוזן המותאם לרמת הסיכון, לאופק ההשקעה ולמטרות הכספיות שלך.</p>
      <p>השירות שלי בתחום ההשקעות והחיסכון כולל:</p>
      <ul>
        <li>הגדרת מטרות פיננסיות ברורות</li>
        <li>בניית תיק השקעות מאוזן</li>
        <li>התאמת אפיקי השקעה לרמת הסיכון המתאימה לך</li>
        <li>השוואת מסלולי חיסכון שונים</li>
        <li>מעקב תקופתי ועדכונים לפי שינויים בשוק</li>
      </ul>
      <p>הפתרונות שאני מציעה בתחום ההשקעות:</p>
      <ul>
        <li>קופות גמל להשקעה: מסלול חיסכון גמיש עם הטבות מס</li>
        <li>תוכניות חיסכון: השקעה בטוחה יחסית לטווח הקצר והבינוני</li>
        <li>פוליסות חיסכון: מסלולי השקעה במעטפת ביטוחית</li>
        <li>חיסכון לכל ילד: ניצול מקסימלי של ההטבות הממשלתיות</li>
        <li>השקעות אלטרנטיביות: אפשרויות השקעה מחוץ לאפיקים המסורתיים</li>
      </ul>
    `,
    image: 'https://placehold.co/1200x800/1B2A4E/FFFFFF/png?text=השקעות+וחיסכון',
    features: [
      'תכנון השקעות לפי מטרות',
      'חיסכון לטווח קצר ובינוני',
      'השקעות ארוכות טווח',
      'חיסכון לפרישה',
      'חיסכון לילדים ולהשכלה גבוהה',
    ],
  },
  'business-insurance': {
    title: 'ביטוח עסקי',
    description: 'פתרונות ביטוח מקיפים לעסקים קטנים ובינוניים',
    fullDescription: `
      <p>ביטוח עסקי הוא קריטי להגנה על העסק שלך מפני סיכונים שונים שעלולים לפגוע בפעילות השוטפת ובהכנסות. אני מסייעת בבניית חבילת ביטוח מקיפה שתתאים בדיוק לצרכים של העסק שלך, בין אם מדובר בעסק קטן, בינוני או בעצמאי.</p>
      <p>השירות שלי בתחום הביטוח העסקי כולל:</p>
      <ul>
        <li>ניתוח הסיכונים הספציפיים של העסק שלך</li>
        <li>בניית חבילת ביטוח מותאמת לענף בו אתה פועל</li>
        <li>השוואת הצעות מחיר מחברות ביטוח שונות</li>
        <li>ליווי בהיבטי ביטוח בהתקשרויות עסקיות</li>
        <li>ליווי בתהליך תביעות ביטוח</li>
      </ul>
      <p>הפתרונות שאני מציעה בתחום הביטוח העסקי:</p>
      <ul>
        <li>ביטוח עסק: מבנה, תכולה, מלאי וציוד</li>
        <li>ביטוח אחריות מקצועית: הגנה מפני תביעות לקוחות</li>
        <li>ביטוח אחריות מעבידים: הגנה מפני תביעות עובדים</li>
        <li>ביטוח אובדן כושר עבודה לעצמאיים: הבטחת הכנסה במקרה של מחלה או פציעה</li>
        <li>ביטוח הכנסה: פיצוי במקרה של אובדן הכנסות</li>
      </ul>
    `,
    image: 'https://placehold.co/1200x800/1B2A4E/FFFFFF/png?text=ביטוח+עסקי',
    features: [
      'ביטוח רכוש עסקי',
      'ביטוח אחריות מקצועית',
      'ביטוח אחריות מעבידים',
      'אובדן רווחים',
      'ביטוח סייבר',
    ],
  },
  'mortgage-insurance': {
    title: 'ביטוח משכנתא',
    description: 'ליווי בבחירת ביטוח משכנתא אופטימלי',
    fullDescription: `
      <p>ביטוח משכנתא הוא חלק בלתי נפרד מתהליך לקיחת משכנתא, אך הוא גם מהווה הזדמנות לחיסכון משמעותי לאורך חיי ההלוואה. אני מסייעת בהתאמת ביטוח משכנתא אופטימלי שיענה על דרישות הבנק, אך גם יהיה כדאי כלכלית עבורך.</p>
      <p>השירות שלי בתחום ביטוח המשכנתא כולל:</p>
      <ul>
        <li>ניתוח דרישות הבנק למשכנתאות</li>
        <li>השוואה בין הצעות שונות של חברות ביטוח</li>
        <li>בדיקת תיק ביטוח קיים ואפשרויות ניוד</li>
        <li>חיסכון בעלויות תוך שמירה על הכיסוי הנדרש</li>
        <li>התאמת הביטוח לשינויים במהלך חיי המשכנתא</li>
      </ul>
      <p>הפתרונות שאני מציעה בתחום ביטוח המשכנתא:</p>
      <ul>
        <li>ביטוח חיים למשכנתא: הבטחת כיסוי ההלוואה במקרה של מוות</li>
        <li>ביטוח אובדן כושר עבודה: המשך תשלום המשכנתא במקרה של אובדן יכולת לעבוד</li>
        <li>ביטוח מבנה: ביטוח הנכס המשועבד לבנק</li>
        <li>ביטוח משכנתא משולב: חבילה מותאמת אישית לצרכים שלך</li>
        <li>ניוד ביטוח משכנתא: העברה מהבנק לחברת ביטוח בתנאים משופרים</li>
      </ul>
    `,
    image: 'https://placehold.co/1200x800/1B2A4E/FFFFFF/png?text=ביטוח+משכנתא',
    features: [
      'ביטוח חיים למשכנתא',
      'ביטוח מבנה',
      'ביטוח אובדן כושר עבודה',
      'חיסכון בעלויות',
      'ליווי בתהליך מול הבנק',
    ],
  },
  'managed-savings': {
    title: 'חיסכון פיננסי מנוהל',
    description: 'תכנון וניהול חיסכון פיננסי אישי לטווח קצר, בינוני וארוך',
    fullDescription: `
      <p>חיסכון פיננסי מנוהל הוא השקעה חכמה בעתיד שלך ובעתיד משפחתך. מדובר בתהליך מתמשך של תכנון וניהול חסכונות כספיים באפיקים שונים, בהתאם למטרות הפיננסיות האישיות שלך, טווח הזמן המתוכנן ורמת הסיכון המתאימה לך.</p>
      <p>השירות שלי בתחום החיסכון הפיננסי המנוהל כולל:</p>
      <ul>
        <li>אפיון מדויק של המטרות הפיננסיות שלך</li>
        <li>התאמת אפיקי חיסכון לפי טווח זמן ורמת סיכון</li>
        <li>ניתוח דמי ניהול וחיסכון בעלויות</li>
        <li>בניית תיק חסכונות מאוזן ומגוון</li>
        <li>מעקב תקופתי והתאמות בהתאם לשינויים בשוק ובצרכים שלך</li>
      </ul>
      <p>הפתרונות שאני מציעה בתחום החיסכון הפיננסי:</p>
      <ul>
        <li>חיסכון לטווח קצר: תוכניות חיסכון ופיקדונות גמישים</li>
        <li>חיסכון לטווח בינוני: קרנות השתלמות ותוכניות חיסכון מובנות</li>
        <li>חיסכון לטווח ארוך: קופות גמל להשקעה ותוכניות פנסיוניות</li>
        <li>חיסכון ייעודי: תכנון חיסכון לחופשות, רכב, דירה או לימודים</li>
        <li>חיסכון משפחתי: תוכניות חיסכון לילדים ולדור העתיד</li>
      </ul>
    `,
    image: 'https://placehold.co/1200x800/1B2A4E/FFFFFF/png?text=חיסכון+פיננסי+מנוהל',
    features: [
      'תוכניות חיסכון מותאמות אישית',
      'מגוון אפיקי חיסכון בסיכון נמוך-בינוני',
      'ניהול מקצועי של כספי החיסכון',
      'התאמה לטווחי זמן שונים',
      'שקיפות מלאה בתהליך הניהול וההשקעה',
    ],
  },
};

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  
  if (!service) {
    return {
      title: 'שירות לא נמצא | מאור זיני - ביטוח ופיננסים',
    };
  }
  
  return {
    title: `${service.title} | מאור זיני - ביטוח ופיננסים`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  
  // If service doesn't exist, show 404 page
  if (!service) {
    notFound();
  }

  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title={service.title}
            subtitle={service.description}
            center
          />
          
          <div className="mt-12">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl mb-12">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: service.fullDescription }}  
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brandBlue mb-8 text-center">היתרונות העיקריים</h2>
            
            <div className="bg-brandBeige p-8 rounded-2xl">
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="text-brandGold mt-1">✓</div>
                    <p className="text-lg text-brandGray">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-brandBlue mb-6">רוצים לדעת עוד?</h3>
              <p className="text-lg text-brandGray mb-8">
                אשמח לענות על כל שאלה ולהתאים לך בדיוק את הפתרון המתאים לצרכים שלך.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brandGold text-white px-8 py-4 rounded-xl font-medium hover:bg-opacity-90 transition-all"
              >
                <span>לתיאום פגישה אישית</span>
                <ArrowRight size={18} className="transform rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-brandBeige py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-brandBlue mb-12 text-center">שירותים נוספים שיכולים לעניין אותך</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(services)
              .filter(([key]) => key !== params.slug)
              .slice(0, 3)
              .map(([key, relatedService]) => (
                <Link key={key} href={`/services/${key}`} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-3 text-brandBlue">{relatedService.title}</h3>
                  <p className="text-brandGray mb-4">{relatedService.description}</p>
                  <p className="text-brandGold font-medium">קרא עוד »</p>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </main>
  );
} 