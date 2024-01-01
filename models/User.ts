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
		email: {
			type: String,
			required: true,
			unique: true,
			max: 50,
		},
		img: {
			type: String,
		},
	},
	{ timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
