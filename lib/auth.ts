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
			try {
				await connectToDB();
				const user = await User.findOne({ email: profile?.email });
				console.log(profile?.name);
				console.log(profile);

				if (!user) {
					console.log("Creating New User");

					const newUser = new User({
						username: profile?.name,
						email: profile?.email,
						img: profile?.image,
					});

					await newUser.save();
				}

				console.log("User Exists");
				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		},
	},
});
