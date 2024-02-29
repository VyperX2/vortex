import UserCard from "@/components/UserCard";
import { User } from "@/lib/types";

const PeoplePage = async () => {
	const res = await fetch("http://localhost:3000/api/people", {
		cache: "no-store",
	});
	const data: User[] = await res.json();

	return (
		<div>
			{data.map((user) => (
				<UserCard />
			))}
		</div>
	);
};

export default PeoplePage;
