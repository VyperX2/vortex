import Post from "@/models/Post";
import { connectToDB } from "@/lib/database";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const PATCH = async (request: Request, { params }: Params) => {
	const { likes } = await request.json();

	try {
		await connectToDB();
		const existingPost = await Post.findById(params.id);

		if (!existingPost) {
			return new Response("NO Post found", { status: 404 });
		}

		existingPost.likes += likes;

		await existingPost.save();

		return new Response(JSON.stringify(existingPost), { status: 200 });
	} catch (error) {
		return new Response("Failed to edit!", { status: 500 });
	}
};
