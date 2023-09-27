// export { default } from 'next-auth/middleware';

// export const config = { matcher: ['/account/:path*'] };

import { withAuth } from 'next-auth/middleware';

// middleware is applied to all routes, use conditionals to select

export default withAuth(function middleware(req) {}, {
	callbacks: {
		authorized: ({ req, token }) => {
			const pathname = req.nextUrl.pathname;

			// Check if the pathname starts with /venuemanager or /account
			if (
				(pathname.startsWith('/venuemanager') ||
					pathname.startsWith('/account')) &&
				token === null
			) {
				return false; // User is not authorized
			}

			return true; // User is authorized
		},
	},
});
