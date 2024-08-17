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
    '/api/savedjobs',
    '/Wall',
    '/career',
    '/onboarding',
    '/sitemap.xml',
    '/robots.txt',
    '/Home/',
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
