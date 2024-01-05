import Link from "next/link";
import React from "react";

const Post = () => {
	return (
		<Link href={`/post/1`}>
			<img
				src="https://picsum.photos/200/300"
				className="rounded-lg overflow-hidden"
				alt="post"
			/>
		</Link>
	);
};

export default Post;
