"use server";
const bcrypt = require("bcrypt");
import User from "@/models/User";
import { signIn, signOut } from "./auth";
import { connectToDB } from "./database";

export const handleGoogleLogin = async () => {
	await signIn("google");
};

export const handleLogout = async () => {
	await signOut();
};

export const handleRegister = async (formData: FormData) => {
	const { username, email, password, passwordRepeat, img } =
		Object.fromEntries(formData);

	console.log(username, email, password, passwordRepeat, img);

	if (password !== passwordRepeat) {
		return "passwords dont match";
	}

	try {
		await connectToDB();
		const user = await User.findOne({ email: email });

		if (user) {
			return "User already exists";
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			img,
		});

		await newUser.save();
		console.log("CREATED NEW USER");
	} catch (error) {
		console.log(error);
		console.log("Something went wrong!");
	}
};

export const handleLogin = async (formData: FormData) => {
	const { username, password } = Object.fromEntries(formData);

	try {
		console.log("Starting");
		await signIn("credentials", {
			username,
			password,
		});
	} catch (error) {
		console.log(error);
		return { error: "Something went wrong" };
	}
};
