import SavedFeed from "@/components/SavedFeed";

const SavedPostsPage = ({ params }: { params: { id: string } }) => {
	return <SavedFeed params={params} />;
};

export default SavedPostsPage;
