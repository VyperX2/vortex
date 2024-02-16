import Follower from "@/components/Follower";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { User } from "@/lib/types";

const FollowerPage = async ({ params }: { params: { id: string } }) => {
	const response = await fetch(
		`http://localhost:3000/api/profile/${params.id}/followers`,
		{ method: "GET", cache: "no-store" }
	);
	const data: User[] = await response.json();
	return (
		<div className="container grid grid-cols-1 place-items-center gap-8">
			<Card className="w-full">
				<CardHeader className="text-lg font-semibold ">
					<CardTitle>Followers</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					{data.map((follower) => (
						<Follower {...follower} />
					))}
				</CardContent>
			</Card>
		</div>
	);
};

export default FollowerPage;
