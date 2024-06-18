import { NextResponse } from "next/server";
import Cookies from "js-cookie";

export async function middleware(req) {
  const userId = req.cookies.get("id");
  const userProfile = req.cookies.get("profile");

  if (!userId || !userProfile) {
    return NextResponse.redirect(new URL("/Signin", req.url));
  }

  const profileCompleted = req.cookies.get("profileCompleted").value === "true" ? true : false;

  // Check if the request is for a protected route
  const protectedRoutes = ["/dashboard", "/profile"];
  const isProtectedRoute = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

  // If trying to access any protected route and the user is not logged in, redirect to /Signin
  if (isProtectedRoute && !userId) {
    return NextResponse.redirect(new URL("/Signin", req.url));
  }

  // If user is logged in and their profile is complete, redirect to /dashboard instead of /profile
  if (userId && profileCompleted && req.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // If user is logged in but their profile is not complete, redirect to /profile
  if (userId && !profileCompleted && req.nextUrl.pathname !== "/profile") {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/profile"],
};
