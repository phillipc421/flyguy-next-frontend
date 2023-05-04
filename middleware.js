import { NextResponse } from "next/server";
import { getSession } from "@auth0/nextjs-auth0/edge";
import { verifyJwt } from "./utils";

export async function middleware(request) {
  console.log("middleware ran");
  const res = NextResponse.next();
  const verified = await verifyJwt(request, res, getSession);
  if (verified) return res;
  console.log(request.nextUrl.origin);
  return NextResponse.redirect(request.nextUrl.origin);
}

export const config = {
  matcher: "/admin/:path*",
};
