"use client";
import { useEffect, useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import { Post, User } from "@/lib/types";
import { Skeleton } from "./ui/skeleton";

const SavedFeed = ({ params }: { params: { id: string } }) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchPosts = async () => {
			console.log("ABOUT TO FETCH");
			console.log(params.id);
			const userResponse = await fetch(
				`https://vortex-neon.vercel.app/api/profile/${params.id}`,
				{
					cache: "no-store",
					method: "GET",
				}
			);
			const userData = await userResponse.json();
			const { user }: { user: User } = userData;

			const postPromises = user.saved.map(async (postId) => {
				const postResponse = await fetch(
					`https://vortex-neon.vercel.app/api/post/${postId}`,
					{
						cache: "no-store",
					}
				);

				return postResponse.json();
			});

			const postsData = await Promise.all(postPromises);
			setPosts(postsData);
			setIsLoading(false);
		};

		fetchPosts();
	}, [params.id]);

	return (
		<>
			{isLoading ? (
				<div className="flex flex-col items-center">
					<div className="md:ml-4 mt-8 grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 ">
						<Skeleton className="w-96 h-[75vh]" />
						<Skeleton className="w-96 h-[75vh]" />
						<Skeleton className="w-96 h-[75vh]" />
					</div>
				</div>
			) : (
				<div className="md:ml-4 mt-8 grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8">
					{Array.isArray(posts) && posts.length > 0 ? (
						posts.map((post) => <ProfileCard key={post._id} {...post} />)
					) : (
						<p>User has no saved posts</p>
					)}
				</div>
			)}
		</>
	);
};

export default SavedFeed;
