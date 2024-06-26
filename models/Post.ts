import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
	{
		creator: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		caption: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		likes: {
			type: [{ type: Schema.Types.ObjectId, ref: "User" }],
			default: [],
		},
		// comments: [commentSchema],
	},
	{ timestamps: true }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
