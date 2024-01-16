import { usersArray } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "./ui/card";

const TopCreators = () => {
	return (
		<Card className=" pb-4">
			<CardHeader className="font-semibold">Top Creators</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-6">
					{usersArray.map((user) => (
						<div
							key={user.name}
							className="flex items-center gap-2 text-muted-foreground"
						>
							<img
								src={user.img}
								alt={user.name}
								className="rounded-full h-10 w-10"
							/>{" "}
							{/* CONVERT TO NEXT IMAGE LATER */}
							<p className="text-sm">{user.name}</p>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
};

export default TopCreators;
