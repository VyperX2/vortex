import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDB } from "./database";
import User from "@/models/User";

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
		async signIn({ user, account, profile }) {
			await connectToDB();
			try {
				const user = await User.findOne({ email: profile?.email });

				if (!user) {
					const newUser = new User({
						email: profile?.email,
						username: profile?.name,
						img: profile?.picture,
					});

					await newUser.save();
				}
				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		},
	},
});
