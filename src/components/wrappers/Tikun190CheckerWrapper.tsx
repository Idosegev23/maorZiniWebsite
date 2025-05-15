"use client";

import dynamic from 'next/dynamic';

// ייבוא דינמי של הרכיב בצד הלקוח
const Tikun190Checker = dynamic(() => import('@/components/tools/Tikun190Checker'), {
  ssr: false,
});

export default function Tikun190CheckerWrapper() {
  return <Tikun190Checker />;
} 