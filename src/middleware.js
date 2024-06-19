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
  const dashboardRoute = "/dashboard";

<<<<<<< HEAD
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
=======
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
    return NextResponse.redirect(new URL(dashboardRoute, req.url));
>>>>>>> 105a090e7f04c7715980dea24c4d2fb5945c9791
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/FindDoctors/:id*", "/Signin", "/Signup"],
};
