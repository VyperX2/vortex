import { PhotoProps } from "@/lib/types";
import Image from "next/image";

const ExplorePage: React.FC = async () => {
  // NO NEED FOR CLIENT COMPONENTS TO FETCH DATA
  // PAGES SHOULD BE SERVER COMPONENTS
	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/photos"
			);
			const data: PhotoProps[] = await response.json();
			return data;
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};
	const data = await fetchData();

	return (
		<div className="grid grid-cols-3 ml-52 mt-5">
			{data?.map((photo) => (
				<div key={photo.id}>
					<h1 className="font-bold ml-[50px] mb-8">
						{photo.title.slice(0, 20)}
					</h1>
					<Image
						src="/okiiiiiiiiiiiiiiiiiii.png"
						alt="Placeholder Image"
						width={250}
						height={250}
						className="mb-5"
					/>
				</div>
			))}
		</div>
	);
};

export default ExplorePage;
