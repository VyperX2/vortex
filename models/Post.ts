import { Schema, model, models } from "mongoose";

const commentSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		text: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

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
			type: Number,
			default: 0,
		},
		// comments: [commentSchema],
	},
	{ timestamps: true }
);

const Post = models.Post || model("Post", postSchema);

export default Post;
