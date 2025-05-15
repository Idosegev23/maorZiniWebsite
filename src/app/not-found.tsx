import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <div className="container text-center py-16">
        <h1 className="text-6xl font-bold text-brandBlue mb-6">404</h1>
        <h2 className="text-3xl font-bold text-brandBlue mb-8">הדף לא נמצא</h2>
        <p className="text-xl text-brandGray mb-12 max-w-md mx-auto">
          מצטערים, אך הדף שחיפשת אינו קיים או הוסר.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brandGold text-white px-6 py-3 rounded-xl font-medium hover:bg-opacity-90 transition-all"
        >
          <span>חזרה לדף הבית</span>
          <ArrowRight size={18} className="transform rotate-180" />
        </Link>
      </div>
    </main>
  );
} 