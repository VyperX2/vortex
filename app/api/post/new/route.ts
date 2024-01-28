import Post from "@/models/Post";
import { connectToDB } from "@/lib/database";

export const POST = async (request: Request) => {
	const { userId, img, caption } = await request.json();

	try {
		await connectToDB();
		const newPost = new Post({
			creator: userId,
			img,
			caption,
		});
		await newPost.save();
		return new Response(JSON.stringify(newPost), { status: 201 });
	} catch (error) {
		console.log(error);
		return new Response("Failed to create a new post", { status: 500 });
	}
};
