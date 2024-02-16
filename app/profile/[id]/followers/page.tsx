const FollowerPage = async ({ params }: { params: { id: string } }) => {
	const response = await fetch(
		`http://localhost:3000/api/profile/${params.id}/followers`,
		{ method: "GET", cache: "no-store" }
	);
	const data = await response.json();
	console.log(data);
	return <div>FollowerPage</div>;
};

export default FollowerPage;
