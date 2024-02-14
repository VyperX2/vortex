import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
	return (
		<div className="flex flex-col items-center">
			{" "}
			<div>
				<div className="flex justify-center mt-9 items-center">
					<Skeleton className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center font-bold text-2xl" />

					<Skeleton className="font-bold ml-5" />
				</div>
				<div className="flex justify-center mt-10 mr-[80px] ml-[60px]">
					<h1 className="mr-5 flex items-center justify-center gap-4">
						<Skeleton className="w-8 h-4" />
						Posts
					</h1>
					<h1 className="mr-5 flex items-center justify-center  gap-4">
						<Skeleton className="w-8 h-4" />
						Followers
					</h1>
					<h1 className="flex items-center justify-center gap-4">
						<Skeleton className="w-8 h-4" />
						Following
					</h1>
				</div>
				<div className="md:ml-4 mt-8 grid grid-cols-1 md:grid-cols-3 place-items-center space-y-8 gap-8">
					<Skeleton className="w-96 h-[75vh]" />
					<Skeleton className="w-96 h-[75vh]" />
					<Skeleton className="w-96 h-[75vh]" />
				</div>
			</div>
		</div>
	);
};

export default loading;
