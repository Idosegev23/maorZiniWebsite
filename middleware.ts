import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.protocol === 'http:') {
    return NextResponse.redirect(new URL(request.nextUrl.href.replace('http:', 'https:')));
  }
  return NextResponse.next();
}

// הוספת הגדרת matcher כדי שהמידלוור יופעל על כל הנתיבים
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 