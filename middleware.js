import { NextResponse } from "next/server";
import { getSession, getAccessToken } from "@auth0/nextjs-auth0/edge";

export async function middleware(request) {
  console.log("middleware ran");
  const res = NextResponse.next();
  const { accessToken } = await getSession(request, res);
  const response = await fetch("http://localhost:3001/api/admin/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ accessToken }),
  });
  const data = await response.json();
  if (data.authorized) return res;
  console.log(request.nextUrl.origin);
  return NextResponse.redirect(request.nextUrl.origin);
}

export const config = {
  matcher: "/admin/:path*",
};
