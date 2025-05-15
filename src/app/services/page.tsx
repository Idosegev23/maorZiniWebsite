import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '@/components/common/SectionTitle';
import Button from '@/components/common/Button';
import { Heart, Coins, Shield, LineChart, Briefcase, Home, Stethoscope, BriefcaseMedical, Plane, Calculator, PiggyBank, Save, BarChart4, Accessibility, Wallet } from 'lucide-react';

export const metadata = {
  title: 'השירותים שלנו | מאור זיני - ביטוח ופיננסים',
  description: 'כל השירותים שאני מציעה בתחום הביטוח והפיננסים: ביטוח חיים, ביטוח בריאות, תכנון פנסיוני, ביטוח משכנתא ועוד.',
};

const insuranceServices = [
  {
    title: 'ביטוח חיים',
    description: 'ביטוח חיים נועד להבטיח שהיקרים לך יוכלו להמשיך את חייהם ברווחה כלכלית גם במקרה של אובדן פתאומי. אני מתאימה את הפוליסה לצרכים האישיים שלך, תוך התחשבות במצב המשפחתי והכלכלי.',
    icon: <Heart size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/lifeins.jpg',
    slug: 'life-insurance',
  },
  {
    title: 'ביטוח בריאות',
    description: 'מערכת הבריאות הציבורית אינה תמיד מספקת את המענה המהיר והמקיף הנדרש. ביטוח בריאות פרטי מעניק לך גישה לרופאים מומחים, טיפולים מתקדמים ותרופות שאינן כלולות בסל הבריאות.',
    icon: <Stethoscope size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/healthins.jpg',
    slug: 'health-insurance',
  },
  {
    title: 'ביטוח משכנתא',
    description: 'רכישת דירה היא אחת ההשקעות הגדולות בחיים. ביטוח משכנתא מבטיח שהנכס שלך מוגן, ושבמקרה של אירוע בלתי צפוי, המשפחה שלך לא תישאר עם חוב.',
    icon: <Home size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/mortageins.jpg',
    slug: 'mortgage-insurance',
  },
  {
    title: 'ביטוח סיעודי',
    description: 'במצבים בהם נדרש סיוע יומיומי, ביטוח סיעודי מספק תמיכה כלכלית שמאפשרת קבלת טיפול איכותי ושמירה על כבוד האדם.',
    icon: <Accessibility size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/nursingins.jpg',
    slug: 'nursing-insurance',
  },
  {
    title: 'ביטוח אובדן כושר עבודה',
    description: 'במקרה של פגיעה ביכולת העבודה, ביטוח זה מבטיח הכנסה חודשית קבועה, המאפשרת לך ולמשפחתך להמשיך להתקיים בכבוד.',
    icon: <Briefcase size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/lostworkins.jpg',
    slug: 'work-disability-insurance',
  },
  {
    title: 'ביטוח תאונות אישיות',
    description: 'תאונות קורות ברגעים לא צפויים. ביטוח זה מעניק פיצוי כספי במקרה של פציעה, אשפוז או אובדן כושר עבודה זמני.',
    icon: <BriefcaseMedical size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/personalins.jpg',
    slug: 'personal-accidents',
  },
  {
    title: 'ביטוח נסיעות לחו"ל',
    description: 'בין אם מדובר בחופשה או בנסיעת עבודה, ביטוח נסיעות לחו"ל מבטיח כיסוי רפואי, ביטול טיסה, ואובדן מטען – כדי שתוכל לנסוע בראש שקט.',
    icon: <Plane size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/travelins.jpg',
    slug: 'travel-insurance',
  },
];

const financialServices = [
  {
    title: 'תכנון פנסיוני',
    description: 'תכנון נכון של הפנסיה מבטיח עתיד כלכלי בטוח. אני מסייעת בבחירת הקרן המתאימה, בדיקת דמי ניהול, והתאמת מסלול ההשקעה לצרכים האישיים שלך.',
    icon: <Calculator size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/pension.jpg',
    slug: 'pension-planning',
  },
  {
    title: 'קרן השתלמות',
    description: 'חיסכון לטווח בינוני עם יתרונות מס. אני מסייעת בבחירת הקרן המתאימה, תוך התחשבות בצרכים האישיים והמקצועיים שלך.',
    icon: <PiggyBank size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/hishtalmut.jpg',
    slug: 'education-fund',
  },
  {
    title: 'קופת גמל להשקעה',
    description: 'פתרון חיסכון גמיש המאפשר הפקדות שוטפות או חד-פעמיות, עם אפשרות למשיכה בכל עת. מתאים למי שמעוניין בחיסכון לטווח בינוני-ארוך.',
    icon: <Save size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/gemel.jpg',
    slug: 'investment-provident-fund',
  },
  {
    title: 'תיקון 190',
    description: 'פתרון השקעה המיועד לבני 60 ומעלה, המאפשר הפקדת כספים לקופת גמל עם יתרונות מס, כולל אפשרות למשיכת קצבה פטורה ממס.',
    icon: <Coins size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/190.jpg',
    slug: 'amendment-190',
  },
  {
    title: 'תיקים מנוהלים',
    description: 'ניהול השקעות מקצועי המותאם לפרופיל הסיכון שלך, עם פיזור רחב וניהול שוטף של התיק.',
    icon: <BarChart4 size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/investment.jpg',
    slug: 'managed-portfolios',
  },
  {
    title: 'חיסכון פיננסי מנוהל',
    description: 'תכנון וניהול של חסכונות פיננסיים באמצעות כלים שונים, המותאמים לטווח הזמן, רמת הסיכון והמטרות הפיננסיות האישיות שלך.',
    icon: <Wallet size={48} strokeWidth={1.5} className="text-brandGold" />,
    image: '/services/investment2.jpg',
    slug: 'managed-savings',
  },
];

