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
	const [urls, setUrls] = useState<{
		url: string;
		thumbnailUrl: string | null;
	}>();
	const [file, setFile] = useState<File>();
	const [caption, setCaption] = useState<string>("");
	const [progress, setProgress] = useState(0);
	const { edgestore } = useEdgeStore();
	const router = useRouter();

	return (
		<section className="flex flex-col items-center gap-8">
			<h4 className="text-primary font-bold text-2xl">Create Post</h4>
			<Card className="mx-4  w-[65vw] border-dashed ">
				<CardHeader>
					<CardTitle className="text-xl font-semibold text-center">
						Insert Your Image
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="flex flex-col items-center gap-4 ">
						<SingleImageDropzone
							width={300}
							height={400}
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
						<Textarea
							value={caption}
							onChange={(e) => setCaption(e.target.value)}
							placeholder="Enter caption..."
						/>
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
									if (caption && urls) {
										const response = await fetch("/api/post/new", {
											method: "POST",
											body: JSON.stringify({
												img: urls?.url,
												caption: caption,
												userId: session?.user?.id,
											}),
										});

										if (response.ok) {
											router.push("/");
										}
									}
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
