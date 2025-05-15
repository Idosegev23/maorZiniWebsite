"use client";

import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Accordion from '../common/Accordion';
import Button from '../common/Button';

const FAQSection = () => {
  const faqItems = [
    {
      title: 'איך אדע איזה ביטוח מתאים לי?',
      content: 'בפגישת ייעוץ אישית נבחן את המצב הנוכחי שלך, הצרכים, היעדים והתקציב. לאחר ניתוח מקיף נוכל להמליץ על סוגי הביטוח המתאימים ביותר עבורך.',
    },
    {
      title: 'האם כדאי לי לבטל ביטוחים קיימים?',
      content: 'לא מומלץ לבטל ביטוחים לפני שעושים השוואה מקיפה וניתוח של הכיסויים הקיימים. בפגישה אנחנו נבחן את כל הביטוחים שלך ונבדוק האם יש כפילויות או חוסרים שכדאי לטפל בהם.',
    },
    {
      title: 'מה ההבדל בין ביטוח מנהלים, פנסיה וקרן השתלמות?',
      content: 'ביטוח מנהלים, קרן פנסיה וקרן השתלמות הם מוצרים פיננסיים שונים עם מטרות ותנאים שונים. ביטוח מנהלים מציע יותר גמישות והתאמה אישית, קרן פנסיה מציעה דמי ניהול נמוכים יותר אך פחות גמישות, וקרן השתלמות היא אפיק חיסכון לטווח בינוני עם הטבות מס ייחודיות.',
    },
    {
      title: 'כמה עולה הייעוץ שלך?',
      content: 'הפגישה הראשונית והייעוץ הבסיסי ניתנים ללא עלות. במידה ונחליט להמשיך לעבוד יחד, התגמול שלי מגיע מחברות הביטוח במקרה של רכישת ביטוח חדש, או כתשלום ייעוץ קבוע במקרה של תכנון פיננסי מתמשך.',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 relative">
      {/* קו דקורטיבי עדין בחלק העליון */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      
      <div className="container">
        <SectionTitle
          title="שאלות נפוצות"
          subtitle="מענה לשאלות שעולות בתהליך הייעוץ"
          center
          showUnderline
          boldSubtitle
        />
        
        <div className="max-w-3xl mx-auto mt-10 bg-brandBeige p-8 rounded-2xl shadow-md">
          <Accordion items={faqItems} />
          
          <div className="mt-10 text-center">
            <p className="mb-4 text-lg text-brandGray">יש לך שאלה שלא מופיעה כאן?</p>
            <Button
              variant="primary"
              href="/contact"
              ariaLabel="צור קשר לשאלות נוספות"
              className="text-lg py-3 px-6 bg-brandBlue text-white hover:bg-transparent hover:text-brandBlue border border-brandBlue transition-all shadow-md"
            >
              צור קשר לשאלות נוספות
            </Button>
          </div>
        </div>
      </div>
      
      {/* קו דקורטיבי עדין בחלק התחתון */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
    </section>
  );
};

export default FAQSection; 