const ServicesPage = () => {
  return (
    <main dir="rtl" lang="he">
      <section className="relative bg-white pt-10 pb-16 md:pt-16 md:pb-24">
        {/* קו דקורטיבי עדין בחלק העליון */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>

        <div className="container">
          <SectionTitle
            title="השירותים שלנו"
            subtitle="פתרונות מותאמים אישית בתחום הביטוח והפיננסים"
            center
            showUnderline
            boldSubtitle
          />
          
          <div className="max-w-4xl mx-auto mt-8 mb-16 text-center">
            <p className="text-lg text-brandGray">
              במהלך השנים, ליוויתי מאות לקוחות פרטיים ועסקיים בבניית תיק ביטוחי ופיננסי שמותאם בדיוק לצרכים שלהם. 
              הגישה שלי פשוטה: להבין אותך, להסביר בגובה העיניים, ולבנות עבורך פתרון שמעניק שקט נפשי וביטחון כלכלי.
            </p>
          </div>

          {/* שירותי ביטוח */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-brandBlue mb-10 text-center border-b border-brandGold/30 pb-2 inline-block mx-auto">שירותי ביטוח</h2>
            <div className="mt-12 grid grid-cols-1 gap-12">
              {insuranceServices.map((service, index) => (
                <Link key={index} href={`/services/${service.slug}`} className="block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                      <div className={`relative h-64 md:h-auto ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index < 2}
                          className="object-cover object-center"
                          quality={80}
                        />
                      </div>
                      <div className={`p-8 text-right ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                        <div className="mb-4">{service.icon}</div>
                        <h2 className="text-2xl font-bold text-brandBlue mb-4 border-r-2 border-brandGold/60 pr-4">{service.title}</h2>
                        <p className="text-brandGray mb-6">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* קו דקורטיבי עדין בחלק התחתון */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      </section>
      
      {/* שירותים פיננסיים */}
      <section className="relative bg-brandBeige py-16 md:py-24">
        {/* קו דקורטיבי עדין בחלק העליון */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>

        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-brandBlue mb-10 text-center border-b border-brandGold/30 pb-2 inline-block mx-auto">שירותים פיננסיים</h2>
          <div className="mt-12 grid grid-cols-1 gap-12">
            {financialServices.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className={`relative h-64 md:h-auto ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index < 2}
                        className="object-cover object-center"
                        quality={80}
                      />
                    </div>
                    <div className={`p-8 text-right ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="mb-4">{service.icon}</div>
                      <h2 className="text-2xl font-bold text-brandBlue mb-4 border-r-2 border-brandGold/60 pr-4">{service.title}</h2>
                      <p className="text-brandGray mb-6">{service.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* קו דקורטיבי עדין בחלק התחתון */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      </section>
      
      <section className="bg-white py-16 relative">
        {/* קו דקורטיבי עדין בחלק העליון */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brandBlue mb-8">בכל אחד מהשירותים הללו</h2>
            <p className="text-lg text-brandGray mb-6 text-right">
              אני מתחייבת לליווי אישי, שקיפות מלאה והתאמה מדויקת לצרכים שלך. 
              המטרה שלי היא להעניק לך שקט נפשי וביטחון כלכלי, בכל שלב בחיים.
            </p>
            
            <div className="mt-10">
              <Button 
                variant="primary" 
                href="/contact"
                ariaLabel="לתיאום שיחת ייעוץ"
                className="text-lg py-4 px-8 bg-brandBlue text-white hover:bg-transparent hover:text-brandBlue border border-brandBlue transition-all shadow-lg"
              >
                לתיאום שיחת ייעוץ
              </Button>
            </div>
          </div>
        </div>

        {/* קו דקורטיבי עדין בחלק התחתון */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      </section>
    </main>
  );
};

export default ServicesPage; 