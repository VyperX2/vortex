import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { handleLogout } from "@/lib/actions";

const UserDisplay = async () => {
	const session = await auth();

	return (
		<>
			{
				<DropdownMenu>
					<DropdownMenuTrigger className="flex items-center gap-4 pl-4 outline-none">
						{session?.user?.image ? (
							<Image
								src={session?.user?.image}
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
						<div className="flex flex-col">
							<p className="font-semibold">
								{session?.user?.name || session?.user?.username}
							</p>
							<p className="text-muted-foreground">
								@{session?.user?.email?.split("@")[0]}
							</p>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<Link
							href={`/profile/${
								session?.user?.username || session?.user?.name
							}`}
						>
							<DropdownMenuItem className="text-md w-full flex items-center justify-center">
								My Profile
							</DropdownMenuItem>
						</Link>
						<DropdownMenuItem className="text-md w-full">
							<form className="w-full" action={handleLogout}>
								<button type="submit" className=" text-destructive w-full">
									Sign Out
								</button>
							</form>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			}
		</>
	);
};

export default UserDisplay;
