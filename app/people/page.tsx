import UserCard from "@/components/UserCard";
import { User } from "@/lib/types";

const PeoplePage = async () => {
	const res = await fetch("http://localhost:3000/api/people", {
		cache: "no-store",
	});
	const data: User[] = await res.json();

	return (
		<div className="md:ml-4 mt-8 grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8">
			{data.map((user) => (
				<UserCard key={user._id} {...user} />
			))}
		</div>
	);
};

export default PeoplePage;
