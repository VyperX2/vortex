import { Post } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileCard = ({ img, _id }: Post) => {
	return (
		<Link
			href={`/post/${_id}`}
			className="2xl:w-96 lg:w-[350px] md:w-80 w-72 h-[600px] rounded-lg relative overflow-hidden "
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
