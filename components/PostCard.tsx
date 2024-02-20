"use client";
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { type Post } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const PostCard = ({
	creator,
	img,
	caption,
	_id,
	likes,
	session,
	createdAt,
}: Post & { session: Session | null }) => {
	const [likeData, setLikeData] = useState<string[]>(likes);
	const [followerData, setFollowerData] = useState<string[]>(
		creator?.followers
	);
	const isLiked = likeData?.includes(session?.user?.id || "");
	const isFollowed = followerData?.includes(session?.user?.id || "");
	const timestamp = createdAt;
	const dateObject = new Date(timestamp);
	const day = dateObject.getDate();
	const month = dateObject.getMonth() + 1; // Month is zero-based, so add 1
	const year = dateObject.getFullYear();

	const formattedDate = `${day}-${month}-${year}`;

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
	async function updateFollowers(isFollowing: boolean) {
		try {
			const response = await fetch(`/api/profile/${creator._id}`, {
				method: "PATCH",
				body: JSON.stringify({
					userId: session?.user?.id,
					following: isFollowing,
				}),
			});
			const data = await response.json();
			setFollowerData(data.followers);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div
			key={_id}
			className="lg:w-fit flex flex-col bg-secondary/20 lg:container  px-4 w-[90vw] lg:items-start items-start md:items-center py-8 rounded-lg border border-secondary/30 overflow-hidden"
		>
			<div className="flex items-center justify-between w-full  text-muted-foreground mt-4 mb-4">
				<div className="flex md:flex-row flex-col md:items-center gap-3">
					<Link
						className="flex items-center gap-3"
						href={`/profile/${creator._id}`}
					>
						<Avatar className="h-10 w-10">
							<AvatarImage src={creator.img} />
							<AvatarFallback>
								{creator?.username[0].toUpperCase()}
							</AvatarFallback>
						</Avatar>
						<p className="text-foreground text-lg font-semibold block md:hidden">
							{creator?.username}
						</p>
					</Link>

					<p className="text-foreground text-lg font-semibold hidden md:block">
						{creator?.username}
					</p>
					<div className="md:hidden flex flex-col gap-2">
						<Button
							onClick={() =>
								!isFollowed ? updateFollowers(true) : updateFollowers(false)
							}
							variant="outline"
							className="h-8"
						>
							{isFollowed ? "Unfollow" : "Follow"} {followerData?.length}
						</Button>
						<p>{formattedDate}</p>
					</div>
					<Button
						onClick={() =>
							!isFollowed ? updateFollowers(true) : updateFollowers(false)
						}
						variant="outline"
						className=" hidden md:block "
					>
						{isFollowed ? "Unfollow" : "Follow"} {followerData?.length}
					</Button>
					<p className="hidden md:block">{formattedDate}</p>
				</div>
			</div>
			<p className=" mb-4 text-muted-foreground ">{caption}</p>
			<Link href={`/post/${_id}`}>
				<Image
					src={img}
					className="rounded-lg h-[75vh] md:w-[350%] w-[225%] object-cover"
					height={800}
					width={800}
					alt="post"
				/>
			</Link>
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
