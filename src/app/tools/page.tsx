import MonthlySavingsCalculator from '@/components/tools/MonthlySavingsCalculator';
import PensionEstimator from '@/components/tools/PensionEstimator';
import Tikun190Checker from '@/components/tools/Tikun190Checker';

export const metadata = {
  title: 'כלים פיננסיים | מאור זיני - ביטוח ופיננסים',
  description: 'כלים דיגיטליים שיעזרו לך לתכנן את העתיד הפיננסי שלך - מחשבוני חיסכון, פנסיה ועזרי החלטה נוספים',
};

export default function FinancialToolsPage() {
  return (
    <div className="pb-16">
      <div className="bg-gradient-to-b from-brandBlue to-brandBlue/90 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 80 80" fill="none">
            <path d="M20 20L60 60M60 20L20 60" stroke="white" strokeWidth="2"/>
            <circle cx="20" cy="20" r="5" fill="white"/>
            <circle cx="60" cy="20" r="5" fill="white"/>
            <circle cx="20" cy="60" r="5" fill="white"/>
            <circle cx="60" cy="60" r="5" fill="white"/>
          </svg>
        </div>
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1240px] relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-6 text-center">
            כלים שיעשו לך סדר בעולם הביטוח והחיסכון
          </h1>
          <p className="text-base md:text-xl text-center max-w-3xl mx-auto text-white opacity-90 leading-relaxed mb-4">
            כאן ניתן לבדוק, לחשב ולהבין – בלי ידע מוקדם ובלי מילים מסובכות.
          </p>
        </div>
      </div>
      
      <main className="container mx-auto mt-10 px-6 md:px-10 lg:px-20 max-w-[1240px] relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="transform hover:-translate-y-2 transition-all duration-300">
            <MonthlySavingsCalculator />
          </div>
          <div className="transform hover:-translate-y-2 transition-all duration-300">
            <PensionEstimator />
          </div>
          <div className="transform hover:-translate-y-2 transition-all duration-300">
            <Tikun190Checker />
          </div>
        </div>
        
        <div className="mt-24 bg-gradient-to-r from-brandBeige to-brandBeige/80 p-10 rounded-2xl border border-brandGold/20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90C28 90 10 72 10 50S28 10 50 10s40 18 40 40-18 40-40 40z"/>
              <path d="M70 30H30v40h40V30zm-10 30H40V40h20v20z"/>
            </svg>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-brandBlue mb-4">רוצה ייעוץ אישי מקצועי?</h2>
              <p className="text-brandGray text-lg mb-6 leading-relaxed">
                הכלים הדיגיטליים מספקים הערכה כללית בלבד. לתכנון מותאם אישית לצרכים הייחודיים שלך, אשמח להעניק לך ייעוץ מקצועי ואישי.
              </p>
            </div>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-brandGold to-brandGold/90 hover:from-brandBlue hover:to-brandBlue/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center whitespace-nowrap text-lg"
            >
              לקביעת פגישת ייעוץ
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 