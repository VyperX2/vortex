import { connectToDB } from "@/lib/database";
import User from "@/models/User";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export const PATCH = async (request: Request, { params }: Params) => {
	const { saving, postId, userId } = await request.json();
	const creator = await User.findOne({ _id: userId });
	await connectToDB();
	try {
		if (saving) {
			if (!creator) {
				return new Response("Invalid User", { status: 400 });
			}

			if (creator?.saved.length === 0) {
				// If no posts are saved then simply add currentPost to saved array
				creator.saved = [postId];
			} else {
				const isSaved = creator.saved.find(
					(saved: any) => saved._id.toString() === postId
				);

				if (isSaved !== undefined) {
					return new Response(JSON.stringify(creator), { status: 200 });
				} else {
					creator.saved.push(postId);
				}
			}
			await creator.save();
			return new Response(JSON.stringify(creator), { status: 200 });
		} else {
			if (!creator) {
				return new Response("Invalid input", { status: 400 });
			}
			const filteredArray = creator.saved?.filter(
				(p: any) => p._id.toString() !== postId
			);

			creator.saved = filteredArray;
			await creator.save();
			return new Response(JSON.stringify(creator), { status: 200 });
		}
	} catch (error) {
		console.log(error);
	}
};
