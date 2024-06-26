"use server";
const bcrypt = require("bcryptjs");
import User from "@/models/User";
import { signIn, signOut } from "./auth";
import { connectToDB } from "./database";

export const handleGoogleLogin = async () => {
	await signIn("google");
};

export const handleLogout = async () => {
	await signOut();
};

export const handleRegister = async (
	previousState: any,
	formData: FormData
) => {
	const { username, email, password, passwordRepeat, img } =
		Object.fromEntries(formData);

	console.log(username, email, password, passwordRepeat, img);

	if (password !== passwordRepeat) {
		return { error: "passwords dont match" };
	}

	try {
		await connectToDB();
		const user = await User.findOne({ email: email });

		if (user) {
			return { error: "User already exists" };
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			img,
			followers: [],
		});

		await newUser.save();

		try {
			const loginResult = await signIn("credentials", { username, password });

			console.log(loginResult);
		} catch (error: any) {
			if (error?.name.includes("CredentialsSignin")) {
				return { error: "Invalid username or password" };
			}
		}

		return { success: true };
	} catch (error) {
		console.log(error);
		return { error: "Something went wrong!" };
	}
};

export const handleLogin = async (previousState: any, formData: FormData) => {
	const { username, password } = Object.fromEntries(formData);

	try {
		await signIn("credentials", {
			username,
			password,
		});
		return { success: true };
	} catch (error: any) {
		if (error?.name.includes("CredentialsSignin")) {
			return { error: "Invalid username or password" };
		}

		throw error;
	}
};
