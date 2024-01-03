import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./database";
import User from "@/models/User";
import { authConfig } from "./auth.config";
const bcrypt = require("bcrypt");

const login = async (credentials: any) => {
	try {
		await connectToDB();
		const user: any = await User.findOne({ username: credentials.username });

		if (!user) {
			throw new Error("User does'nt exist");
		}

		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password
		);

		if (!isPasswordCorrect) {
			throw new Error("Wrong Credentials");
		}

		return user;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	providers: [
		Google({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = await login(credentials);
					return user;
				} catch (error) {
					return null;
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			await connectToDB();
			try {
				if (profile) {
					const user = await User.findOne({ email: profile.email });

					if (!user) {
						const newUser = new User({
							email: profile.email,
							username: profile.name,
							img: profile.picture,
						});

						await newUser.save();
					}
				}
				return true;
			} catch (error) {
				console.log(error);
				return false;
			}
		},
		...authConfig.callbacks,
	},
});
