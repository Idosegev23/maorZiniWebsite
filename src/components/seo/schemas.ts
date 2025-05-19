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