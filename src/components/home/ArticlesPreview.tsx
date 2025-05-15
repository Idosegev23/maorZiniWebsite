"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  image,
  slug,
  date,
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <Link href={`/magazine/${slug}`} className="block h-full">
        <div className="relative h-52">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-brandGold mb-2">{date}</p>
          <h3 className="text-xl font-bold mb-3 text-brandBlue">{title}</h3>
          <p className="text-brandGray mb-4 line-clamp-3">{excerpt}</p>
          <p className="text-brandGold font-medium">המשך קריאה »</p>
        </div>
      </Link>
    </div>
  );
};

const ArticlesPreview = () => {
  const articles = [
    {
      title: 'הטיפ החודשי: איך לחסוך נכון – והרבה',
      excerpt: 'מדריך מעשי לניהול תקציב משפחתי, בחירת ביטוחים וחיסכון חכם.',
      image: '/images/magazine/saving-family.jpg',
      slug: 'how-to-save-right',
      date: '21 ביוני 2023',
    },
    {
      title: 'איך לבחור ביטוח בריאות שמתאים באמת?',
      excerpt: 'הסבר פשוט על סוגי ביטוחים, מה לבדוק ואיך להתאים לצרכים שלך.',
      image: '/images/magazine/health-insurance.jpg',
      slug: 'choosing-health-insurance',
      date: '3 מאי 2023',
    },
    {
      title: 'תיקון 190: האם זה רלוונטי עבורך?',
      excerpt: 'למי זה מתאים, איך זה עובד ואיך ניתן לחסוך מס כחוק.',
      image: '/images/magazine/tax-saving.jpg',
      slug: 'amendment-190',
      date: '1 אפריל 2023',
    },
  ];

  return (
    <section className="bg-brandBeige py-16 md:py-24 relative">
      {/* קו דקורטיבי עדין בחלק העליון */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      
      <div className="container">
        <SectionTitle
          title="המגזין של מאור – תוכן בגובה העיניים"
          subtitle="מאמרים, טיפים וסיפורים שיעזרו לך להבין, לבחור ולהרגיש בטוח/ה"
          center
          showUnderline
          boldSubtitle
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              excerpt={article.excerpt}
              image={article.image}
              slug={article.slug}
              date={article.date}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="primary"
            href="/magazine"
            ariaLabel="לכל המאמרים"
            className="text-lg py-3 px-6 bg-brandBlue text-white hover:bg-transparent hover:text-brandBlue border border-brandBlue transition-all shadow-md"
          >
            לכל המאמרים
          </Button>
        </div>
      </div>
      
      {/* קו דקורטיבי עדין בחלק התחתון */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
    </section>
  );
};

export default ArticlesPreview; 