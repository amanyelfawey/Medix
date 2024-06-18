// middleware.js

import { NextResponse } from "next/server";

export async function middleware(req) {
  const userId = req.cookies.get("id");
  const userProfile = req.cookies.get("profile");

  // Check if user is logged in
  const isLoggedIn = userId && userProfile;

  // Routes for signing in and signing up
  const authRoutes = ["/Signin", "/Signup"];

  // Prevent logged-in users from accessing sign-in or sign-up pages
  if (isLoggedIn && authRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isLoggedIn && authRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/Signin", req.url));
  }

  const profileCompleted = req.cookies.get("profileCompleted")?.value === "true";

  // If user is logged in and their profile is complete, redirect to /FindDoctors instead of /profile
  if (isLoggedIn && profileCompleted && req.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/FindDoctors", req.url));
  }

  // If user is logged in but their profile is not complete, redirect to /profile
  if (isLoggedIn && !profileCompleted && req.nextUrl.pathname !== "/profile") {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/FindDoctors", "/profile", "/Signin", "/Signup"],
};
