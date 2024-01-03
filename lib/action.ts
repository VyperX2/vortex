"use server";
import User from "@/models/User";
import { signIn } from "./auth";
import { connectToDB } from "./database";
const bcrypt = require("bcrypt");

export const handleGoogleLogin = async () => {
	await signIn("google");
};

export const handleRegister = async (formData: any) => {
	const { username, password, email, img, passwordRepeat } =
		Object.fromEntries(formData);

	if (password !== passwordRepeat) {
		return "Passwords didn't match";
	}

	try {
		await connectToDB();
		const user = await User.findOne({ username });
		const salt = await bcrypt.genSalt(10);
		const hashedPasword = await bcrypt.hash(password, salt);

		if (!user) {
			const newUser = new User({
				username,
				email,
				password: hashedPasword,
				img,
			});

			await newUser.save();
			console.log("NEW USER CREATED");
		}
	} catch (error) {
		console.log(error);
	}
};

export const handleLogin = async (formData: any) => {
	const { username, password } = Object.fromEntries(formData);

	try {
		await signIn("credentials", {
			username,
			password,
		});
	} catch (error) {
		console.log(error);
	}
};
