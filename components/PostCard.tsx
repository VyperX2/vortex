import { type Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const Post = ({ creator, img, caption, _id }: Post) => {
	return (
		<Link className="w-fit flex-col" href={`/post/${_id}`}>
			<button className="border-none">
				<Image
					src="https://picsum.photos/200/300"
					className="rounded-lg overflow-hidden 2xl:w-72 lg:w-52 md:w-52 w-72"
					height={300}
					width={200}
					alt="post"
				/>
			</button>
			<div className="flex items-center text-muted-foreground">
				<Image
					src="https://picsum.photos/200/200"
					className="rounded-full"
					height={32}
					width={32}
					alt="post"
				/>
				<p>{creator?.username}</p>
			</div>
			<p>{caption}</p>
		</Link>
	);
};

export default Post;
