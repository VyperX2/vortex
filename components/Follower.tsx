import { User } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

const Follower = async ({
	email,
	img,
	username,
	_id,
	creatorId,
}: User & { creatorId: string }) => {
	const response = await fetch(
		`http://localhost:3000/api/profile/${creatorId}`,
		{
			method: "GET",
			cache: "no-store",
		}
	);
	const data = await response.json();
	const { user } = data;
	const isFollowing = user.following.includes(_id);
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
			<Button className="ml-auto">
				{" "}
				{isFollowing ? "Following" : "Follow"}
			</Button>
		</div>
	);
};

export default Follower;
