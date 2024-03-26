import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes:["/", "/about", "/pricing", "/chatBox", "/api/webhooks/users", "/api/JobsDisplay/TestFolder/:userId"],
  debug: true
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};