import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const AboutSection = () => {
  return (
    <section className="bg-brandBeige py-8 md:py-16 relative">
      
      <div className="container">
        <div className="max-w-3xl mx-auto animate-fadeIn">
          <SectionTitle
            title="מי אני?"
            subtitle="סוכנת ביטוח, מנהלת תכנון פנסיוני ופיננסי מנוסה לשירותך"
            showUnderline
            rightAligned
            boldSubtitle
            className="text-right mb-5 md:mb-6"
          />
        
          <div className="space-y-4 md:space-y-6 text-right">
            <p className="text-base md:text-lg text-brandGray">
              שלום, אני מאור. כבר יותר מ-15 שנה אני מלווה אנשים וחברות בעולם הפיננסי והביטוחי. מניסיוני, הבנתי שלכל אחד מאיתנו צרכים ייחודיים ותנאי חיים שונים, ולכן אני מאמינה בהתאמה אישית של הפתרונות הפיננסיים.
            </p>
            
            <p className="text-base md:text-lg text-brandGray">
              העבודה שלי מתחילה בפגישת היכרות בה אני לומדת להכיר אותך, את החלומות שלך, את החששות שלך, ואת המצב הכלכלי הנוכחי. אני מנתחת את כל תיק הביטוח והפנסיה הקיים שלך ובונה עבורך תכנית מותאמת אישית.
            </p>
            
            <p className="text-base md:text-lg text-brandGray">
              אני מתחייבת לשקיפות מלאה, זמינות גבוהה, ויחס אישי לכל אורך הדרך. המטרה שלי היא לתת לך שקט נפשי בידיעה שהעתיד הפיננסי שלך מטופל בידיים טובות.
            </p>
          </div>
          
          <div className="text-right mt-6 md:mt-8">
            <Button 
              variant="primary" 
              href="/about"
              ariaLabel="עוד על מאור"
              className="text-base md:text-lg py-2.5 md:py-3 px-5 md:px-6 bg-brandBlue text-white hover:bg-transparent hover:text-brandBlue border border-brandBlue transition-all shadow-md"
            >
              למידע נוסף עליי
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
    </section>
  );
};

export default AboutSection; 