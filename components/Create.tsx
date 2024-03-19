"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "./single-image-dropzone";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
const Create = ({ session }: { session: Session | null }) => {
	const [isPosting, setIsPosting] = useState<boolean>(false);
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
							<SingleImageDropzone
								width={220}
								height={400}
								value={file}
								onChange={(file) => {
									setFile(file);
								}}
							/>
						</div>
						<div className="h-[6px] w-44 borer rounded overflow-hidden">
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
							{!isPosting ? "Post" : "Posting..."}
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	);
};

export default Create;
