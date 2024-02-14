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
		<div className="w-96 h-[600px] rounded-lg relative overflow-hidden ">
			<Image
				src={img}
				className=""
				layout="fill"
				objectFit="cover"
				alt="post"
			/>
		</div>
	);
};

export default ProfileCard;
