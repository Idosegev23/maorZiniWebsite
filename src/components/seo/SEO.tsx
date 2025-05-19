import { FC } from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: FC<SEOProps> = ({
  title = 'מאור זיני - ביטוח ופיננסים בגובה העיניים',
  description = 'ייעוץ אישי לביטוח, פנסיה וחיסכון שמתאים בדיוק לך. תכנון נכון. ליווי מלא. שקט נפשי.',
  image = 'https://www.example.co.il/logo.png',
  url = 'https://www.example.co.il',
  type = 'website',
}) => {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'מאור זיני - ביטוח ופיננסים',
    'url': 'https://www.example.co.il',
    'logo': 'https://www.example.co.il/logo.png',
    'contactPoint': [{
      '@type': 'ContactPoint',
      'telephone': '+972-50-0000000',
      'contactType': 'customer service',
      'areaServed': 'IL',
      'availableLanguage': ['Hebrew']
    }]
  };

  return (
    <Head>
      {/* תגיות מטא בסיסיות */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      
      {/* תגיות Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="מאור זיני - ביטוח ופיננסים" />
      <meta property="og:locale" content="he_IL" />
      
      {/* תגיות Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Schema.org JSON-LD עבור Organization */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </Head>
  );
};

export default SEO; 