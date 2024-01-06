import { auth } from "@/lib/auth";
import Link from "next/link";

const UserDisplay = async () => {
	const session = await auth();

	return (
		<>
			{
				<Link
					href={`/profile/${session?.user?.name}`}
					className="flex items-center gap-4 pl-4"
				>
					<img
						src={`${session?.user?.image}`}
						alt="profile_img"
						className=" h-14 w-14 rounded-full"
					/>
					{/* CHANGE THIS TO NEXT IMAGE LATER */}
					<div className="flex flex-col">
						<p className="font-semibold">{session?.user?.name}</p>
						<p className="text-muted-foreground">
							@{session?.user?.email?.split("@")[0]}
						</p>
					</div>
				</Link>
			}
		</>
	);
};

export default UserDisplay;
