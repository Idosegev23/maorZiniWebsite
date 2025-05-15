"use client";

import React from 'react';
import SectionTitle from '../common/SectionTitle';

interface TestimonialProps {
  quote: string;
  author: string;
  position?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position }) => {
  return (
    <div className="qs-item">
      <div className="qs-item_inner">
        <div className="text-4xl text-brandGold mb-4">"</div>
        <div className="text">
          {quote.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="title">{author}</div>
        {position && <div className="subtitle">{position}</div>}
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'לאחר ניסיון עם מספר סוכנים, הבנו בפגשנו את האחת שדואגת לנו ושומרת על האינטרסים שלנו. אנו יודעים שפוליסות הביטוח, הפנסיה והחסכונות שלנו נמצאים בידיים בטוחות.',
      author: 'ניצי ודיויד לבנדה',
    },
    {
      quote: 'לאחר שנים רבות של ייעוץ, סיוע וטיפול בקרנות קופות וכו\' באופן מקצועי, מסור ואמין אני יודעת שהפיננסים שלי בידיים הכי טובות שיש. ממליצה על מאוד בחום!',
      author: 'דפנה אמבון',
    },
    {
      quote: 'אני הולכת עם מאור כבר 11 שנים!! עד הגעתי אליה, החלפתי מספר סוכני ביטוח- רדומים, בטוחים בעצמם וברגע האמת לא יעילים! מאור מקצוענית, נעימה וסבלנית ללקוחות.',
      author: 'ד"ר דורית זוהב ארליך',
    },
    {
      quote: 'לפני כ- 11 שנים הגעתי אל מאור, לאחר שאיבדתי אמון בסוכן קודם איתו עבדתי. מאור מקצועית, מאירת פנים ומדויקת בעבודה. זמינה עבורי בכל שעות היום.',
      author: 'ד"ר מוני ארליך',
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 relative">
      {/* קו דקורטיבי עדין בחלק העליון */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      
      <div className="container">
        <SectionTitle
          title="מה הלקוחות אומרים"
          subtitle="הסיפורים האמיתיים מאחורי העבודה שלי"
          center
          showUnderline
          boldSubtitle
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
        
        {/* קו דקורטיבי עדין בחלק התחתון */}
        <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      </div>
    </section>
  );
};

export default Testimonials; 