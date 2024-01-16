import Create from "@/components/Create";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";

const CreatePage = async () => {
	const session: Session | null = await auth();
	return (
		<section className="flex flex-col items-center gap-8">
			<Create session={session} />
		</section>
	);
};

export default CreatePage;
