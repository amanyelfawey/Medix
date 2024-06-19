// // middleware.js

// import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const userId = req.cookies.get("id");
//   const userProfile = req.cookies.get("profile");

//   // Check if user is logged in
//   const isLoggedIn = userId && userProfile;

//   // Routes
//   const signInRoute = "/Signin";
//   const signUpRoute = "/Signup";

// <<<<<<< HEAD
// <<<<<<< HEAD
//   // Prevent logged-in users from accessing sign-in or sign-up pages
//   if (isLoggedIn && authRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (!userId || !userProfile) {
//     return NextResponse.redirect(new URL("/Signin", req.url));
//   }

//   const profileCompleted = req.cookies.get("profileCompleted").value === "true" ? true : false;

//   // Check if the request is for a protected route
//   const protectedRoutes = ["/FindDoctors", "/profile"];
//   const isProtectedRoute = protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route));

//   // If trying to access any protected route and the user is not logged in, redirect to /Signin
//   if (isProtectedRoute && !userId) {
//     console.log("User is not logged in, redirecting to /Signin");
//     return NextResponse.redirect(new URL("/Signin", req.url));
//   }

//   // If user is logged in and their profile is complete, redirect to /dashboard instead of /profile
//   if (userId && profileCompleted && req.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/FindDoctors", req.url));
//   }

//   // If user is logged in but their profile is not complete, redirect to /profile
//   if (userId && !profileCompleted && req.nextUrl.pathname !== "/profile") {
//     return NextResponse.redirect(new URL("/profile", req.url));
// =======
//   const { pathname } = req.nextUrl;

//   // Redirect logged-out users trying to access protected routes
//   if (
//     !isLoggedIn &&
//     pathname !== signInRoute &&
//     pathname !== signUpRoute &&
//     pathname.startsWith("/FindDoctors/")
//   ) {
//     return NextResponse.redirect(new URL(signInRoute, req.url));
//   }

//   // Redirect logged-in users trying to access signin or signup pages
//   if (isLoggedIn && (pathname === signInRoute || pathname === signUpRoute)) {
// <<<<<<< HEAD
//     return NextResponse.redirect(new URL(dashboardRoute, req.url));
// >>>>>>> 105a090e7f04c7715980dea24c4d2fb5945c9791
// =======
//     return NextResponse.redirect(new URL("/", req.url));
// >>>>>>> 91e7dc39be88816f2ae5fbf3cfd28a214524695e
//   }
// =======
//   const { pathname } = req.nextUrl;

//   // Redirect logged-out users trying to access protected routes

//   if (
//     !isLoggedIn &&
//     pathname !== signInRoute &&
//     pathname !== signUpRoute &&
//     pathname.startsWith("/FindDoctors/")
//   ) {
//     return NextResponse.redirect(new URL(signInRoute, req.url));
//   }

//   // Redirect logged-in users trying to access signin or signup pages
//   if (isLoggedIn && (pathname === signInRoute || pathname === signUpRoute)) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }
// >>>>>>> 5b9077d4754daa4b63a3d57295b7dfbc6f115c51

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/FindDoctors/:id*", "/Signin", "/Signup"],
// };

// import { NextResponse } from 'next/server';

// const signInRoute = "/Signin";
// const signUpRoute = "/Signup";
// const dashboardRoute = "/dashboard"; // Assuming you have a dashboard route

// export function middleware(req) {
//     const { pathname } = req.nextUrl;
//     const isLoggedIn = req.cookies.get('token'); // Assuming you are using cookies for authentication
//     const authRoutes = [signInRoute, signUpRoute];

//     // Prevent logged-in users from accessing sign-in or sign-up pages
//     if (isLoggedIn && authRoutes.some((route) => pathname.startsWith(route))) {
//         return NextResponse.redirect(new URL(dashboardRoute, req.url));
//     }

//     // If user is logged in but their profile is not complete, redirect to /profile
//     const profileCompleted = req.cookies.get('profileCompleted'); // Assuming you are using cookies for profile status
//     const userId = req.cookies.get('userId'); // Assuming you are using cookies for user ID
//     if (userId && !profileCompleted && pathname !== "/profile") {
//         return NextResponse.redirect(new URL("/profile", req.url));
//     }

//     // Redirect logged-out users trying to access protected routes
//     const protectedRoutes = ["/FindDoctors/:id*"]; // Add more routes as needed
//     if (!isLoggedIn && protectedRoutes.some((route) => pathname.startsWith(route))) {
//         return NextResponse.redirect(new URL(signInRoute, req.url));
//     }

//     return NextResponse.next();
// }

// export const config = {
//     matcher: ["/FindDoctors/:id*", "/Signin", "/Signup"],
// };

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