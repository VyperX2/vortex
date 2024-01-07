"use client";

import { handleLogin } from "@/lib/actions";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useFormState } from "react-dom";

const LoginForm = () => {
	const [state, formAction] = useFormState(handleLogin, undefined);

	return (
		<form className="space-y-4" action={formAction}>
			<p className="text-destructive"> {state?.error} </p>
			<Input type="text" name="username" placeholder="Username" />
			<Input type="password" name="password" placeholder="Password" />
			<Button className="w-full">Login</Button>
		</form>
	);
};

export default LoginForm;
