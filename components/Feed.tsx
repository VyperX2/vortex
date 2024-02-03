import { Post } from "@/lib/types";
import PostCard from "./PostCard";
import { auth } from "@/lib/auth";

const Feed = async () => {
	const res = await fetch("http://localhost:3000/api/post", {
		cache: "no-store",
	});
	let isLoading = true;
	const data: Post[] = await res.json();
	isLoading = false;
	const session = await auth();

	return (
		<div className="container grid grid-cols-1 place-items-center gap-8">
			{Array.isArray(data) && data.length > 0 ? (
				data.map((post) => (
					<PostCard key={post._id} {...post} session={session} />
				))
			) : (
				<p>No posts available</p>
			)}
		</div>
	);
};

export default Feed;
