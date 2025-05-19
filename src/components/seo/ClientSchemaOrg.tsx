'use client';

import SchemaOrg from './SchemaOrg';
import { getOrganizationSchema } from './schemas';

export default function ClientSchemaOrg() {
  return <SchemaOrg schema={getOrganizationSchema()} />;
} 