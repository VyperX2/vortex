"use client";
import { type Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const Post = ({ creator, img, caption, _id }: Post) => {
	console.log(img);
	return (
		<Link key={_id} className="w-fit flex-col" href={`/post/${_id}`}>
			<button className="border-none">
				<Image
					src={img}
					className="rounded-lg h-[75vh] md:w-[350%] w-[225%] object-cover"
					height={800}
					width={800}
					alt="post"
				/>
			</button>
			<div className="flex items-center text-muted-foreground">
				<Image
					src="https://picsum.photos/200/200"
					className="rounded-full"
					height={32}
					width={32}
					alt="post"
				/>
				<p>{creator?.username}</p>
			</div>
			<p>{caption}</p>
		</Link>
	);
};

export default Post;
