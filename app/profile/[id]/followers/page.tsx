import Follower from "@/components/Follower";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { User } from "@/lib/types";

const FollowerPage = async ({ params }: { params: { id: string } }) => {
	const response = await fetch(
		`/api/profile/${params.id}/followers`,
		{ method: "GET", cache: "no-store" }
	);
	const data: User[] = await response.json();
	const session = await auth();
	return (
		<div className="container grid grid-cols-1 place-items-center gap-8">
			<Card className="w-full">
				<CardHeader className="text-lg font-semibold ">
					<CardTitle>Followers</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					{data.map((follower) => (
						<Follower key={follower._id} {...follower} />
					))}
				</CardContent>
			</Card>
		</div>
	);
};

export default FollowerPage;
