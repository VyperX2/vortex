"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaRegImage } from "react-icons/fa6";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "./single-image-dropzone";
const Create = () => {
	const [urls, setUrls] = useState<{
		url: string;
		thumbnailUrl: string | null;
	}>();
	const [file, setFile] = useState<File>();
	const [progress, setProgress] = useState(0);
	const { edgestore } = useEdgeStore();

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFile(e.target.files?.[0]);
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
					<form className="flex flex-col items-center gap-4 ">
						<label htmlFor="post" className="cursor-pointer">
							{urls ? (
								<Image
									src={urls?.url}
									alt="Image Preview"
									height={600}
									width={350}
									className="lg:h-96 h-80 object-cover object-center rounded-md"
								/>
							) : null}
						</label>
						<SingleImageDropzone
							width={200}
							height={200}
							value={file}
							onChange={(file) => {
								setFile(file);
							}}
						/>
						<div className="h-[6px] w-44 borer rounded overflow-hidden">
							<div
								className=" h-full bg-white transition-all duration-150"
								style={{ width: `${progress}%` }}
							/>
						</div>
						{/* <Input placeholder="Add A Caption..." name="caption" /> */}
						<Button
							type="button"
							className="text-lg font-semibold"
							onClick={async () => {
								if (file) {
									const res = await edgestore?.publicImages?.upload({
										file,
										onProgressChange: (progress) => {
											setProgress(progress);
										},
									});

									setUrls({
										url: res.url,
										thumbnailUrl: res.thumbnailUrl,
									});
								}
							}}
						>
							Post
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Create;
