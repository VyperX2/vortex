import { connectToDB } from "@/lib/database";
import Post from "@/models/Post";
import User from "@/models/User";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const GET = async (request: Request, { params }: Params) => {
	try {
		await connectToDB();
		const currentUser = await User.findOne({ _id: params.id });
		const userPosts = await Post.find({ creator: params.id });

		const responseData = {
			user: currentUser,
			posts: userPosts,
		};
		if (!responseData) {
			return new Response("NO DATA AVAILABLE", { status: 404 });
		}
		return new Response(JSON.stringify(responseData), { status: 200 });
	} catch (error) {
		console.log(error);
	}
};

export const PATCH = async (request: Request, { params }: Params) => {
	const { userId, following } = await request.json();
	const creator = await User.findOne({ _id: params.id });
	const currentUser = await User.findOne({ _id: userId });
	const sameCreator = params.id === userId;
	await connectToDB();
	try {
		if (following) {
			if (!creator) {
				return new Response("Invalid User", { status: 400 });
			}
			if (sameCreator) {
				return new Response(JSON.stringify(creator), { status: 200 });
			}

			if (creator?.followers.length === 0) {
				creator.followers = [userId];
				currentUser.following = creator._id;
			} else {
				const isFollowed = creator.followers.find(
					(follower: any) => follower._id.toString() === userId
				);

				const isFollowing = currentUser.following.find(
					(follower: any) => follower._id.toString() === userId
				);

				if (isFollowed !== undefined) {
					return new Response(JSON.stringify(creator), { status: 200 });
				} else {
					creator.followers.push(userId);
				}
				if (isFollowing !== undefined) {
					return new Response(JSON.stringify(creator), { status: 200 });
				}

				if (isFollowing !== undefined) {
					return new Response(JSON.stringify(currentUser), { status: 200 });
				} else {
					currentUser.following.push(creator._id);
				}
			}

			await creator.save();
			await currentUser.save();
			return new Response(JSON.stringify(creator), { status: 200 });
		} else {
			if (!creator) {
				return new Response("Invalid input", { status: 400 });
			}
			const filteredArray = creator.followers.filter(
				(p: any) => p._id.toString() !== userId
			);
			const filteredArrayTwo = creator.followers.filter(
				(p: any) => p._id.toString() !== userId
			);
			creator.followers = filteredArray;
			currentUser.following = filteredArrayTwo;
			await currentUser.save();
			await creator.save();
			return new Response(JSON.stringify(creator), { status: 200 });
		}
	} catch (error) {
		console.log(error);
	}
};
