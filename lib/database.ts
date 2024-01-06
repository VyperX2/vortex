import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
	try {
		if (isConnected) {
			console.log(isConnected);
			return;
		}

		await mongoose.connect(process.env.MONGODB_URI ?? "", {
			dbName: "social_media",
		});

		console.log("Connected to MongoDB");
		isConnected = true;
	} catch (error) {
		console.log(error);
		console.log("Failed to Connect to MOGNODB");
	}
};
