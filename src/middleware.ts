import { authMiddleware } from "@clerk/nextjs";
import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

const myMiddleware = authMiddleware({
  publicRoutes: ["/", "/about", "/pricing", "/chatBox", "/api/webhooks/users", "/works", "/api/checkout", '/api/uploadthing', '/Wall', "/career", "/sitemap.xml", "/robots.txt"],
  ignoredRoutes: ['/api/uploadthing', '/api/webhooks/stripe', '/api/webhooks/users']
});

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log('Request URL:', req.url);

  // Convert headers to a plain object
  const headers: { [key: string]: string } = {};
  req.headers.forEach((value, key) => {
    headers[key] = value;
  });
  console.log('Request Headers:', JSON.stringify(headers, null, 2));

  const response = await myMiddleware(req, ev);

  if (response) {
    console.log('Response Status:', response.status);
    const responseHeaders: { [key: string]: string } = {};
    response.headers.forEach((value, key) => {
      responseHeaders[key] = value;
    });
    console.log('Response Headers:', JSON.stringify(responseHeaders, null, 2));
  }

  return response;
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
