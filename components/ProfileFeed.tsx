import { Post } from "@/lib/types";
import React from "react";
import ProfileCard from "./ProfileCard";

const ProfileFeed = ({ posts }: { posts: Post[] }) => {
	return (
		<div className="md:ml-4 mt-8 grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-8">
			{Array.isArray(posts) && posts.length > 0 ? (
				posts.map((post) => <ProfileCard key={post._id} {...post} />)
			) : (
				<p>User has no posts</p>
			)}
		</div>
	);
};

export default ProfileFeed;
