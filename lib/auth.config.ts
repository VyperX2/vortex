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

			// Allow access to the home page, login page, and register page regardless of the user's login status
			if (isOnHomePage || isOnLoginPage || isOnRegisterPage) {
				// If the user is logged in and tries to access the login or register page, redirect to the home page
				if (user && (isOnLoginPage || isOnRegisterPage)) {
					return Response.redirect(new URL("/", request.nextUrl));
				}
				return true;
			}

			// If the user is not on the home, login, or register page and is not logged in, deny access
			if (!user) {
				return false;
			}

			return true;
		},
	},
};
