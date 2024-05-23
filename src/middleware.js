// middleware.js
import { NextResponse } from "next/server";

export async function middleware(req) {
  const userId = req.cookies.get("id");

  // Check if the request is for a protected route
  const protectedRoutes = ["/dashboard", "/another-protected-page"];
  const isProtectedRoute = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

  if (isProtectedRoute && !userId) {
    return NextResponse.redirect(new URL("/Signin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/another-protected-page"],
};
