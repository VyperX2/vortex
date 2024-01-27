import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDB } from "./database";
import User from "@/models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
const bcrypt = require("bcrypt");

const login = async (credentials: Partial<Record<string, unknown>>) => {
	try {
		await connectToDB();
		const user = await User.findOne({ username: credentials.username });

		if (!user) {
			throw new Error("User Does not exist");
		}

		const isPasswordCorrect = await bcrypt.compare(
			credentials.password,
			user.password
		);

		if (!isPasswordCorrect) {
			throw new Error("Invalid Password");
		}

		return user;
	} catch (error) {
		console.log(error);
		throw new Error("Failed To login");
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
			try {
				await connectToDB();
				// console.log({ user, account, profile });

				if (account?.provider === "google") {
					const IsUser = await User.findOne({ email: profile?.email });

					if (!IsUser) {
						console.log("Creating New User");

						const newUser = new User({
							username: profile?.name,
							email: profile?.email,
							img: profile?.picture,
							provider: user.id,
						});

						await newUser.save();
						console.log("User Created");
					}

					console.log("User Exists");
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
