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