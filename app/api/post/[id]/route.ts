import Post from "@/models/Post";
import { connectToDB } from "@/lib/database";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import User from "@/models/User";
import { User as UserType } from "@/lib/types";

export const PATCH = async (request: Request, { params }: Params) => {
	try {
		const { userId } = await request.json();
		console.log(params.id);

		// Validate input
		if (!userId) {
			return new Response("Invalid input", { status: 400 });
		}

		await connectToDB();

		const user: UserType | null = await User.findOne({ _id: userId });
		const post = await Post.findOne({ _id: params.id });

		// If no likes
		if (post.likes.length === 0) {
			post.likes = [userId];
		} else {
			const isLiked = post.likes.find(
				(like: any) => like._id.toString() === userId
			);
			if (isLiked !== undefined) {
				return new Response(JSON.stringify(post), { status: 200 });
			}
			post.likes.push(userId);
		}

		await post.save();
		return new Response(JSON.stringify(post), { status: 200 });
	} catch (error) {
		console.error(error);
		return new Response("Failed to like the post", { status: 500 });
	}
};