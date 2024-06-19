// middleware.js

import { NextResponse } from "next/server";

export async function middleware(req) {
  const userId = req.cookies.get("id");
  const userProfile = req.cookies.get("profile");

  // Check if user is logged in
  const isLoggedIn = userId && userProfile;

  // Routes
  const signInRoute = "/Signin";
  const signUpRoute = "/Signup";

  const { pathname } = req.nextUrl;

  // Redirect logged-out users trying to access protected routes
  if (
    !isLoggedIn &&
    pathname !== signInRoute &&
    pathname !== signUpRoute &&
    pathname.startsWith("/FindDoctors/")
  ) {
    return NextResponse.redirect(new URL(signInRoute, req.url));
  }

  // Redirect logged-in users trying to access signin or signup pages
  if (isLoggedIn && (pathname === signInRoute || pathname === signUpRoute)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/FindDoctors/:id*", "/Signin", "/Signup"],
};
