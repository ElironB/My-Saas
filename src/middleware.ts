import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {

  const supabase = createMiddlewareClient({ req, res: new NextResponse() });
  const { data: { session } } = await supabase.auth.getSession();

  const url = req.nextUrl.clone();

  // Check if the request is for the /pricing path
  if (url.pathname === '/pricing') {
    url.pathname = '/';
    url.hash = 'pricing';
    return NextResponse.redirect(url);
  }

  // Check if the user has an active session and is trying to access the /sign-in page
  if (session && url.pathname === '/sign-in') {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  if (url.pathname === '/dashboard' && !session) {
    url.pathname = '/sign-in';
    return NextResponse.redirect(url);
  }

  // For all other cases, allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - /_next/static (static files)
     * - /_next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!/_next/static|/_next/image|favicon.ico).*)",
  ],
};