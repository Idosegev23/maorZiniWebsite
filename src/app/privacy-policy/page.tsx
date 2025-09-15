import type { Metadata } from "next";
import { ArrowRight, Shield, Mail, Phone, FileText, Lock, Eye, UserCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "מדיניות פרטיות | מאור זיני - ביטוח ופיננסים",
  description: "מדיניות הפרטיות של מאור זיני - ביטוח ופיננסים. מידע על איסוף, שימוש ואבטחת המידע האישי שלך בהתאם לחוק הגנת הפרטיות.",
  keywords: "מדיניות פרטיות, הגנת מידע, תיקון 13, אבטחת מידע, מאור זיני ביטוח",
  robots: "index, follow",
  openGraph: {
    title: "מדיניות פרטיות | מאור זיני - ביטוח ופיננסים",
    description: "מדיניות הפרטיות של מאור זיני - ביטוח ופיננסים. מידע על איסוף, שימוש ואבטחת המידע האישי שלך.",
    url: "https://www.maorzini.co.il/privacy-policy",
    type: "website",
  },
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brandBeige via-white to-brandBeige/30">
      {/* Header */}
      <div className="bg-brandBlue text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/" className="flex items-center gap-2 text-brandBeige hover:text-white transition-colors">
              <ArrowRight size={20} />
              <span>חזרה לעמוד הבית</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-brandGold p-3 rounded-full">
              <Shield className="w-8 h-8 text-brandBlue" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">מדיניות פרטיות</h1>
              <p className="text-brandBeige text-lg">מאור זיני - ביטוח ופיננסים</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Last Updated */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-3 text-brandBlue">
            <FileText size={20} />
            <span className="font-medium">עודכנה לאחרונה: ספטמבר 2025</span>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg text-brandGray leading-relaxed">
            אנחנו במאור זיני – ביטוח ופיננסים מתייחסים בכובד ראש לפרטיות המידע שלך. 
            מדיניות זו מסבירה איזה מידע אנו אוספים, כיצד אנו משתמשים בו, למי אנו מעבירים אותו, 
            ומהן הזכויות שלך לפי הדין בישראל, ובפרט בהתאם לתיקון 13 לחוק הגנת הפרטיות ותקנות אבטחת המידע.
          </p>
        </div>

        {/* Section 1: Contact Info */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brandGold p-2 rounded-full">
              <UserCheck className="w-5 h-5 text-brandBlue" />
            </div>
            <h2 className="text-2xl font-bold text-brandBlue">1. מי אנחנו ואיך יוצרים קשר</h2>
          </div>
          
          <div className="space-y-4 text-brandGray">
            <p><strong>שם העסק:</strong> מאור זיני – ביטוח ופיננסים</p>
            <p><strong>כתובת:</strong> פיק״א 13, ראשון לציון</p>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-brandGold" />
              <span><strong>טלפון:</strong> 03-5040049</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-brandGold" />
              <span><strong>דוא״ל לפניות בנושא פרטיות:</strong> maor@maorz.co.il</span>
            </div>
          </div>
        </div>

        {/* Section 2: Data Collection */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-brandBlue mb-6">2. איזה מידע אנחנו אוספים</h2>
          
          <div className="space-y-4 text-brandGray">
            <p>כאשר אתה משתמש באתר שלנו או יוצר קשר באמצעות הטפסים, אנו עשויים לקבל:</p>
            
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>פרטים אישיים בסיסיים:</strong> שם מלא, טלפון, כתובת דוא״ל.</li>
              <li><strong>תוכן פנייה חופשי</strong> כפי שנמסר על ידך.</li>
              <li><strong>בטפסים ייעודיים:</strong> פרטים נוספים בהתאם לצורך (למשל מספר תעודת זהות, נתוני התקשרות, או מסמכים שאתה מצרף).</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Usage Purposes */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-brandBlue mb-6">3. מטרות השימוש במידע</h2>
          
          <ul className="list-disc list-inside space-y-2 text-brandGray mr-4">
            <li>מענה לפנייה שלך ומתן שירות.</li>
            <li>תיאום פגישות או שיחות ייעוץ.</li>
            <li>טיפול בבקשות מול גופים ביטוחיים או פיננסיים, לבקשתך.</li>
            <li>שיפור השירותים שלנו ותיעוד הקשר מול הלקוחות.</li>
          </ul>
        </div>

        {/* Section 4: Legal Basis */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-brandBlue mb-6">4. הבסיס המשפטי לעיבוד</h2>
          
          <div className="space-y-4 text-brandGray">
            <p>עיבוד המידע מבוסס על אחד או יותר מהבאים:</p>
            
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li><strong>ביצוע בקשה שלך</strong> – לדוגמה: מענה לפנייה בטופס.</li>
              <li><strong>הסכמה מפורשת שלך</strong> – כאשר אתה מסמן/ת את תיבת ההסכמה בטופס.</li>
              <li><strong>חובות על פי דין</strong> – למשל, לשם שמירת מסמכים חשבונאיים.</li>
            </ul>
          </div>
        </div>

        {/* Section 5: Data Sharing */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-brandBlue mb-6">5. למי אנו מעבירים מידע</h2>
          
          <div className="space-y-4 text-brandGray">
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>ספקי שירות טכנולוגיים (אירוח אתר, דוא״ל, אבטחה).</li>
              <li>במידת הצורך ובהתאם לבקשתך – גופים ביטוחיים או פיננסיים רלוונטיים.</li>
            </ul>
            
            <div className="bg-brandBeige/30 p-4 rounded-lg mt-4">
              <p className="font-medium text-brandBlue">
                אנו לא מעבירים מידע לצדדים שלישיים לצורכי פרסום או שיווק ללא הסכמתך.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Data Retention */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-brandBlue mb-6">6. שמירת מידע</h2>
          
          <div className="space-y-4 text-brandGray">
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>מידע שנמסר דרך טפסים נשמר בתיבת הדוא״ל העסקית שלנו.</li>
              <li>אנו נוהגים למחוק הודעות ישנות לאחר <strong>180 יום</strong> או עם סיום הטיפול, לפי המוקדם מביניהם.</li>
              <li>אם החוק מחייב אותנו לשמור מסמכים לפרק זמן ארוך יותר, נעשה זאת בהתאם.</li>
            </ul>
          </div>
        </div>

        {/* Section 7: Security */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brandGold p-2 rounded-full">
              <Lock className="w-5 h-5 text-brandBlue" />
            </div>
            <h2 className="text-2xl font-bold text-brandBlue">7. אבטחת מידע</h2>
          </div>
          
          <div className="space-y-4 text-brandGray">
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>האתר פועל בתקשורת מאובטחת (HTTPS, HSTS).</li>
              <li>אנו מיישמים אמצעי אבטחה טכניים וארגוניים: הגבלת גישה, אימות חזק, הצפנה בתעבורה, והקשחת טפסים.</li>
              <li>מידע רגיש לא נשמר בלוגי שרת ואינו נשלח לצדדים שלישיים ללא צורך.</li>
            </ul>
            
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
              <p className="text-orange-800">
                <strong>חשוב:</strong> למרות מאמצינו, אין אפשרות להבטיח הגנה מוחלטת, ולכן אנו ממליצים 
                שלא לשלוח פרטים רפואיים רגישים ללא ערוץ מאובטח.
              </p>
            </div>
          </div>
        </div>

        {/* Section 8: Your Rights */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-brandGold p-2 rounded-full">
              <Eye className="w-5 h-5 text-brandBlue" />
            </div>
            <h2 className="text-2xl font-bold text-brandBlue">8. זכויותיך</h2>
          </div>
          
          <div className="space-y-4 text-brandGray">
            <p>באפשרותך לפנות אלינו בכל עת ולבקש:</p>
            
            <ul className="list-disc list-inside space-y-2 mr-4">
              <li>לעיין במידע שנאסף עליך.</li>
              <li>לתקן מידע שאינו מדויק.</li>
              <li>למחוק מידע או להגביל את השימוש בו, בכפוף לחובות החוק.</li>
              <li>לקבל מידע על העברות שביצענו.</li>
            </ul>
            
            <div className="bg-brandBlue/10 p-4 rounded-lg">
              <p className="font-medium text-brandBlue">
                למימוש זכויות: <a href="mailto:maor@maorz.co.il" className="underline">maor@maorz.co.il</a>
              </p>
            </div>
          </div>
        </div>

        {/* Section 9: Cookies */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-brandBlue mb-6">9. עוגיות ואנליטיקה</h2>
          
          <p className="text-brandGray">
            האתר משתמש בכלים סטנדרטיים לסטטיסטיקה (כגון Google Analytics) – אך לא נשלח להם פרטים מזהים אישית. 
            ניתן לחסום שימוש בעוגיות דרך הגדרות הדפדפן.
          </p>
        </div>

        {/* Section 10: Updates */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-brandBlue mb-6">10. עדכונים למדיניות</h2>
          
          <p className="text-brandGray">
            ייתכן ונעדכן מדיניות זו מעת לעת. תאריך העדכון יופיע בראש העמוד. 
            נעדכן אותך על שינויים מהותיים באמצעים סבירים.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-brandBlue text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">יש לך שאלות?</h3>
          <p className="mb-6 text-brandBeige">
            לכל שאלה או בקשה בנושא פרטיות, אנחנו כאן בשבילך
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:maor@maorz.co.il" 
              className="flex items-center gap-2 bg-brandGold text-brandBlue px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              <Mail size={20} />
              maor@maorz.co.il
            </a>
            
            <a 
              href="tel:03-5040049" 
              className="flex items-center gap-2 border border-brandBeige text-brandBeige px-6 py-3 rounded-lg font-medium hover:bg-brandBeige hover:text-brandBlue transition-colors"
            >
              <Phone size={20} />
              03-5040049
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-brandBlue hover:text-brandGold transition-colors font-medium"
          >
            <ArrowRight size={20} />
            חזרה לעמוד הבית
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
