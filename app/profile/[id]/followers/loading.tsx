import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
const loading = () => {
	return (
		<div className="container grid grid-cols-1 place-items-center gap-8">
			<Card className="w-full">
				<CardHeader className="text-lg font-semibold ">
					<CardTitle>Followers</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-4">
					<div className="py-3 px-2 transition-all rounded-md w-full flex items-center gap-2 hover:bg-secondary/25">
						<Skeleton className="h-12 w-12 rounded-full" />

						<div className="flex flex-col gap-2">
							<Skeleton className="text-md w-[250px] h-4 font-semibold" />
							<Skeleton className="text-sm w-[250px] h-4 text-muted-foreground" />
						</div>
						<Button className="ml-auto w-[100px]">
							<Skeleton className="w-full h-full" />
						</Button>
					</div>
					<div className="py-3 px-2 transition-all rounded-md w-full flex items-center gap-2 hover:bg-secondary/25">
						<Skeleton className="h-12 w-12 rounded-full" />

						<div className="flex flex-col gap-2">
							<Skeleton className="text-md w-[250px] h-4 font-semibold" />
							<Skeleton className="text-sm w-[250px] h-4 text-muted-foreground" />
						</div>
						<Button className="ml-auto w-[100px]">
							<Skeleton className="w-full h-full" />
						</Button>
					</div>
					<div className="py-3 px-2 transition-all rounded-md w-full flex items-center gap-2 hover:bg-secondary/25">
						<Skeleton className="h-12 w-12 rounded-full" />

						<div className="flex flex-col gap-2">
							<Skeleton className="text-md w-[250px] h-4 font-semibold" />
							<Skeleton className="text-sm w-[250px] h-4 text-muted-foreground" />
						</div>
						<Button className="ml-auto w-[100px]">
							<Skeleton className="w-full h-full" />
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default loading;
