import { Metadata } from 'next';
import MagazineCard from '@/components/magazine/MagazineCard';

export const metadata: Metadata = {
  title: 'המגזין של מאור – תוכן בגובה העיניים | מאור זיני - ביטוח ופיננסים',
  description: 'מאמרים, טיפים וסיפורים שיעזרו לך להבין, לבחור ולהרגיש בטוח/ה. תוכן מקצועי בנושאי ביטוח, פנסיה וניהול כלכלי.',
};

export default function MagazinePage() {
  const articles = [
    {
      title: 'הטיפ החודשי: איך לחסוך נכון – והרבה',
      summary: 'מדריך מעשי לניהול תקציב משפחתי, בחירת ביטוחים וחיסכון חכם.',
      image: '/images/magazine/saving-family.jpg',
      slug: 'how-to-save-right',
      date: '21 ביוני 2023'
    },
    {
      title: 'בעין משפטית: מארחים את מאור זיני',
      summary: 'ראיון עם מאור על ייעוץ אישי, תובנות מהשטח ודגשים חשובים.',
      image: '/images/magazine/maor-interview.jpg',
      slug: 'maor-interview',
      date: '15 מאי 2023'
    },
    {
      title: 'איך לבחור ביטוח בריאות שמתאים באמת?',
      summary: 'הסבר פשוט על סוגי ביטוחים, מה לבדוק ואיך להתאים לצרכים שלך.',
      image: '/images/magazine/health-insurance.jpg',
      slug: 'choosing-health-insurance',
      date: '3 מאי 2023'
    },
    {
      title: 'האם כדאי למחזר את ביטוח המשכנתא שלך?',
      summary: 'מתי כדאי לבדוק מחדש את הכיסוי? יתרונות, חסרונות וטיפים.',
      image: '/images/magazine/mortgage-keys.jpg',
      slug: 'mortgage-insurance-refinance',
      date: '18 אפריל 2023'
    },
    {
      title: 'תיקון 190: האם זה רלוונטי עבורך?',
      summary: 'למי זה מתאים, איך זה עובד ואיך תוכל/י לחסוך מס כחוק.',
      image: '/images/magazine/tax-saving.jpg',
      slug: 'amendment-190',
      date: '1 אפריל 2023'
    },
    {
      title: 'למה ביטוח סיעודי הוא לא מותרות?',
      summary: 'מה באמת מכסה ביטוח סיעודי, ולמה חשוב לבדוק אם יש לך אחד.',
      image: '/images/magazine/elder-care.jpg',
      slug: 'long-term-care-insurance',
      date: '20 מרץ 2023'
    }
  ];

  return (
    <main dir="rtl" lang="he" className="container px-4 md:px-8 lg:px-20 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brandBlue mb-4">
          המגזין של מאור – תוכן בגובה העיניים
        </h1>
        <p className="text-lg md:text-xl text-brandGray max-w-3xl mx-auto mb-6">
          מאמרים, טיפים וסיפורים שיעזרו לך להבין, לבחור ולהרגיש בטוח/ה.
        </p>
        <div className="w-16 h-1 bg-brandGold mx-auto"></div>
      </section>

      {/* Articles Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <MagazineCard
              key={article.slug}
              title={article.title}
              summary={article.summary}
              image={article.image}
              slug={article.slug}
              date={article.date}
            />
          ))}
        </div>
      </section>
    </main>
  );
} 