"use client";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Input } from "./ui/input";
import { User } from "@/lib/types";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function SearchUser() {
	const [open, setOpen] = useState(false);
	const [users, setUsers] = useState<User[] | []>([]);

	useEffect(() => {
		async function getUsers() {
			const response = await fetch("/api/people", {
				method: "GET",
				cache: "no-store",
			});
			const data = await response.json();
			setUsers(data);
		}
		getUsers();
	}, []);

	return (
		<>
			<IoSearch
				className="absolute mt-[0.6rem] ml-2 w-5 h-5 mr-2 text-red-800"
				style={{ color: "whitesmoke", opacity: "0.7" }}
			/>
			<Input
				onClick={() => setOpen((open) => !open)}
				placeholder="Search for users..."
				className="pl-8 py-5 flex-1 hover:bg-secondary cursor-pointer"
			/>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Search for users..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						{users.map((user) => (
							<CommandItem>
								{" "}
								<Link className="w-full" href={`/profile/${user?._id}`}>
									<div className="py-2 px-2 transition-all rounded-md w-full flex items-center gap-2 hover:bg-secondary/25">
										<Avatar className="h-12 w-12">
											<AvatarImage src={`${user?.img}`} />
											<AvatarFallback>
												{user?.username[0].toUpperCase()}
											</AvatarFallback>
										</Avatar>
										<div className="flex flex-col ">
											<p className="text-md font-semibold">{user?.username}</p>
											<p className="text-sm text-muted-foreground">
												@{user?.email?.split("@")[0]}
											</p>
										</div>
									</div>
								</Link>
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
