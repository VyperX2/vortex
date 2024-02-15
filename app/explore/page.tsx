import ProfileCard from "@/components/ProfileCard";

const ExplorePage: React.FC = async () => {
	const response = await fetch("http://localhost:3000/api/post", {
		cache: "no-store",
	});
	const data = await response.json();
	console.log(Array.isArray(data) && data.length > 0);
	return (
		<div className="md:ml-4 mt-8 grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-8">
			{Array.isArray(data) && data.length > 0 ? (
				data.map((post) => <ProfileCard key={post._id} {...post} />)
			) : (
				<p>No posts avaiable</p>
			)}
		</div>
	);
};

export default ExplorePage;
