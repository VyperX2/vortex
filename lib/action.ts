import User from "@/models/User";
import { signIn } from "./auth";
import { connectToDB } from "./database";

interface formDataProps {
	email: string;
	username: string;
	img: string;
	passwordRepeat: string;
	password: string;
}

export const handleGoogleLogin = async () => {
	"use server";
	await signIn("google");
};

export const handleRegister = async (formData: any) => {
	"use server";
	const { username, password, email, img, passwordRepeat } =
		Object.fromEntries(formData);

	if (password !== passwordRepeat) {
		return "Passwords didn't match";
	}

	try {
		await connectToDB();
		const user = User.findOne({ username: username });

		if (!user) {
			const newUser = new User({
				username,
				email,
				password,
				img,
			});

			await newUser.save();
		}
	} catch (error) {
		console.log(error);
	}
};
