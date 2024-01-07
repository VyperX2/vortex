"use client";
import { Input } from "./ui/input";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { handleRegister } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
	const router = useRouter();
	const [state, formAction] = useFormState(handleRegister, undefined);

	useEffect(() => {
		if (state?.success) {
			router.push("/login");
		}
	}, [state]);
	return (
		<form className="space-y-4" action={formAction}>
			<Input type="text" name="username" placeholder="Username" />
			<Input type="email" name="email" placeholder="Email" />
			<Input type="password" name="password" placeholder="Password" />
			<Input
				type="password"
				name="passwordRepeat"
				placeholder="Confirm Password"
			/>
			<Button className="w-full">Register</Button>
			<p className="text-destructive">{state?.error}</p>
		</form>
	);
};

export default RegisterForm;
