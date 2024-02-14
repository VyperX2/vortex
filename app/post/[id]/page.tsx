import PostCard from "@/components/PostCard";
import { auth } from "@/lib/auth";

const PostPage = async ({ params }: { params: { id: string } }) => {
	const response = await fetch(`http://localhost:3000/api/post/${params.id}`);
	const data = await response.json();
	const session = await auth();
	return (
		<div>
			<PostCard {...data} session={session} />
		</div>
	);
};

export default PostPage;
