"use client";
import { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import { Post, User } from "@/lib/types";

const SavedFeed = ({ params }: { params: { id: string } }) => {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const userResponse = await fetch(
				`http://localhost:3000/api/profile/${params.id}`,
				{
					cache: "no-store",
					method: "GET",
				}
			);
			const userData = await userResponse.json();
			const { user }: { user: User } = userData;

			const postPromises = user.saved.map(async (postId) => {
				const postResponse = await fetch(
					`http://localhost:3000/api/post/${postId}`,
					{
						cache: "no-store",
					}
				);

				return postResponse.json();
			});

			const postsData = await Promise.all(postPromises);
			setPosts(postsData);
		};

		fetchPosts();
	}, [params.id]);

	return (
		<div className="md:ml-4 mt-8 grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8">
			{Array.isArray(posts) && posts.length > 0 ? (
				posts.map((post) => <ProfileCard key={post._id} {...post} />)
			) : (
				<p>User has no saved posts</p>
			)}
		</div>
	);
};

export default SavedFeed;
