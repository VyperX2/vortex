import Navbar from "@/components/Navbar";
import TopCreators from "@/components/TopCreators";

const HomePage = () => {
	return (
		<div className="container flex">
			<div className="flex-1 flex py-8">
				<div className="flex-1">
					<Navbar />
				</div>
				<div className="lg:flex-[0.3] 2xl:flex-[0.2] hidden lg:block">
					<TopCreators />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
