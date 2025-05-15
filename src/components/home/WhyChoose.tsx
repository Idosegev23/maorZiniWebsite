import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, iconSrc }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-brandGold mb-4 flex justify-center">
        <Image src={iconSrc} alt={title} width={56} height={56} className="h-14 w-auto" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-brandBlue text-center">{title}</h3>
      <p className="text-brandGray text-center">{description}</p>
    </div>
  );
};

const WhyChoose = () => {
  const features = [
    {
      title: 'זמינות מלאה',
      description: 'אני זמינה עבורך בכל שאלה או בעיה, מתחייבת למענה מהיר ולליווי אישי לאורך כל הדרך.',
      iconSrc: '/icons/availability.png',
    },
    {
      title: 'ניסיון אמיתי',
      description: 'עם ניסיון של יותר מ-15 שנה בתחום הביטוח והפיננסים, אני מביאה ידע מקצועי עמוק וראייה רחבה.',
      iconSrc: '/icons/experience.png',
    },
    {
      title: 'יחס אישי',
      description: 'אני מאמינה שכל אדם ייחודי וכך גם הצרכים שלו. לכן אני מתאימה לך פתרון מדויק שמתאים לך.',
      iconSrc: '/icons/personal.png',
    },
  ];

  return (
    <section className="relative bg-brandBeige pt-16 pb-16 md:pt-20 md:pb-20">
      {/* קו דקורטיבי עדין בחלק העליון */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      
      <div className="container">
        <SectionTitle
          title="למה לבחור בי?"
          subtitle="הערכים שמנחים אותי בעבודה היומיומית"
          center
          showUnderline
          boldSubtitle
          centerSubtitle
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              iconSrc={feature.iconSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose; 