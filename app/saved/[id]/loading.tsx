import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="md:ml-4 mt-8 grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 ">
				<Skeleton className="w-96 h-[75vh]" />
				<Skeleton className="w-96 h-[75vh]" />
				<Skeleton className="w-96 h-[75vh]" />
			</div>
		</div>
	);
};

export default loading;
