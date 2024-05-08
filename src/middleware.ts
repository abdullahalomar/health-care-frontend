import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const authRoutes = ["/login", "/register"];
const commonPrivateRoutes = ["/dashboard", "/dashboard/change-password"];
const roleBasePrivateRoutes = {
  PATIENT: [/^\/dashboard\/patient/],
  DOCTOR: [/^\/dashboard\/doctor/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/super-admin/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;

  if (!accessToken) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (accessToken && commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let decodeData = null;

  if (accessToken) {
    decodeData = jwtDecode(accessToken) as any;
  }

  const role = decodeData?.role;

  //   if (role === "ADMIN" && pathname.startsWith("/dashboard/admin")) {
  //     return NextResponse.next();
  //   }

  type Role = keyof typeof roleBasePrivateRoutes;

  if (role && roleBasePrivateRoutes[role as Role]) {
    const routes = roleBasePrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
