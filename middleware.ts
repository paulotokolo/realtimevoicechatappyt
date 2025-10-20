import { updateSession } from './lib/supabase/middleware'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  const { supabaseResponse, user } = await updateSession(request)

  // If user is not signed in and the current path is a protected route,
  // redirect the user to /login
  if (!user && pathname.startsWith('/(protected)')) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return Response.redirect(url)
  }

  // If user is signed in and the current path is /login or /,
  // redirect the user to /dashboard
  if (user && (pathname === '/login' || pathname === '/')) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return Response.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}