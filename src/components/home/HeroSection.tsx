import Image from 'next/image';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-8 pb-0 md:pt-16 md:pb-0">
      {/* קו דקורטיבי עדין בחלק העליון */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* תמונה */}
          <div className="md:order-1 order-2 relative overflow-hidden">
            <div className="relative flex justify-center items-center">
              <Image
                src="/maorfull.png"
                alt="מאור זיני"
                width={300}
                height={250}
                className="rounded-2xl h-auto mx-auto object-contain animate-scaleIn"
                style={{ height: 'auto', width: 'auto' }}
                priority
              />
            </div>
          </div>
          
          {/* תוכן טקסט */}
          <div className="md:order-2 order-1 text-right space-y-5 md:space-y-6 animate-slideUp">
            <div>
              <span className="inline-block text-brandGold border-b border-brandGold/30 pb-1 mb-1">סוכנת ביטוח, מנהלת תכנון פנסיוני ופיננסי</span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold leading-tight">
                <span className="text-brandBlue block">הביטחון שלך</span>
                <span className="text-brandGold block">בידיים טובות</span>
              </h1>
              
              <p className="text-lg md:text-xl text-brandGray mt-3 md:mt-4">
                <span className="inline-block border-r-2 border-brandGold/60 pr-3">
                  ליווי אישי וניהול מקצועי מאת מאור זיני
                  <br />
                  <span className="text-brandGold/90">יותר מ־15 שנות ניסיון בתחום</span>
                </span>
              </p>
            </div>
            
            <div className="pt-3 md:pt-4">
              <Button 
                variant="primary" 
                href="/contact"
                ariaLabel="לתיאום שיחת היכרות"
                className="text-base md:text-lg py-3 px-5 md:px-6 bg-brandBlue text-white hover:bg-transparent hover:text-brandBlue border border-brandBlue transition-all shadow-md"
              >
                לתיאום שיחת היכרות
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 