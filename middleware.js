import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// import { auth } from "./auth";

const protectedRoutes = ["/dashboard", "/enterprises", "/funds", "/investments", "/listings", "/market", "/profile", "/programs"];

export default async function middleware(request) {
  
  /*const session = await auth();
  
  const { pathname} = request.nextUrl;
  
  const isProtected = protectedRoutes.some();
  
  if (isProtected && !session) {
    
  }
  
  return NextResponse.next();
  */
}