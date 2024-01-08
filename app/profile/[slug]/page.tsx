import Post from "@/components/Post";
import { auth } from "@/lib/auth";
import { UserFameProps } from "@/lib/types";
import Image from "next/image";

const ProfilePage = async ({ posts, followers, following }: UserFameProps) => {
	const session = await auth();
	return (
		<>
			<div className="flex justify-center mt-9 items-center">
				{session?.user?.image ? (
					<Image
						src={`/${session?.user?.image}`}
						alt="profile_img"
						height={56}
						width={56}
						className=" h-14 w-14 rounded-full"
					/>
				) : (
					<div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center font-bold text-2xl">
						{session?.user?.username[0].toUpperCase()}
					</div>
				)}
				<p className="font-bold ml-5">{session?.user?.username}</p>
			</div>
			<div className="flex justify-center mt-10 mr-[80px] ml-[60px]">
				<h1 className="mr-5">
					{posts} <b>2</b> Posts
				</h1>
				<h1 className="mr-5 ">
					{followers} <b>10</b> Followers
				</h1>
				<h1>
					{following} <b>20</b> Following
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 place-items-center mt-20 gap-y-12">
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</>
	);
};
export default ProfilePage;
