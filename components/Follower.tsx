"use client";
import { User } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";
import { Session } from "next-auth";
import { useEffect, useState } from "react";

const Follower = async ({
	email,
	img,
	username,
	_id,
	creatorId,
	session,
}: User & { creatorId: string; session: Session | null }) => {
	const [creator, setCreator] = useState<User | null>(null);
	const [followerData, setFollowerData] = useState<any>(creator?.followers); //temp any type
	const isFollowed = followerData?.includes(session?.user?.id || "");

	useEffect(() => {
		const getCreator = async () => {
			const response = await fetch(
				`http://localhost:3000/api/profile/${creatorId}`,
				{
					method: "GET",
				}
			);
			const data = await response.json();
			const { user } = data;
			setCreator(user);
		};
		getCreator();
	}, []);

	async function updateFollowers(isFollowing: boolean) {
		try {
			const response = await fetch(`/api/profile/${creator?._id}`, {
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
		<div className="py-3 px-2 transition-all rounded-md w-full flex items-center gap-2 hover:bg-secondary/25">
			<Link href={`/profile/${_id}`}>
				<Avatar className="h-12 w-12">
					<AvatarImage src={img} />
					<AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
				</Avatar>
			</Link>
			<div className="flex flex-col ">
				<p className="text-md font-semibold">{username}</p>
				<p className="text-sm text-muted-foreground">@{email?.split("@")[0]}</p>
			</div>
			<Button
				onClick={() =>
					!isFollowed ? updateFollowers(true) : updateFollowers(false)
				}
				className=" ml-auto "
			>
				{isFollowed ? "Unfollow" : "Follow"}
			</Button>
		</div>
	);
};

export default Follower;
