import Follower from "@/components/Follower";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/lib/types";

const FollowingPage = async ({ params }: { params: { id: string } }) => {
	const response = await fetch(
		`http://localhost:3000/api/profile/${params.id}/following`,
		{ method: "GET", cache: "no-store" }
	);
	const data: User[] = await response.json();
	return (
		<div className="container grid grid-cols-1 place-items-center gap-8">
			<Card className="w-full">
				<CardHeader className="text-lg font-semibold ">
					<CardTitle>Following</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					{data.map((follower) => (
						<Follower key={follower._id} {...follower} creatorId={params.id} />
					))}
				</CardContent>
			</Card>
		</div>
	);
};

export default FollowingPage;
