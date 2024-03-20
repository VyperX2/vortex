"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "./single-image-dropzone";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { Input } from "./ui/input";
import { Spinner } from "./Spinner";
const Create = ({ session }: { session: Session | null }) => {
	const [isPosting, setIsPosting] = useState<boolean>(false);
	const [imagePreviewUrl, setImagePreviewUrl] = useState<string>();
	const [urls, setUrls] = useState<{
		url: string;
		thumbnailUrl: string | null;
	}>();
	const [file, setFile] = useState<File>();
	const [caption, setCaption] = useState<string>("");
	const [progress, setProgress] = useState(0);
	const { edgestore } = useEdgeStore();
	const router = useRouter();

	const handlePost = async () => {
		setIsPosting(true);
		let uploadedUrls;

		if (file) {
			const res = await edgestore?.publicImages?.upload({
				file,
				onProgressChange: (progress) => {
					setProgress(progress);
				},
			});

			uploadedUrls = {
				url: res.url,
				thumbnailUrl: res.thumbnailUrl,
			};
			setUrls(uploadedUrls);
		}

		if (caption && uploadedUrls) {
			const response = await fetch(
				"https://vortex-neon.vercel.app/api/post/new",
				{
					method: "POST",
					body: JSON.stringify({
						img: uploadedUrls.url,
						caption: caption,
						userId: session?.user?.id,
					}),
				}
			);

			if (response.ok) {
				router.push("/");
			}
		}

		setIsPosting(false);
	};
	return (
		<section className="flex flex-col items-center gap-8">
			<h4 className="text-primary font-bold text-2xl">Create Post</h4>
			<Card className="mx-4  md:w-[65vw] w-full border-dashed ">
				<CardHeader>
					<CardTitle className="text-xl font-semibold text-center">
						Insert Your Image
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="flex flex-col items-center gap-4 ">
						<div className="hidden md:block">
							<SingleImageDropzone
								width={300}
								height={400}
								value={file}
								onChange={(file) => {
									setFile(file);
								}}
							/>
						</div>
						<div className="block md:hidden">
							<Input
								type="file"
								accept="image/*"
								onChange={(e) => {
									if (e.target.files && e.target.files.length > 0) {
										const file = e.target.files[0];
										setFile(file);
										// Create a URL for the selected file
										const imageUrl = URL.createObjectURL(file);
										// Update the state with the image URL for preview
										setImagePreviewUrl(imageUrl);
									}
								}}
							/>
							{/* Display the image preview */}
							{imagePreviewUrl && (
								<img
									src={imagePreviewUrl}
									alt="Selected"
									className="w-full h-auto mt-3"
								/>
							)}
						</div>
						<div className="h-[6px] w-44  rounded overflow-hidden">
							<div
								className=" h-full bg-white transition-all duration-150"
								style={{ width: `${progress}%` }}
							/>
						</div>
						{/* <Input placeholder="Add A Caption..." name="caption" /> */}
						<Textarea
							value={caption}
							onChange={(e) => setCaption(e.target.value)}
							placeholder="Enter caption..."
						/>
						<Button
							type="button"
							className="text-lg font-semibold"
							onClick={handlePost}
						>
							{!isPosting ? "Post" : <Spinner />}
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Create;
