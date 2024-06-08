import { authMiddleware } from "@clerk/nextjs";

const myMiddleware = authMiddleware({
  publicRoutes: ["/", "/about", "/pricing", "/chatBox", "/api/webhooks/users", "/works", "/api/checkout", '/api/uploadthing', '/Wall', "/career", "/sitemap.xml", "/robots.txt"],
  ignoredRoutes: ['/api/uploadthing', '/api/webhooks/stripe', '/api/webhooks/users']
});

export default myMiddleware;

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
