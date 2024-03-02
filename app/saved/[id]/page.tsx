import ProfileCard from "@/components/ProfileCard";
import { Post, User } from "@/lib/types";
import React from "react";

const SavedPage = async ({ params }: { params: { id: string } }) => {
	const response = await fetch(
		`http://localhost:3000/api/profile/${params.id}`,
		{
			cache: "no-store",
		}
	);
	const data = await response.json();
	const { user }: { user: User } = data;
	let savedPosts: Post[] | [] = [];

	user.saved.forEach(async (saved: string) => {
		const res = await fetch(`http://localhost:3000/api/post/${saved}`);
		const post: Post = await res.json();
		savedPosts = [...savedPosts, post];
	});
	return (
		<div className="md:ml-4 mt-8 grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8">
			{Array.isArray(savedPosts) && savedPosts.length > 0 ? (
				savedPosts.map((post) => <ProfileCard key={post._id} {...post} />)
			) : (
				<p>User has no saved posts</p>
			)}
		</div>
	);
};

export default SavedPage;
