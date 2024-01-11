import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { handleLogout } from "@/lib/actions";
import { Button } from "./ui/button";

const UserDisplay = async () => {
	const session = await auth();

	return (
		<>
			{
				<DropdownMenu>
					<DropdownMenuTrigger className="flex items-center gap-4 pl-4 outline-none">
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
						{/* CHANGE THIS TO NEXT IMAGE LATER */}
						<div className="flex flex-col">
							<p className="font-semibold">{session?.user?.username}</p>
							<p className="text-muted-foreground">
								@{session?.user?.email?.split("@")[0]}
							</p>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent >
						<Link href={`/profile/${session?.user?.username}`}>
							<DropdownMenuItem className="text-md">My Profile</DropdownMenuItem>
						</Link>
						<DropdownMenuItem className="text-md">
							<form action={handleLogout}>
								<button type="submit" className=" text-destructive">Sign Out</button>
							</form>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			}
		</>
	);
};

export default UserDisplay;
