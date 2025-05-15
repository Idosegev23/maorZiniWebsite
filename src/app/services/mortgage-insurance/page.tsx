import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { Home } from 'lucide-react';

export const metadata = {
  title: 'ביטוח משכנתא | מאור זיני - ביטוח ופיננסים',
  description: 'במצבים בלתי צפויים כמו פטירה או אובדן כושר עבודה, ביטוח משכנתא מוודא שההתחייבות לבנק לא תיפול על בני המשפחה.',
};

const MortgageInsurancePage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="ביטוח משכנתא"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/mortageins.jpg"
                    alt="ביטוח משכנתא"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Home size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">דואגים לבית – בכל תרחיש</h2>
                  <p className="text-brandGray mb-6">
                    משכנתא היא התחייבות ארוכת טווח, והבית הוא אחד הנכסים החשובים ביותר. במצבים בלתי צפויים כמו פטירה או אובדן כושר עבודה, 
                    ביטוח משכנתא מוודא שההתחייבות לבנק לא תיפול על בני המשפחה, ושהבית יישאר שלהם – גם כשאין מי שימשיך לשלם את ההחזר החודשי.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">למה צריך את זה?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4 mb-8">
                <li>כדי שהבית יישאר בידי המשפחה גם במקרה קיצון</li>
                <li>כדי לא להכביד כלכלית על הקרובים ביותר</li>
                <li>כדי לא לאבד את הנכס שנבנה לאורך שנים</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מה כולל הביטוח?</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">כיסוי למקרה של פטירה</h3>
                  <p>החזר מלא של יתרת המשכנתא</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">כיסוי למקרה של אובדן כושר עבודה</h3>
                  <p>תשלומים חודשיים במקומך</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">אפשרות להתאים את מסלול הכיסוי</h3>
                  <p>התאמה לאורך חיי ההלוואה</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">התאמה למסלולי משכנתא</h3>
                  <p>מתאים למשכנתא רגילה, זכאות או הלוואה משולבת</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">מי מחויב לביטוח משכנתא?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  כל מי שלוקח משכנתא מחויב להחזיק ביטוח חיים לטובת הבנק. לעיתים נדרש גם כיסוי נוסף לנכס עצמו (ביטוח מבנה), אך כדאי לבחון מעבר 
                  לדרישת הבנק – ולהתאים את הביטוח לטובת המשפחה, לא רק המוסד המממן.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">אפשר לבחור איפה לעשות את הביטוח?</h2>
              
              <div className="space-y-4 mb-8">
                <p>
                  כן. אין חובה לרכוש את הביטוח דרך הבנק. אפשר לקבל את אותה הגנה – ולעיתים רחבה וזולה יותר – 
                  באמצעות סוכנות עצמאית, עם יחס אישי והתאמה מלאה לצרכים.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למה כדאי לבדוק מחדש?</h2>
              
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>כדי לוודא שהסכומים תואמים לשווי הנכס והיתרה הנוכחית</li>
                <li>כדי להוזיל עלויות חודשיות</li>
                <li>כדי לשפר תנאים ולבחור כיסויים רלוונטיים יותר</li>
              </ul>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">איך מתקדמים?</h2>
              <p className="mb-8">
                בשיחה אחת ניתן לבדוק מה קיים, מה כדאי לשפר, ואיך להבטיח שהבית נשאר בידיים הנכונות – בכל תרחיש.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button 
                  variant="primary" 
                  href="/contact"
                  ariaLabel="בדיקת ביטוח משכנתא קיים"
                  className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
                >
                  בדיקת ביטוח משכנתא קיים
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

export default MortgageInsurancePage; 