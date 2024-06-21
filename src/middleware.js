import { NextResponse } from "next/server";

export async function middleware(req) {
  const userId = req.cookies.get("id");
  const userProfile = req.cookies.get("profile");
  const isProfileCompleted = req.cookies.get("profileCompleted");

  // Check if user is logged in
  const isLoggedIn = userId && userProfile;
  // Routes
  const signInRoute = "/Signin";
  const signUpRoute = "/Signup";
  const profileRoute = "/profile";
  const userProfileRoute = "/UserProfile";
  const findDoctorsRoute = "/FindDoctors/";

  const { pathname } = req.nextUrl;

  // Redirect logged-out users trying to access protected routes
  if (!isLoggedIn) {
    if (
      pathname.startsWith(findDoctorsRoute) ||
      pathname.startsWith(profileRoute) ||
      pathname.startsWith(userProfileRoute)
    ) {
      return NextResponse.redirect(new URL(signInRoute, req.url));
    }
  } else {
    // Redirect logged-in users trying to access signin or signup pages
    if (pathname === signInRoute || pathname === signUpRoute) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (pathname == userProfileRoute && isProfileCompleted.value === "false") {
      return NextResponse.redirect(new URL(profileRoute, req.url));
    }
    if (isProfileCompleted.value === "false" && pathname.startsWith(findDoctorsRoute)) {
      // Redirect to profile completion if profile is not completed
      return NextResponse.redirect(new URL(profileRoute, req.url));
    }

    // Redirect from profile page if profile is completed
    if (isProfileCompleted.value === "true" && pathname.startsWith(profileRoute)) {
      return NextResponse.redirect(new URL(findDoctorsRoute, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/FindDoctors/:id*", "/Signin", "/Signup", "/profile", "/UserProfile"],
};
