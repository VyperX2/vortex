import { connectToDB } from "@/lib/database";
import User from "@/models/User";
import { ObjectId } from "mongoose";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
export const dynamic = 'force-dynamic'
export const GET = async (request: Request, { params }: Params) => {
	try {
		await connectToDB();
		const currentUser = await User.findOne({ _id: params.id });
		if (!currentUser) {
			return new Response("Invalid user id", { status: 400 });
		}

		const followersPromises = currentUser.followers.map(
			async (follower: ObjectId) => {
				const user = await User.findOne({ _id: follower });
				if (!user) {
					return "NO user available";
				}
				return user;
			}
		);

		const followers = await Promise.all(followersPromises);
		return new Response(JSON.stringify(followers), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response("Failed to get Followers", { status: 500 });
	}
};
