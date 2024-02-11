import { connectToDB } from "@/lib/database";
import User from "@/models/User";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

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

				const isFollowing = creator.followers.find(
					(following: any) => following._id.toString() === userId
				);

				if (isFollowed !== undefined) {
					return new Response(JSON.stringify(creator), { status: 200 });
				}
				if (isFollowing !== undefined) {
					return new Response(JSON.stringify(creator), { status: 200 });
				}

				creator.followers.push(userId);
				currentUser.following.push(userId);
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
