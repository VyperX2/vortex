import Menu from "@/components/Menu";
import ProfileCard from "@/components/ProfileCard";

const ExplorePage: React.FC = async () => {
	const response = await fetch("https://vortex-neon.vercel.app/api/post", {
		cache: "no-store",
	});
	const data = await response.json();
	return (
		<div>
			<div className="flex flex-row-reverse justify-start mr-8">
				<Menu />
			</div>
			<div className="md:ml-4 mt-8 grid grid-cols-1 2xl:grid-cols-3 md:grid-cols-2 place-items-center gap-y-8">
				{Array.isArray(data) && data.length > 0 ? (
					data.map((post) => <ProfileCard key={post._id} {...post} />)
				) : (
					<p>No posts avaiable</p>
				)}
			</div>
		</div>
	);
};

export default ExplorePage;
