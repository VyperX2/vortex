import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
	if (isConnected) {
		console.log("Already Connected to mongo DB");
	}
	try {
		await mongoose.connect(process.env.MONGODB_URI ?? "", {
			dbName: "vortex",
		});
		isConnected = true;
		console.log("Connected to MONGODB");
	} catch (error) {
		console.error(error);
		console.log("Failed to Connect To DB");
	}
};
