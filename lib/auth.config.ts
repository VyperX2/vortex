export const authConfig = {
	pages: {
		signIn: "/login",
	},
	providers: [],
	callbacks: {
		async jwt({ token, user }: any) {
			if (user) {
				console.log(user.username);
				token.id = user.id;
				token.username = user.username;
			}
			return token;
		},
		async session({ session, token }: any) {
			if (token) {
				session.user.id = token.id;
				session.user.username = token.username;
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
