"use client";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { type Post } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { Session } from "next-auth";

const PostCard = ({
	creator,
	img,
	caption,
	_id,
	likes,
	session,
}: Post & { session: Session | null }) => {
	const [likeData, setLikeData] = useState<string[]>(likes);
	const isLiked = likeData?.includes(session?.user?.id || "");
	async function updateLikes(isAdding: boolean) {
		try {
			const response = await fetch(`/api/post/${_id}`, {
				method: "PATCH",
				body: JSON.stringify({
					userId: session?.user?.id,
					adding: isAdding,
				}),
			});
			const data = await response.json();
			setLikeData(data.likes);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div
			key={_id}
			className="lg:w-fit flex flex-col bg-secondary/30 lg:container  px-4 w-[90vw] lg:items-start items-start md:items-center py-8 rounded-lg border border-secondary/30"
		>
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
				<p className="text-foreground text-lg font-semibold">
					{creator?.username}
				</p>
			</div>
			<p className=" mb-4 text-muted-foreground">{caption}</p>

			<Image
				src={img}
				className="rounded-lg h-[75vh] md:w-[350%] w-[225%] object-cover"
				height={800}
				width={800}
				alt="post"
			/>
			<div className="flex items-center justify-center gap-8 mt-4">
				<button
					onClick={() => (!isLiked ? updateLikes(true) : updateLikes(false))}
					className="flex flex-col items-center outline-none"
				>
					{!isLiked ? (
						<FaRegHeart />
					) : (
						<FaHeart style={{ color: "red", opacity: "0.8" }} />
					)}
					{likeData?.length}
				</button>
				<button>
					<FaRegComment />
				</button>
			</div>
		</div>
	);
};

export default PostCard;
