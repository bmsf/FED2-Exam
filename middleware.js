export { default } from 'next-auth/middleware';

// export const config = { matcher: ['/account/:path*'] };
export const config = { matcher: ['/iamnew/:path*'] };

// import { withAuth } from 'next-auth/middleware';

// // middleware is applied to all routes, use conditionals to select

// export default withAuth(function middleware(req) {}, {
// 	callbacks: {
// 		authorized: ({ req, token }) => {
// 			if (req.nextUrl.pathname.startsWith('/account') && token === null) {
// 				return false;
// 			}
// 			return true;
// 		},
// 	},
// });
