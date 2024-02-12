import { Post } from "@/lib/types";
import Image from "next/image";
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
		<div className="w-96">
			<Image
				src={img}
				className="rounded-lg h-[75vh] md:w-[350%] w-[225%] object-cover"
				height={800}
				width={300}
				alt="post"
			/>
		</div>
	);
};

export default ProfileCard;
