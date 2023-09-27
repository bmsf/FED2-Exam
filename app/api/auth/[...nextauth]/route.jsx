import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			secret: process.env.NEXTAUTH_SECRET,
			type: 'credentials',
			credentials: {},
			async authorize(credentials, req) {
				const { email, password } = credentials;
				const body = JSON.stringify({
					email: email,
					password: password,
				});
				try {
					const res = await fetch(
						'https://api.noroff.dev/api/v1/holidaze/auth/login',
						{
							method: 'POST',
							body: body,
							headers: {
								'Content-Type': 'application/json',
							},
						}
					);

					const user = await res.json();

					if (res.ok && user) {
						console.log(user);
						return user;
					} else {
						console.log(Error);
						// throw new Error('invalid credentials');
						return null;
					}
				} catch (error) {
					throw new Error('invalid credentials');
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) return { ...token, ...user };

			return token;
		},
		async session({ session, token }) {
			session = { ...session, ...token };
			return session;
		},
	},

	pages: {
		signIn: '/api/auth/login',
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
