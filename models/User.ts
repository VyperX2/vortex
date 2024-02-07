import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			min: 3,
			max: 20,
			unique: true,
		},
		password: {
			type: String,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			max: 50,
		},
		img: {
			type: String,
			default: "",
		},
		provider: {
			type: String,
			default: "",
		},
		followers: {
			type: [{ type: Schema.Types.ObjectId, ref: "User" }],
			default: [],
		},
		following: {
			type: [{ type: Schema.Types.ObjectId, ref: "User" }],
			default: [],
		},
	},
	{ timestamps: true }
);

const User = models?.User || model("User", userSchema);

export default User;
