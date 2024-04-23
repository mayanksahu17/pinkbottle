import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes:["/", "/about", "/pricing", "/chatBox", "/api/webhooks/users", "/works", "/api/checkout", "/api/updatepaymentstatus"],
  debug : true
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};