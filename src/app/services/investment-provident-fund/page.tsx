import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { Save } from 'lucide-react';

export const metadata = {
  title: 'קופת גמל להשקעה | מאור זיני - ביטוח ופיננסים',
  description: 'קופת גמל להשקעה היא מוצר חיסכון גמיש עם נזילות מלאה, הפקדות עד 81,000₪ בשנה, והטבות מס משמעותיות למושכים כקצבה.',
};

const InvestmentProvidentFundPage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="קופת גמל להשקעה"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/gemel.jpg"
                    alt="קופת גמל להשקעה"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Save size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">השקעה גמישה עם יתרון מיסוי חכם</h2>
                  <p className="text-brandGray mb-6">
                    כשרוצים לחסוך בצורה חכמה, עם נזילות מלאה ועם תקרת הפקדה גבוהה – קופת גמל להשקעה מציעה מסלול משתלם שמחבר בין גמישות, ניהול מקצועי ואפשרות לחיסכון פנסיוני או לכל מטרה אחרת.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מה זה בדיוק?</h2>
              
              <div className="space-y-4">
                <p>
                  קופת גמל להשקעה היא מוצר חיסכון שמאפשר להפקיד כספים באופן שוטף או חד-פעמי, ליהנות מהשקעות מנוהלות ברמות סיכון שונות, ולמשוך את הכסף בכל שלב – או להפוך אותו לקצבה פטורה ממס בפרישה.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">יתרונות מרכזיים</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4 mb-8">
                <li>הפקדה של עד 81,000 ₪ בשנה (לכל אזרח מגיל 0)</li>
                <li>נזילות מלאה – ניתן למשוך את הכסף בכל זמן</li>
                <li>אפשרות להמרת החיסכון לקצבה פנסיונית ללא תשלום מס</li>
                <li>ניהול השקעות מקצועי במגוון מסלולים – לבחירה חופשית</li>
                <li>תחליף חכם לפקדונות בנקאיים</li>
                <li>שילוב בין חיסכון אישי לטווח קצר, בינוני וארוך</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למי זה מתאים?</h2>
              
              <div className="space-y-4">
                <p>
                  לכל מי שמחפש דרך פשוטה ויעילה לחסוך – בלי לוותר על נגישות לכסף. מתאים להורים שחוסכים לילדים, לעצמאיים שמחפשים חיסכון פנסיוני נוסף, או לכל מי שרוצה להפקיד סכומים חודשיים ולהשיג תשואה עדיפה מהבנק.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">איך מתקדמים?</h2>
              
              <div className="space-y-4">
                <p>
                  בוחרים מסלול השקעה שמתאים לרמת הסיכון הרצויה, מגדירים סכום חודשי או חד-פעמי, ומתחילים לחסוך בלי בירוקרטיה מיותרת. אפשר להחליף מסלולים או להעביר בין גופים – בלי תשלום מס וללא עמלות.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מעוניינים בתכנון חיסכון מותאם אישית?</h2>
              <p className="mb-8">אשמח לעזור לכם לבחור את המסלול המיטבי עבורכם ולהתחיל לחסוך באופן חכם יותר.</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button 
                  variant="primary" 
                  href="/contact"
                  ariaLabel="תכנון קופת גמל להשקעה"
                  className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
                >
                  תכנון קופת גמל להשקעה
                </Button>
                
                <Button 
                  variant="secondary"
                  href="https://wa.me/972534842700" // יש להחליף למספר הטלפון הנכון
                  ariaLabel="שיחה מהירה ב-WhatsApp"
                  className="text-lg py-4 px-8 bg-[#25D366] border-2 border-[#25D366] hover:bg-transparent hover:text-[#25D366] shadow-lg"
                >
                  שיחה מהירה
                </Button>
              </div>
              
              <Button 
                variant="outline"
                href="/services"
                ariaLabel="חזרה לכל השירותים"
                className="text-brandBlue border-brandBlue hover:bg-brandBlue hover:text-white"
              >
                חזרה לכל השירותים
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InvestmentProvidentFundPage; 