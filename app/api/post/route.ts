import { connectToDB } from "@/lib/database";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
	try {
		await connectToDB();
		const posts = await Post.find().populate("creator").sort({ createdAt: -1 });

		if (posts.length > 0) {
			return NextResponse.json(posts, { status: 200 });
		} else {
			return NextResponse.json("No posts found", { status: 404 });
		}
	} catch (error) {
		console.error("Error fetching posts:", error);
		return NextResponse.json("Couldn't get Posts", { status: 500 });
	}
};
