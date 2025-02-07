import { authMiddleware } from '@clerk/nextjs';

const myMiddleware = authMiddleware({
  publicRoutes: [
    '/',
    '/about',
    '/pricing',
    '/chatBox',
    '/api/webhooks/users',
    '/works',
    '/api/checkout',
    '/api/uploadthing',
    '/api/delegatedjobs',
    '/api/deletejobs',
    '/api/profile',
    '/api/savedjobs',
    "/api/testimonials",
    '/Wall',
    '/api/profile',
    '/api/ProfileForm',
    '/career',
    '/onboarding',
    '/sitemap.xml',
    '/robots.txt',
    '/Home/',
    '/Job-Data',

  ],
  ignoredRoutes: [
    '/api/uploadthing',
    '/api/webhooks/stripe',
    '/api/webhooks/users',
  ],
});

export default myMiddleware;

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
