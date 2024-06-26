export const authConfig = {
	pages: {
		signIn: "/login",
		newUser: "/register",
	},
	providers: [],
	callbacks: {
		async jwt({ token, user }: any) {
			if (user) {
				console.log(user, token);
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
			const isOnRegisterPage =
				request.nextUrl?.pathname.startsWith("/register");
			const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
			const isOnHomePage = request.nextUrl?.pathname.startsWith("/");

			if (isOnRegisterPage) {
				return true;
			}

			if (isOnHomePage && !user) {
				return false;
			}

			if ((isOnLoginPage || isOnRegisterPage) && user) {
				return Response.redirect(new URL("/", request.nextUrl));
			}

			return true;
		},
	},
};
