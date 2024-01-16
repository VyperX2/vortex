import { Post } from "@/lib/types";
import PostCard from "./PostCard";

const Feed = async () => {
	const res = await fetch("http://localhost:3000/api/post", {
		cache: "no-store",
	});
	const data: Post[] = await res.json();
	return (
		<div className="container border">
			{data.map((post) => (
				<PostCard {...post} />
			))}
		</div>
	);
};

export default Feed;
