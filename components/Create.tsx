"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegImage } from "react-icons/fa6";
import Image from "next/image";
import { handlePost } from "@/lib/actions";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const Create = () => {
	const [imagePreview, setImagePreview] = useState<string>("");

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = e.target.files[0];

			if (file) {
				const imageUrl = URL.createObjectURL(file);
				setImagePreview(imageUrl);
			}
		}
	};

	return (
		<section className="flex flex-col items-center gap-8">
			<h4 className="text-primary font-bold text-2xl">Create Post</h4>
			<Card className="mx-4 h-[70vh] w-[65vw] border-dashed ">
				<CardHeader>
					<CardTitle className="text-xl font-semibold text-center">
						Insert Your Image
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form
						action={handlePost}
						className="flex flex-col items-center gap-4 "
					>
						<label htmlFor="post" className="cursor-pointer">
							{imagePreview ? (
								<Image
									src={imagePreview}
									alt="Image Preview"
									height={600}
									width={350}
									className="lg:h-96 h-80 object-cover object-center rounded-md"
								/>
							) : (
								<FaRegImage size={60} />
							)}
						</label>
						<input
							type="file"
							name="postImg"
							id="post"
              required
							hidden
							onChange={handleImageChange}
						/>
						<Input placeholder="Add A Caption..." name="caption" />
						<Button className="text-lg font-semibold">Post</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Create;
