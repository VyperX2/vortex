import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard = ({
	creator,
	img,
	caption,
	_id,
	likes,
	createdAt,
}: Post) => {
	return (
		<Link
			href={`/post/${_id}`}
			className="w-96 h-[600px] rounded-lg relative overflow-hidden "
		>
			<Image
				src={img}
				className=""
				layout="fill"
				objectFit="cover"
				alt="post"
			/>
		</Link>
	);
};

export default ProfileCard;
