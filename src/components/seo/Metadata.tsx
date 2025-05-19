import { Metadata } from 'next';

type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'book' | 'profile';
};

/**
 * יוצר אובייקט מטאדאטה מותאם לעמוד ספציפי
 */
export function generateMetadata({
  title = 'מאור זיני - ביטוח ופיננסים בגובה העיניים',
  description = 'ייעוץ אישי לביטוח, פנסיה וחיסכון שמתאים בדיוק לך. תכנון נכון. ליווי מלא. שקט נפשי.',
  image = 'https://www.example.co.il/logo.png',
  url = 'https://www.example.co.il',
  type = 'website',
}: MetadataProps): Metadata {
  return {
    title,
    description,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      url,
      siteName: 'מאור זיני - ביטוח ופיננסים',
      locale: 'he_IL',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

/**
 * יוצר JSON-LD עבור ארגון
 */
export function generateOrganizationSchema() {
  return {
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
} 