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
  if (isLoggedIn && authRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!userId || !userProfile) {
    return NextResponse.redirect(new URL("/Signin", req.url));
  }

  const profileCompleted = req.cookies.get("profileCompleted").value === "true" ? true : false;

  // Check if the request is for a protected route
  const protectedRoutes = ["/FindDoctors", "/profile"];
  const isProtectedRoute = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

  // If trying to access any protected route and the user is not logged in, redirect to /Signin
  if (isProtectedRoute && !userId) {
    console.log("User is not logged in, redirecting to /Signin");
    return NextResponse.redirect(new URL("/Signin", req.url));
  }

  // If user is logged in and their profile is complete, redirect to /dashboard instead of /profile
  if (userId && profileCompleted && req.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/FindDoctors", req.url));
  }

  // If user is logged in but their profile is not complete, redirect to /profile
  if (userId && !profileCompleted && req.nextUrl.pathname !== "/profile") {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/FindDoctors", "/profile", "/Signin", "/Signup"],
};
