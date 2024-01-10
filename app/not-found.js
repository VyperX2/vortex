import Link from "next/link";

function Error({ statusCode }) {
	return (
		<>
			<p className="text-3xl">
				{statusCode
					? `An error ${statusCode} occurred on server`
					: "An error occurred on client"}
			</p>
			<Link href="/">Return to Home</Link>
		</>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
