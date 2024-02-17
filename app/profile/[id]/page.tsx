import ProfileFeed from "@/components/ProfileFeed";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfilePage = async ({ params }: { params: { id: string } }) => {
	const response = await fetch(
		`http://localhost:3000/api/profile/${params.id}`,
		{ cache: "no-store" }
	);
	const data = await response.json();
	const { user, posts } = data;

	return (
		<>
			<div className="flex justify-evenly  mt-9 items-center overflow-hidden">
				<div className="flex items-center gap-2">
					<Avatar className="h-12 w-12">
						<AvatarImage src={user.img} />
						<AvatarFallback>{user?.username[0].toUpperCase()}</AvatarFallback>
					</Avatar>
					<p className="font-semibold">{user?.username}</p>
				</div>

				<div className="flex justify-center items-center mr-[80px] ml-[60px]">
					<h1 className="mr-5 flex flex-col items-center">
						<b>{posts.length}</b>{" "}
						<span className="text-muted-foreground">Posts</span>
					</h1>
					<Link
						href={`${params.id}/followers`}
						className="mr-5 flex flex-col items-center "
					>
						<b>{user.followers.length}</b>{" "}
						<span className="text-muted-foreground hover:text-foreground transition-all">
							Followers
						</span>
					</Link>
					<Link
						href={`${params.id}/following`}
						className="flex flex-col items-center "
					>
						<b>{user.following.length}</b>{" "}
						<span className="text-muted-foreground hover:text-foreground transition-all">
							Following
						</span>
					</Link>
				</div>
			</div>
			<ProfileFeed posts={posts} />
		</>
	);
};
export default ProfilePage;
