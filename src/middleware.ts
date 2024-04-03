import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes:["/", "/about", "/pricing", "/chatBox", "/api/webhooks/users", "/works", "/api/JobsDisplay", "/api/uploadResume"],
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};