"use client";
import { FaRegHeart, FaRegComment } from "react-icons/fa";
import { type Post } from "@/lib/types";
import Image from "next/image";

const PostCard = ({ creator, img, caption, _id }: Post) => {
	return (
		<div
			key={_id}
			className="lg:w-fit flex flex-col bg-secondary/30 lg:container  px-4 w-[90vw] lg:items-start items-start md:items-center py-8 rounded-lg "
		>
			<Image
				src={img}
				className="rounded-lg h-[75vh] md:w-[350%] w-[225%] object-cover"
				height={800}
				width={800}
				alt="post"
			/>
			<div className="flex items-center justify-center gap-8 mt-4">
				<button>
					<FaRegHeart />
				</button>
				<button>
					<FaRegComment />
				</button>
			</div>
			<div className="flex items-center gap-3 text-muted-foreground mt-4 mb-4">
				{creator?.img ? (
					<Image
						src={creator?.img}
						className="rounded-full"
						height={32}
						width={32}
						alt="post"
					/>
				) : (
					<div className=" h-8 w-8 bg-secondary flex items-center justify-center rounded-full">
						{creator.username[0].toUpperCase()}
					</div>
				)}
				<p>{creator?.username}</p>
			</div>
			<p>{caption}</p>
		</div>
	);
};

export default PostCard;
