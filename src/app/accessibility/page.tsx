import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "הצהרת נגישות | מאור זיני - ביטוח ופיננסים",
  description: "הצהרת נגישות של אתר מאור זיני - ביטוח ופיננסים בהתאם לתקן הישראלי (ת\"י 5568) והנחיות WCAG 2.0 AA.",
};

export default function AccessibilityPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-brandBlue mb-8">הצהרת נגישות</h1>
      
      <div className="prose prose-lg max-w-full">
        <p className="mb-4">
          אתר מאור זיני - ביטוח ופיננסים מכיר בחשיבות הנגישות לאנשים עם מוגבלויות, ועושה כל מאמץ להנגיש את האתר בהתאם לתקן הישראלי לנגישות אתרי אינטרנט (ת"י 5568) והנחיות WCAG 2.0 ברמה AA.
        </p>
        
        <h2 className="text-2xl font-bold text-brandBlue mt-8 mb-4">אמצעי הנגישות באתר</h2>
        <ul className="list-disc mr-6 my-4 space-y-2">
          <li>כפתור נגישות הממוקם בצד שמאל של המסך המאפשר התאמת האתר לצרכי המשתמש, כולל אפשרויות להגדלת טקסט, שינוי ניגודיות, והדגשת קישורים.</li>
          <li>ניווט מלא באמצעות המקלדת - ניתן לגלוש באתר ולהפעיל את כל האפשרויות בו באמצעות מקלדת בלבד.</li>
          <li>לכל התמונות באתר יש טקסט חלופי המתאר את תוכנן.</li>
          <li>האתר מאפשר שינוי גודל טקסט והגדלה באמצעות דפדפן.</li>
          <li>האתר מוצג בצורה ברורה גם בהגדלה של עד 200%.</li>
          <li>ניגודיות צבעים מספקת בין הטקסט לרקע.</li>
          <li>מבנה האתר עקבי וברור, כולל כותרות מדורגות.</li>
          <li>האתר מותאם לקורא מסך ועבור טכנולוגיות מסייעות.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-brandBlue mt-8 mb-4">הסדרי נגישות נוספים בעסק</h2>
        <ul className="list-disc mr-6 my-4 space-y-2">
          <li>קיימת גישה נוחה למשרדי החברה.</li>
          <li>שירות לקוחות טלפוני נגיש.</li>
          <li>ניתן לקבל מסמכים בפורמט נגיש בהתאם לדרישה.</li>
          <li>צוות העובדים עבר הדרכה בנושא מתן שירות נגיש.</li>
        </ul>
        
        <h2 className="text-2xl font-bold text-brandBlue mt-8 mb-4">דרכי הפניה בנושאי נגישות</h2>
        <p className="mb-4">
          אנו עושים כל מאמץ להנגיש את האתר ולשפר את חווית המשתמש. אם נתקלתם בבעיית נגישות באתר או שברצונכם לשתף אותנו בהצעות לשיפור הנגישות, אנא צרו קשר עם רכז הנגישות שלנו:
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg my-4">
          <p className="mb-1"><strong>שם רכז הנגישות:</strong> מאור זיני</p>
          <p className="mb-1"><strong>טלפון:</strong> 03-5040049</p>
          <p className="mb-1"><strong>דוא"ל:</strong> maor@maorz.co.il</p>
        </div>
        
        <p className="mb-4">
          אנו מתחייבים לטפל בפניות בנושא נגישות בהקדם האפשרי ולא יאוחר מ-14 ימי עבודה.
        </p>
        
        <h2 className="text-2xl font-bold text-brandBlue mt-8 mb-4">פרטי אישור הנגישות</h2>
        <ul className="list-disc mr-6 my-4 space-y-2">
          <li>התאמות הנגישות בוצעו על ידי יועץ נגישות מוסמך בהתאם לתקן הישראלי (ת"י 5568) ברמה AA.</li>
          <li>האתר נבדק ונמצא נגיש בתאריך: מאי 2025.</li>
          <li>הצהרת הנגישות עודכנה לאחרונה בתאריך: 18 במאי, 2025.</li>
        </ul>
        
        <div className="border-t border-gray-300 my-8 pt-6">
          <p className="text-center text-sm text-gray-600">
            הצהרת נגישות זו נכתבה בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998 והתקנות שהותקנו מכוחו.
          </p>
        </div>
      </div>
    </div>
  );
} 