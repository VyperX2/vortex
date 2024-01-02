interface Token {
	email: string;
	id: string;
}

interface Session {
	user: {
		name: string;
		email: string;
		image: string;
		id: string;
	};
}

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	providers: [],
	callbacks: {
		async jwt({ token, user }: { token: Token; user: any }) {
			console.log(token);
			if (user) {
				token.id = user.id;
			}
			return token;
		},
		async session({ session, token }: { session: Session; token: Token }) {
			console.log(session);
			if (token) {
				session.user.id = token.id;
			}
			return session;
		},
		async authorized({ auth, request }: any) {
			const user = auth?.user;
			const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

			if (isOnLoginPage && user) {
				return Response.redirect(new URL("/", request.nextUrl));
			}

			return true;
		},
	},
};
