import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, href, imageSrc }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={href}>
        {imageSrc && (
          <div className="relative h-52">
            <Image 
              src={imageSrc} 
              alt={title} 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-brandBlue">{title}</h3>
          <p className="text-brandGray mb-4 line-clamp-3">{description}</p>
          <p className="text-brandGold font-medium">קרא עוד »</p>
        </div>
      </Link>
    </div>
  );
};

const services = [
  {
    title: 'ביטוח חיים ובריאות',
    description: 'הגנה מותאמת אישית מול מצבים רפואיים מורכבים או אובדן כושר עבודה',
    href: '/services/life-health',
    imageSrc: '/services/healthins.jpg'
  },
  {
    title: 'תכנון פנסיוני',
    description: 'הכוונה מקצועית בקרנות פנסיה, תיקון 190, קצבה והיערכות לפרישה',
    href: '/services/pension',
    imageSrc: '/services/pension.jpg'
  },
  {
    title: 'ביטוח סיעודי ואובדן כושר עבודה',
    description: 'תמיכה כלכלית במצבי בריאות מתמשכים או פגיעה בפרנסה',
    href: '/services/disability',
    imageSrc: '/services/lostworkins.jpg'
  },
  {
    title: 'חיסכון והשקעה חכמה',
    description: 'בניית חיסכון גמיש – קרן השתלמות, גמל להשקעה, קופת גמל ותכנון מס',
    href: '/services/savings',
    imageSrc: '/services/investment.jpg'
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="relative bg-white pt-16 pb-16 md:pt-20 md:pb-20">
      {/* קו דקורטיבי עדין בחלק העליון */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brandGold to-transparent"></div>
      
      <div className="container">
        <SectionTitle
          title="השירותים שלי"
          subtitle="מגוון פתרונות מותאמים אישית לצרכים שלך"
          center
          showUnderline
          boldSubtitle
        
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              href={service.href}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="primary" 
            href="/services"
            ariaLabel="לכל השירותים"
            className="text-lg py-3 px-6 bg-brandBlue text-white hover:bg-transparent hover:text-brandBlue border border-brandBlue transition-all shadow-md"
          >
            לכל השירותים
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid; 