import { auth } from "@/lib/auth";
import Image from "next/image";

const ProfilePage = async ({ params }: { params: { id: string } }) => {
	const session = await auth();
	const response = await fetch(
		`http://localhost:3000/api/profile/${params.id}`,
		{ cache: "no-store" }
	);
	const data = await response.json();
	const { user, posts } = data;
	console.log(user, posts);

	return (
		<>
			<div className="flex justify-center mt-9 items-center">
				{user.img ? (
					<Image
						src={`${user?.img}`}
						alt="profile_img"
						height={56}
						width={56}
						className=" h-14 w-14 rounded-full"
					/>
				) : (
					<div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center font-bold text-2xl">
						{user?.username[0].toUpperCase()}
					</div>
				)}
				<p className="font-bold ml-5">{user?.username}</p>
			</div>
			<div className="flex justify-center mt-10 mr-[80px] ml-[60px]">
				<h1 className="mr-5">
					<b>{posts.length}</b> Posts
				</h1>
				<h1 className="mr-5 ">
					<b>{user.followers.length}</b> Followers
				</h1>
				<h1>
					<b>{user.following.length}</b> Following
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 place-items-center mt-20 gap-y-12"></div>
		</>
	);
};
export default ProfilePage;
