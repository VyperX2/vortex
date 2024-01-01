import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	providers: [
		Google({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		async signIn(user, account, profile) {
			console.log(user, account, profile);
			return true;
		},
	},
});
