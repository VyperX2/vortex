import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";

const HomePage = () => {
	return (
		<>
			<div className="container flex flex-col">
				<div className="flex-1 h-fit py-8">
					<Navbar />
				</div>
				<Feed />
			</div>
		</>
	);
};

export default HomePage;

// import TopCreators from "@/components/TopCreators";

/* <div className="lg:flex-[0.3] 2xl:flex-[0.2] hidden lg:block">
  <TopCreators />
</div> */
