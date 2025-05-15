import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyChoose from '@/components/home/WhyChoose';
import Testimonials from '@/components/home/Testimonials';
import ArticlesPreview from '@/components/home/ArticlesPreview';
import FAQSection from '@/components/home/FAQSection';
import ContactForm from '@/components/home/ContactForm';
import TravelButton from '@/components/common/TravelButton';

export const metadata: Metadata = {
  title: 'מאור זיני - ביטוח ופיננסים | תכנון פיננסי וייעוץ ביטוחי',
  description: 'ליווי אישי לבניית עתיד פיננסי בטוח. ייעוץ ביטוח, פנסיה והשקעות ממומחית עם יותר מ-15 שנות ניסיון.',
};

export default function Home() {
  return (
    <main dir="rtl" lang="he">
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <WhyChoose />
      <Testimonials />
      <ArticlesPreview />
      <FAQSection />
      <ContactForm />
      
      <TravelButton />
    </main>
  );
}
