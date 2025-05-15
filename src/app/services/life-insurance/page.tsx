import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import SectionTitle from '@/components/common/SectionTitle';
import { Heart } from 'lucide-react';

export const metadata = {
  title: 'ביטוח חיים | מאור זיני - ביטוח ופיננסים',
  description: 'ביטוח חיים נועד להבטיח שהיקרים לך יוכלו להמשיך את חייהם ברווחה כלכלית גם במקרה של אובדן פתאומי.',
};

const LifeInsurancePage = () => {
  return (
    <main>
      <section className="bg-brandBeige py-16 md:py-24">
        <div className="container">
          <SectionTitle
            title="ביטוח חיים"
            center
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image
                    src="/services/lifeins.jpg"
                    alt="ביטוח חיים"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover object-center"
                    quality={80}
                  />
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <Heart size={48} strokeWidth={1.5} className="text-brandGold" />
                  </div>
                  <h2 className="text-2xl font-bold text-brandBlue mb-4">ביטוח חיים – שקט נפשי למי שחשוב בחיים</h2>
                  <p className="text-brandGray mb-6">
                    ביטוח חיים הוא לא רק עניין של מספרים – אלא אחריות. זו הדרך לדאוג מראש לכך שגם אם יקרה הבלתי צפוי, האנשים הקרובים יוכלו להמשיך את החיים עם יציבות וביטחון כלכלי.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">מה זה בעצם ביטוח חיים?</h2>
              <p className="mb-6">
                במילים פשוטות: ביטוח חיים הוא הסכם מול חברת הביטוח. מדי חודש משולמת פרמיה קבועה, ובמקרה של פטירה, הסכום שנקבע מראש מועבר למוטבים. הכסף הזה יכול לשמש להוצאות יומיומיות, החזרי משכנתא, חינוך הילדים או תמיכה ארוכת טווח במשפחה.
              </p>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למי ביטוח חיים מתאים?</h2>
              <p className="mb-6">
                לכל מי שיש מי שתלוי בו כלכלית – בן או בת זוג, ילדים, הורים או שותפים עסקיים. גם עצמאיים ובעלי עסקים יכולים להיעזר בביטוח חיים ככלי ליצירת ודאות כלכלית עבור הקרובים.
              </p>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">סוגי ביטוח חיים</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">ביטוח ריסק (למקרה פטירה בלבד)</h3>
                  <p>מעניק פיצוי כספי חד-פעמי במקרה פטירה. נחשב לפתרון משתלם ופשוט למי שמחפש כיסוי ממוקד.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">ביטוח חיים עם מרכיב חיסכון</h3>
                  <p>משלב הגנה ביטוחית עם חיסכון שניתן למשיכה בעתיד. מתאים למי שמעדיף לבנות גם עתיד כלכלי.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-brandBlue mb-2">ביטוח חיים למשכנתא</h3>
                  <p>מכסה את יתרת ההלוואה במקרה פטירה, ומונע מהמשפחה להתמודד עם עול כלכלי נוסף או איבוד הבית.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">איך בוחרים את סכום הביטוח?</h2>
              <p className="mb-4">
                ההמלצה היא להתאים את הסכום לגובה ההוצאות, למספר הילדים, להכנסות הקיימות ולמטרות הכלכליות. לדוגמה:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>כמה כסף נדרש למחייה חודשית עבור המשפחה?</li>
                <li>אילו התחייבויות קיימות – כמו הלוואות או משכנתא?</li>
                <li>כמה זמן נדרש לכסות עד שהילדים יתבגרו או תתייצב תמיכה אחרת?</li>
              </ul>
              <p>בתהליך הייעוץ נבצע יחד ניתוח צרכים ונמצא את הפוליסה המתאימה ביותר – בלי למכור חלומות, אלא לבנות ביטחון.</p>
              
              <h2 className="text-2xl font-bold text-brandBlue mt-10 mb-6">למה לבחור בליווי אישי?</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>ייעוץ בגובה העיניים – כל האפשרויות מוסברות בצורה פשוטה, ללא אותיות קטנות מבלבלות.</li>
                <li>התאמה אמיתית – לא מוצר מדף, אלא פוליסה שמבוססת על הנתונים האישיים.</li>
                <li>שירות מתמשך – גם אחרי ההצטרפות, יש עם מי לדבר. כשדברים משתנים – מתאימים את הפוליסה.</li>
                <li>מענה מהיר – זמינות גבוהה לכל שאלה או צורך.</li>
              </ul>
            </div>
            
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-bold text-brandBlue mb-6">זה הזמן לבדוק אם הכיסוי הקיים באמת מתאים</h2>
              <p className="mb-8">אפשר לקבוע שיחה קצרה ולבחון יחד את האפשרויות. בלי התחייבות, בלי מחויבות – רק מידע וכלים להחלטה נבונה.</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <Button 
                  variant="primary" 
                  href="/contact"
                  ariaLabel="שיחת ייעוץ אישית"
                  className="text-lg py-4 px-8 border-2 border-brandGold hover:bg-transparent hover:text-brandGold shadow-lg"
                >
                  שיחת ייעוץ אישית
                </Button>
                
                <Button 
                  variant="secondary"
                  href="https://wa.me/972534842700" // יש להחליף למספר הטלפון הנכון
                  ariaLabel="שליחת הודעה מהירה ב-WhatsApp"
                  className="text-lg py-4 px-8 bg-[#25D366] border-2 border-[#25D366] hover:bg-transparent hover:text-[#25D366] shadow-lg"
                >
                  שליחת הודעה מהירה
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

export default LifeInsurancePage; 