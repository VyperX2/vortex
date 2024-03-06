"use client";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Input } from "./ui/input";

export default function SearchUser() {
	const [open, setOpen] = useState(false);

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
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Suggestions">
						<CommandItem>Calendar</CommandItem>
						<CommandItem>Search Emoji</CommandItem>
						<CommandItem>Calculator</CommandItem>
					</CommandGroup>
				</CommandList>
			</CommandDialog>
		</>
	);
}
