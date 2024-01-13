"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegImage } from "react-icons/fa6";
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
			<Card className="mx-4 h-[70vh] w-[65vw] border-dashed hover:opacity-60 transition-all">
				<CardHeader>
					<CardTitle className="text-xl font-semibold text-center">
						Insert Your Image
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form action="" className="flex flex-col items-center ">
						<label htmlFor="post" className="cursor-pointer">
							{imagePreview ? (
								<img
									src={imagePreview}
									alt="Image Preview"
									className="max-h-[300px] mb-4"
								/>
							) : (
								<FaRegImage size={60} />
							)}
						</label>
						<input
							type="file"
							name="postImg"
							id="post"
							hidden
							onChange={handleImageChange}
						/>
					</form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Create;
