import ProfileFeed from "@/components/ProfileFeed";
import Image from "next/image";
import Link from "next/link";

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
				{user.img ? (
					<div className="flex items-center">
						<Image
							src={`${user?.img}`}
							alt="profile_img"
							height={56}
							width={56}
							className=" h-14 w-14 rounded-full"
						/>
						<p className="font-bold ml-5">{user?.username}</p>
					</div>
				) : (
					<div className="flex items-center">
						<div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center font-bold text-2xl">
							{user?.username[0].toUpperCase()}
						</div>
						<p className="font-bold ml-5">{user?.username}</p>
					</div>
				)}
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
