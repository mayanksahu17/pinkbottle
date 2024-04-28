import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes:["/", "/about", "/pricing", "/chatBox", "/api/webhooks/users", "/works", "/api/checkout", '/api/uploadthing',],
  ignoredRoutes:['/api/uploadthing','/api/webhooks/stripe']
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};