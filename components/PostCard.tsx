"use client";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { type Post } from "@/lib/types";
import Image from "next/image";
import { useState, useEffect, cache } from "react";

const PostCard = ({ creator, img, caption, _id, likes }: Post) => {
	const [clientLikes, setClientLikes] = useState<number>(0);
	const [isLiked, setIsLiked] = useState<boolean>(false);

	useEffect(() => {
		async function updateLikes(likes: number) {
			try {
				const response = await fetch(`/api/post/${_id}`, {
					method: "PATCH",
					body: JSON.stringify({
						likes: likes,
					}),
				});
			} catch (error) {
				console.log(error);
			}
		}
		async function fetchLatestLikes() {
			try {
				const response = await fetch(`/api/post/${_id}`);
				const data = await response.json();
				setClientLikes(data.likes);
			} catch (error) {
				console.log(error);
			}
		}

		fetchLatestLikes();
		updateLikes(clientLikes);
	}, [clientLikes]);
	return (
		<div
			key={_id}
			className="lg:w-fit flex flex-col bg-secondary/30 lg:container  px-4 w-[90vw] lg:items-start items-start md:items-center py-8 rounded-lg "
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
					onClick={() => {
						setIsLiked((prev) => !prev);
						if (!isLiked) {
							setClientLikes((prev) => prev + 1);
						} else {
							setClientLikes((prev) => prev - 1);
						}
					}}
					className="flex flex-col items-center outline-none"
				>
					{!isLiked ? (
						<FaRegHeart />
					) : (
						<FaHeart style={{ color: "red", opacity: "0.8" }} />
					)}

					{likes}
				</button>
				<button>
					<FaRegComment />
				</button>
			</div>
		</div>
	);
};

export default PostCard;
