"use client";
import Link from "next/link";
import { getSession } from "next-auth/react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { handleLogout } from "@/lib/actions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import { Session } from "next-auth";
import { Skeleton } from "./ui/skeleton";

const UserDisplay = () => {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		const fetchSession = async () => {
			try {
				const session_ = await getSession();

				setSession(session_);
			} catch (error) {
				console.error("Failed to fetch session:", error);
			}
		};

		fetchSession();
	}, []); // Empty dependency array means this effect runs once on mount

	return (
		<>
			{session ? (
				<DropdownMenu>
					<DropdownMenuTrigger className="flex items-center gap-4 pl-4 outline-none">
						<Avatar className="h-10 w-10">
							<AvatarImage src={session?.user?.image ?? ""} />
							<AvatarFallback>
								{session?.user?.username &&
									session?.user?.username[0].toUpperCase()}
							</AvatarFallback>
						</Avatar>
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
						<Link href={`/profile/${session?.user?.id || session?.user?.id}`}>
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
			) : (
				<div>
					<div className="flex items-center gap-4 pl-4 outline-none">
						<Skeleton className="h-10 w-10 rounded-full" />
						<div className="flex flex-col gap-2">
							<Skeleton className="font-semibold w-24 h-4" />
							<Skeleton className="font-semibold w-24 h-4" />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default UserDisplay;
