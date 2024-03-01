"use client";
import { User } from "@/lib/types";
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { AvatarFallback } from "@radix-ui/react-avatar";

const UserCard = ({ img, email, followers, username, _id }: User) => {
	return (
		<div className="w-[300px] bg-secondary/5 md:w-[350px]  rounded-xl border  text-card-foreground shadow flex flex-col items-center">
			<Link href={`/profile/${_id}`}>
				<CardHeader className="flex flex-col items-center ">
					<Avatar className="h-20 w-20 mb-4">
						<AvatarImage src={img} />
						<AvatarFallback className="flex items-center justify-center bg-gray-800 border w-full h-full text-2xl">
							{username[0].toLocaleUpperCase()}
						</AvatarFallback>
					</Avatar>
					<CardTitle>{username}</CardTitle>
					<CardDescription>{email}</CardDescription>
				</CardHeader>
				<CardContent>
					<CardFooter className="flex flex-col">
						<CardTitle className="flex flex-col">{followers.length}</CardTitle>
						<CardDescription className="text-muted-foreground">
							Followers
						</CardDescription>
					</CardFooter>
				</CardContent>
			</Link>
		</div>
	);
};

export default UserCard;
