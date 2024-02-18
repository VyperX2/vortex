import { User } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const Follower = ({ email, img, username }: User) => {
	return (
		<div className="py-3 px-2 transition-all rounded-md w-full flex items-center gap-2 hover:bg-secondary/25">
			<Avatar className="h-12 w-12">
				<AvatarImage src={img} />
				<AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
			</Avatar>
			<div className="flex flex-col ">
				<p className="text-md font-semibold">{username}</p>
				<p className="text-sm text-muted-foreground">@{email?.split("@")[0]}</p>
			</div>
			<Button className="ml-auto">Follow</Button>
		</div>
	);
};

export default Follower;