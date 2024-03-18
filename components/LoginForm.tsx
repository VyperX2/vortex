"use client";

import { handleLogin } from "@/lib/actions";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useFormState } from "react-dom";
import { Spinner } from "./Spinner";
import { useEffect, useState } from "react";

const LoginForm = () => {
	const [state, formAction] = useFormState(handleLogin, undefined);
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		if (state?.success) {
			setLoading(false);
		}
		if (state?.error) {
			setLoading(false);
		}
	}, [state]);

	return (
		<form className="space-y-4" action={formAction}>
			<p className="text-destructive"> {state?.error} </p>
			<Input type="text" name="username" placeholder="Username" />
			<Input type="password" name="password" placeholder="Password" />
			<Button onClick={() => setLoading(true)} className="w-full">
				{loading ? <Spinner /> : "Login"}
			</Button>
		</form>
	);
};

export default LoginForm;
