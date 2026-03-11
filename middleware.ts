import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Get the session token (works for both secure and non-secure cookies)
  const sessionToken = 
    request.cookies.get("__Secure-authjs.session-token")?.value || 
    request.cookies.get("authjs.session-token")?.value;

  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin/dashboard");

  if (isAdminRoute && !sessionToken) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
