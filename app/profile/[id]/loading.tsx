import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
	return (
		<>
			{" "}
			<div className="flex justify-center mt-9 items-center">
				<Skeleton className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center font-bold text-2xl" />

				<Skeleton className="font-bold ml-5" />
			</div>
			<div className="flex justify-center mt-10 mr-[80px] ml-[60px]">
				<h1 className="mr-5">
					<Skeleton className="w-8" />
					Posts
				</h1>
				<h1 className="mr-5 ">
					<Skeleton className="w-8" />
					Followers
				</h1>
				<h1>
					<Skeleton className="w-8" />
					Following
				</h1>
			</div>
		</>
	);
};

export default loading;
