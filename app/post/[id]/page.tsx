import PostCard from "@/components/PostCard";

const PostPage = async ({ params }: { params: { id: string } }) => {
	const response = await fetch(`http://localhost:3000/api/post/${params.id}`);
	const data = await response.json();
	return (
		<div>
			<PostCard {...data} />
		</div>
	);
};

export default PostPage;
