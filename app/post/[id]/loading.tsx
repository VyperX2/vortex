import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
	return (
		<div className="flex flex-col bg-secondary/20 lg:container  px-4 w-[75vw] h-[90vh] lg:items-start items-start md:items-center py-8 rounded-lg border border-secondary/30 overflow-hidden">
			<div className="flex items-center justify-between w-full  text-muted-foreground mt-4 mb-4">
				<div className="flex items-center gap-3">
					<Skeleton className="h-8 w-8 rounded-full" />

					<Skeleton className="w-24 h-8" />
				</div>
			</div>
			<Skeleton className="h-full w-full" />
		</div>
	);
};

export default loading;
