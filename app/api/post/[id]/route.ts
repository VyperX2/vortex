import Post from "@/models/Post";
import { connectToDB } from "@/lib/database";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import User from "@/models/User";
import { Post as PostType } from "@/lib/types";
import { User as UserType } from "@/lib/types";

export const PATCH = async (request: Request, { params }: Params) => {
	const { userId } = await request.json();
	console.log(params.id);
	// console.log(userId);
	try {
		await connectToDB();
		const user: UserType | null = await User.findOne({ _id: userId }); // user who is liking the post
		const post = await Post.findOne({ _id: params.id }); // post which is being liked

		// If no likes
		if (post.likes.length == 0) {
			post.likes = [...post.likes, userId];

			await post.save();
		} else {
			const isLiked = post?.likes.find(
				(like: any) => like._id.toString() === userId
			);
			if (isLiked !== undefined) {
				return new Response("Not modified", { status: 304 });
			} else {
				post.likes = [...post.likes, userId];
				await post.save();
				return new Response("Post liked successfully", { status: 200 });
			}
		}
	} catch (error) {
		return new Response("Failed to Like!", { status: 500 });
	}
};
