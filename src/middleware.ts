import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes:["/", "/about", "/pricing", "/chatBox", "/api/webhooks/users", "/works", "/api/checkout", '/api/uploadthing','/Wall', "/career"],
  ignoredRoutes:['/api/uploadthing','/api/webhooks/stripe', '/api/webhooks/users']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};