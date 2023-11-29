import { NextResponse } from "next/server";

export const middleware = (request) => {
  // Verifikasi token
  const cookie = request.cookies.get("token")?.value;
  console.log(cookie);

  if (cookie) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
};

export const config = {
  matcher: ["/dashboard/:path*", "/"],
};
