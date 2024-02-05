import { connectToDB } from "@/lib/database";
import { User as UserType } from "@/lib/types";
import User from "@/models/User";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const PATCH = async (request: Request, { params }: Params) => {
	const { userId, following } = await request.json();
	const creator = await User.findOne({ _id: params.id });
	const sameCreator = params.id === userId;
	await connectToDB();
	console.log(sameCreator);
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
			} else {
				const isFollowed = creator.followers.find(
					(follower: any) => follower._id.toString() === userId
				);

				if (isFollowed !== undefined) {
					return new Response(JSON.stringify(creator), { status: 200 });
				}

				creator.followers.push(userId);
			}

			await creator.save();
			return new Response(JSON.stringify(creator), { status: 200 });
		} else {
			if (!creator) {
				return new Response("Invalid input", { status: 400 });
			}
			const filteredArray = creator.followers.filter(
				(p: any) => p._id.toString() !== userId
			);
			creator.followers = filteredArray;
			await creator.save();
			return new Response(JSON.stringify(creator), { status: 200 });
		}
	} catch (error) {
		console.log(error);
	}
};
