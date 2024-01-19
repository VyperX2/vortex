import { Post } from "@/lib/types";
import PostCard from "./PostCard";

const Feed = async () => {
	const res = await fetch("http://localhost:3000/api/post", {
		cache: "no-store",
	});
	const data: Post[] = await res.json();

	return (
		<div className="container  grid grid-cols-1 place-items-center ">
			{Array.isArray(data) && data.length > 0 ? (
				data.map((post) => <PostCard {...post} />)
			) : (
				<p>No posts available</p>
			)}
		</div>
	);
};

export default Feed;
