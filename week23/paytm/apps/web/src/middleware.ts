
import withAuth from "next-auth/middleware";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api/ routes
     * 2. /_next/ (Next.js internals)
     * 3. /_proxy/ (proxies for third-party services)
     * 4. Metadata files: favicon.ico, sitemap.xml, robots.txt, manifest.webmanifest, .well-known
     * 5. Root (/) and /about
     */
    "/((?!api/|_next/|_proxy/|favicon.ico|sitemap.xml|robots.txt|manifest.webmanifest|.well-known|^$|^/$|about$).*)",
  ],
};

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
    // If no token, no entry.
  },
});
