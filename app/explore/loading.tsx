import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
	return (
		<div className="md:ml-4 mt-8 grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 ">
			<Skeleton className="w-96 h-[600px]" />
			<Skeleton className="w-96 h-[600px]" />
			<Skeleton className="w-96 h-[600px]" />
		</div>
	);
};

export default loading;
