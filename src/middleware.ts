import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const matchLegacy = pathname.match(/^\/match\/(.+)$/);
  if (matchLegacy) {
    const url = request.nextUrl.clone();
    url.pathname = `/invite/match/${matchLegacy[1]}`;
    return NextResponse.redirect(url, 302);
  }

  const groupLegacy = pathname.match(/^\/group\/(.+)$/);
  if (groupLegacy) {
    const url = request.nextUrl.clone();
    url.pathname = `/invite/group/${groupLegacy[1]}`;
    return NextResponse.redirect(url, 302);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/match/:path*", "/group/:path*"],
};
