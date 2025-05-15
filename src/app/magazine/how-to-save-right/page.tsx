import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'הטיפ החודשי: איך לחסוך נכון – והרבה | מאור זיני - ביטוח ופיננסים',
  description: 'מדריך מעשי לניהול תקציב משפחתי, בחירת ביטוחים וחיסכון חכם.',
};

export default function SavingArticlePage() {
  return (
    <main dir="rtl" lang="he" className="container px-4 md:px-8 lg:px-20 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <div className="flex items-center text-sm text-brandGold font-medium mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>21 ביוני 2023</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brandBlue mb-6 leading-tight">
            איך לחסוך נכון – ולהרוויח הרבה יותר
          </h1>
          
          <div className="mb-6">
            <p className="font-medium">מאת מאור זיני</p>
            <p className="text-sm text-gray-600">ביטוח פנסיה ופיננסים</p>
          </div>
          
          <p className="text-xl text-brandGray border-r-4 border-brandGold pr-4 italic">
            מדריך מעשי לניהול תקציב משפחתי, בחירת ביטוחים וחיסכון חכם.
          </p>
        </header>

        <div className="relative aspect-[16/9] w-full mb-10 rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/images/magazine/saving-family.jpg"
            alt="משפחה חוסכת ביחד"
            fill
            priority
            className="object-cover transition-transform hover:scale-105 duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brandBlue/30 to-transparent"></div>
        </div>

        <article className="prose prose-lg max-w-none prose-headings:text-brandBlue prose-headings:font-bold prose-p:text-brandGray prose-li:text-brandGray prose-table:text-brandGray">
          
          <div className="bg-gray-50 p-6 rounded-xl mb-10 border-r-4 border-brandGold">
            <h2 className="text-2xl !text-brandBlue !font-semibold !mb-3">למה בכלל צריך לחסוך?</h2>
          <p>חיסכון הוא לא רק פעולה פיננסית – הוא גם רגש.
          חוסכים כדי להגשים חלומות: דירה, טיול, רכב חדש, עזרה לילדים.
          חוסכים גם בשביל תחושת שקט – הידיעה שיש גב כלכלי לרגעים בלתי צפויים.</p>
            <p className="mb-0">אבל איך נכון לחסוך? איפה לשים את הכסף? ומה עושים כשהבנק לא נותן כמעט כלום?</p>
          </div>
          
          <section className="my-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-2xl !text-brandBlue !font-semibold !mt-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brandGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              מה השתנה בתקופת הקורונה?
            </h2>
          <p>במהלך משבר הקורונה, הצריכה הפרטית ירדה – פחות טיסות, פחות מסעדות, פחות מותרות.
          במקביל, יתרות העובר ושב (עו"ש) של הציבור זינקו בצורה דרמטית.
          לפי נתוני בנק ישראל, נכון לפברואר 2021 – סך הכסף שהיה בחשבונות עו"ש עמד על למעלה מ־570 מיליארד ש"ח.</p>
            <p className="font-medium italic text-brandBlue">זה אולי נשמע טוב – אבל במונחי השקעה, מדובר <strong className="text-red-600">בהפסד שקט</strong>:
          כאשר כסף שוכב בעו"ש – הוא <strong>לא עובד, לא צומח, ולא מייצר רווח</strong>.</p>
          </section>
          
          <section className="my-12">
            <h2 className="text-2xl !text-brandBlue !font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brandGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A2.25 2.25 0 0121 8.25v7.5A2.25 2.25 0 0118.75 18H3.75A2.25 2.25 0 011.5 15.75V8.25c0-.98.626-1.813 1.5-2.122L12 2.25l8.618 3.734zM12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75h.008v.008H12v-.008zm0 0c.013.001.026 0 .038 0 .012-.001.025-.001.038-.001a.75.75 0 010 1.5c-.012.001-.026.001-.038.001a.75.75 0 01-.038 0c-.013 0-.026 0-.038-.001a.75.75 0 010-1.5c.012-.001.025-.001.038-.001z" />
              </svg>
              והפק"מ? הרי הוא "חיסכון בטוח"…
            </h2>
            <p>לא ממש. פק"מ (פקדון קצר מועד) הוא מוצר שהבנקים מציעים כדי לייצר תחושת ביטחון – אך בפועל:</p>
            <ul className="list-disc list-inside space-y-2 my-4 bg-red-50 p-4 rounded-lg border-r-4 border-red-400">
            <li>התשואה בו כמעט אפסית</li>
            <li>המסלול קשיח – לא ניתן לגעת בכסף מבלי להפסיד את הריבית</li>
            <li>דמי ניהול ועמלות "שוחקים" את הרווח המצומצם ממילא</li>
          </ul>
            <p className="font-semibold text-brandBlue">אז מה כן? איך אפשר <strong>לחסוך חכם</strong>?</p>
          </section>

          <section className="my-12 p-6 bg-green-50 rounded-xl border-l-4 border-green-400">
            <h2 className="text-2xl !text-brandBlue !font-semibold !mt-0 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              קופות גמל, קרנות השתלמות, חיסכון פיננסי – אפשרויות נגישות לכולם
            </h2>
          <p>דרך חברות הביטוח ובתי ההשקעות קיימים פתרונות חיסכון מקצועיים, נזילים ונגישים.
          ניתן לבחור בין מסלולי השקעה שונים – לפי רמת הסיכון הרצויה, גיל, מטרת החיסכון ואופק הזמן.</p>
            <p className="mb-0">במקום "לשים בבנק ולקוות לטוב", אפשר לבנות תמהיל חיסכון ש<strong>צומח בצורה מדודה</strong>, תוך בחירה בין חשיפה גבוהה למניות לבין מסלולים סולידיים.</p>
          </section>
          
          <section className="my-12">
            <h2 className="text-2xl !text-brandBlue !font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brandGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              רגע, ומה עם מיסים?
            </h2>
          <p>כל רווח מהשקעה ממוסה בישראל במס רווחי הון בשיעור של <strong>25%</strong> (על הרווח, לא על הקרן).
            לדוגמה: בהשקעה של 1,000 ₪ שהניבה תשואה של 5% בשנה – מתקבלים 50 ₪ רווח. מהם ינוכו 12.5 ₪ מס למדינה.</p>
            <p className="bg-yellow-50 p-4 rounded-lg border-r-4 border-yellow-400">אבל – יש גם פתרונות שמפחיתים את גובה המס, כמו <strong>תיקון 190</strong>, שמאפשר למשוך את הרווח כקצבה פטורה ממס, בתנאים מסוימים.</p>
          </section>

          <section className="my-12">
            <h2 className="text-2xl !text-brandBlue !font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brandGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              ומה עם סיכונים?
            </h2>
            <p>כל השקעה בשוק ההון טומנת בחובה <strong>סיכון לתשואה שלילית</strong>. לכן חשוב לדעת:</p>
            <ul className="list-disc list-inside space-y-2 my-4 bg-gray-100 p-4 rounded-lg">
            <li>ככל שטווח ההשקעה ארוך יותר – הסיכון קטן</li>
            <li>ניתן לפצל את החיסכון למספר מסלולים (סולידי + מנייתי למשל)</li>
            <li>ניתן לבצע שינויים בהשקעה לאורך הדרך – ללא קנס וללא תשלום מס (במוצרים שאינם "תיק מנוהל")</li>
          </ul>
          </section>

          <section className="my-12 p-6 bg-blue-50 rounded-xl">
            <h2 className="text-2xl !text-brandBlue !font-semibold !mt-0 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brandGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              יתרונות עיקריים של חיסכון שאינו בנקאי:
            </h2>
            <ul className="list-disc list-inside space-y-2 mt-4 columns-1 md:columns-2 gap-x-8">
            <li><strong>ריבוי מסלולים</strong> – התאמה אישית לרמת הסיכון הרצויה</li>
            <li><strong>נזילות מלאה</strong> – אפשר למשוך את הכסף בכל שלב</li>
            <li><strong>אפשרות לקבל הלוואה</strong> – כנגד החיסכון, בריבית נמוכה</li>
            <li><strong>דמי ניהול תחרותיים</strong> – במרבית המוצרים אין עמלות נוספות</li>
            <li><strong>גמישות מיסוי</strong> – מעבר בין מסלולים מבלי ליצור "אירוע מס"</li>
          </ul>
          </section>
          
          <section className="my-12">
            <h2 className="text-2xl !text-brandBlue !font-semibold flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brandGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z" />
              </svg>
              השוואת מוצרים – מבט מרוכז:
            </h2>
            <div className="overflow-x-auto my-6 shadow-md rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-brandBlue text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">מאפיין</th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">תיק מנוהל</th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">חיסכון פיננסי</th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">קופת גמל להשקעה</th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider">קופת גמל תיקון 190</th>
                </tr>
              </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[{
                    feature: 'תמהיל השקעה',
                    managed: 'מניות, קרנות נאמנות, תעודות סל',
                    financial: 'מסלולים לפי רמת סיכון',
                    investmentFund: 'מסלולים לפי רמת סיכון',
                    amendment190: 'מסלולים לפי רמת סיכון',
                  }, {
                    feature: 'דמי ניהול',
                    managed: '0.5%-1.2% + עמלות קנייה/מכירה',
                    financial: '0.5%-1%',
                    investmentFund: '0.7%-0.85%',
                    amendment190: '0.6%-0.85%',
                  }, {
                    feature: 'מיסוי בפדיון',
                    managed: '25% מס רווח הון',
                    financial: '25% מס רווח הון',
                    investmentFund: '25% מס / פטור בקצבה',
                    amendment190: '15% נומינלי או פטור בקצבה',
                  }, {
                    feature: 'עמלות נוספות',
                    managed: 'דמי משמרת, ניהול חשבון',
                    financial: 'אין',
                    investmentFund: 'אין',
                    amendment190: 'אין',
                  }, {
                    feature: 'מיסוי בעת שינוי מסלול',
                    managed: 'כל שינוי = אירוע מס',
                    financial: 'אין',
                    investmentFund: 'אין',
                    amendment190: 'אין',
                  }, {
                    feature: 'אפשרות הלוואה',
                    managed: 'אין',
                    financial: 'כן (עד 80%)',
                    investmentFund: 'כן (עד 80%)',
                    amendment190: 'כן (עד 80%)',
                  }, {
                    feature: 'תקרת הפקדה',
                    managed: 'אין',
                    financial: 'אין',
                    investmentFund: '70,000 ש"ח בשנה',
                    amendment190: 'אין',
                  }, {
                    feature: 'אפשרות ניוד',
                    managed: 'אין',
                    financial: 'אין',
                    investmentFund: 'כן',
                    amendment190: 'כן',
                  }, {
                    feature: 'יתרון ייחודי',
                    managed: 'שליטה מלאה, ניהול אישי',
                    financial: 'פשוט, שקוף ונזיל',
                    investmentFund: 'מוצר חיסכון פנסיוני עם גמישות',
                    amendment190: 'מתאים לגילאי פרישה עם יתרון מס משמעותי',
                  }].map((row, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{row.managed}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{row.financial}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{row.investmentFund}</td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{row.amendment190}</td>
                </tr>
                  ))}
              </tbody>
            </table>
          </div>
          </section>
          
          <section className="my-12">
            <h2 className="text-2xl !text-brandBlue !font-semibold flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-brandGold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              איך בוחרים?
            </h2>
          <p>הבחירה בין קופת גמל, חיסכון פיננסי או תיקון 190 לא נעשית לפי "מה שכולם עושים" – אלא לפי:</p>
            <ul className="list-disc list-inside space-y-2 my-4 bg-blue-50 p-4 rounded-lg border-r-4 border-brandGold">
            <li>מטרה (קצבה? חיסכון לילדים? הון ראשוני?)</li>
            <li>גיל</li>
            <li>רמת סיכון מועדפת</li>
            <li>צפי למועד משיכה</li>
            <li>ושאלת המיסוי</li>
          </ul>
          </section>
          
          <div className="bg-brandBlue text-white p-8 rounded-xl my-12 text-center">
            <h2 className="text-3xl font-bold mb-4 !text-white">לסיכום:</h2>
            <p className="text-lg leading-relaxed">עולם החיסכון השתנה – והוא פתוח יותר, גמיש יותר ונגיש הרבה יותר מהעבר.
          במקום להשאיר את הכסף בבנק – אפשר לגרום לו לעבוד.
          אפשר לבנות תמהיל חכם שמבוסס על מטרות אמיתיות, תוך ליווי אישי והבנה של הצרכים.</p>
            <p className="text-xl font-semibold mt-6">מחפשים דרך להתחיל?
          אפשר להתחיל בצעד קטן – ולגדול משם.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 my-12">
            <Link 
              href="/contact" 
              className="bg-brandGold hover:bg-yellow-500 text-brandBlue font-semibold py-3 px-6 rounded-lg text-center transition-colors flex-1 flex items-center justify-center group shadow-md hover:shadow-lg"
            >
              <span>לקביעת פגישה ראשונית</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a 
              href="https://wa.me/+972534842700" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center justify-center gap-2 transition-colors flex-1 shadow-md hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ml-2">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>התייעצות אישית</span>
            </a>
          </div>
        </article>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <Link 
            href="/magazine" 
            className="inline-flex items-center text-brandGold hover:text-brandBlue font-medium transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            חזרה לכל המאמרים
          </Link>
        </div>
      </div>
    </main>
  );
} 