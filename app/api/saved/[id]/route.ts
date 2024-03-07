import { connectToDB } from "@/lib/database";
import User from "@/models/User";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const GET = async (request: Request, { params }: Params) => {
	try {
		await connectToDB();
		const currentUser = await User.findOne({ _id: params.id });

		if (!currentUser) {
			return new Response("NO DATA AVAILABLE", { status: 404 });
		}

		const savedPosts = await Promise.all(
			currentUser.saved.map(async (postId: string) => {
				const postResponse = await fetch(
					`https://vortex-neon.vercel.app/api/posts/${postId}`
				);
				if (postResponse.ok) {
					return postResponse.json();
				}
				return null; // Handle error or missing posts as needed
			})
		);
		console.log(savedPosts);
		return new Response(JSON.stringify(savedPosts), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response("Internal Server Error", { status: 500 });
	}
};
