import Create from "@/components/Create";
import Menu from "@/components/Menu";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";

const CreatePage = async () => {
	const session: Session | null = await auth();

	return (
		<section>
			<div className="flex flex-row-reverse justify-start mr-8">
				<Menu />
			</div>
			<div>
				<div className="flex flex-col items-center gap-8">
					<Create session={session} />
				</div>
			</div>
		</section>
	);
};

export default CreatePage;
