import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = () => {
	return (
		<Link href={`/post/1`}>
			<Image
				src="https://picsum.photos/200/300"
				className="rounded-lg overflow-hidden"
        height={300}
        width={200}
				alt="post"
			/>
		</Link>
	);
};

export default Post;
