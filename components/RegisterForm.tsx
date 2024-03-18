"use client";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { handleRegister } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { Spinner } from "./Spinner";

const RegisterForm = () => {
	const router = useRouter();
	const [state, formAction] = useFormState(handleRegister, undefined);
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		if (state?.success) {
			router.push("/login");
		}
		if (state?.error) {
			setLoading(false);
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
			<Button onClick={() => setLoading(true)} className="w-full">
				{loading ? <Spinner /> : "Register"}
			</Button>
			<p className="text-destructive">{state?.error}</p>
		</form>
	);
};

export default RegisterForm;
