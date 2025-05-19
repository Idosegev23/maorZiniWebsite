'use client';

import { FC } from 'react';
import Script from 'next/script';

interface SchemaOrgProps {
  schema: Record<string, any>;
}

/**
 * קומפוננט להטמעת סכמה של Schema.org
 */
const SchemaOrg: FC<SchemaOrgProps> = ({ schema }) => {
  return (
    <Script
      id="schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
};

export default SchemaOrg;

/**
 * מחזיר סכמה של ארגון לפי Schema.org
 */
export function getOrganizationSchema() {
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