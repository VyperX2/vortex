export const authConfig = {
	pages: {
		signIn: "/login",
	},
	providers: [],
	callbacks: {
		async jwt({ token, user } : any) {
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token } : any) {
			if (token) {
				session.user.id = token.id;
			}
			return session;
		},
		async authorized({ auth, request }: any) {
			const user = auth?.user;
			const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
			const isOnHomePage = request.nextUrl?.pathname.startsWith("/");

			if (isOnHomePage && !user) {
				return false;
			}

			if (isOnLoginPage && user) {
				return Response.redirect(new URL("/", request.nextUrl));
			}

			return true;
		},
	},
};
