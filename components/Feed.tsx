import { Post } from "@/lib/types";

const Feed = async () => {
	const res = await fetch("http://localhost:3000/api/post");
	const data: Post[] = await res.json();
	console.log(data, "THIS IS DATA");
	return <div className="container"></div>;
};

export default Feed;
