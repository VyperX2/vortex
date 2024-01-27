import User from "@/models/User";
import { connectToDB } from "./database";

const fetchMongoUserByGoogleId = async (identifier: string) => {
	try {
		await connectToDB();
		const user = await User.findOne({ provider: identifier });

		if (!user) {
			console.log("User doesnt exist");
			return null;
		}
		console.log(user);

		return user;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const authConfig = {
	pages: {
		signIn: "/login",
	},
	providers: [],
	callbacks: {
		async jwt({ token, user }: any) {
			if (user) {
				// If the user logs in with Google, fetch MongoDB user information
				const mongoUser = await fetchMongoUserByGoogleId(user.id);

				if (mongoUser) {
					// Use the MongoDB _id
					token.id = mongoUser._id;
					token.username = mongoUser.username;
				} else {
					// For other providers, use the existing user.id
					token.id = user.id;
					token.username = user.username;
				}
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
