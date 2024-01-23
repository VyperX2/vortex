"use client";
import { type Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ creator, img, caption, _id }: Post) => {
	console.log(creator);
	return (
		<Link
			key={_id}
			className="lg:w-fit flex flex-col bg-secondary/30 lg:container  px-4 w-[90vw] lg:items-start items-start md:items-center   py-8 rounded-lg "
			href={`/post/${_id}`}
		>
			<button className="border-none">
				<Image
					src={img}
					className="rounded-lg h-[75vh] md:w-[350%] w-[225%] object-cover"
					height={800}
					width={800}
					alt="post"
				/>
			</button>
			<div className="flex items-center gap-3 text-muted-foreground mt-4 mb-4">
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

export default PostCard;
