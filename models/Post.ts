import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
	{
		caption: {
			type: String,
		},
		img: {
			type: String,
		},
	},
	{ timestamps: true }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
