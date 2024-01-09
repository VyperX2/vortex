import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = () => {
	return (
		<Link href={`/post/1`}>
			<Image
				src="https://picsum.photos/200/300"
				className="rounded-lg overflow-hidden 2xl:w-72 lg:w-52 md:w-52 w-72"
        height={300}
        width={200}
				alt="post"
			/>
		</Link>
	);
};

export default Post;
