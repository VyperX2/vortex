import PostCard from "@/components/PostCard";
import { auth } from "@/lib/auth";

const PostPage = async ({ params }: { params: { id: string } }) => {
	const response = await fetch(`https://vortex-neon.vercel.app/api/post/${params.id}`);
	const data = await response.json();
	const session = await auth();
	return (
		<div className="container grid grid-cols-1 place-items-center gap-8">
			<PostCard {...data} session={session} />
		</div>
	);
};

export default PostPage;
