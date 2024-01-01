import { auth, signIn } from "@/lib/auth";
const RegisterPage = async () => {
	const session = await auth();

	console.log(session);

	const handleGoogleLogin = async () => {
		"use server";
		await signIn("google");
	};
	return (
		<section className="w-full h-screen flex items-center justify-center">
			<form action={handleGoogleLogin}>
				<button>Sign Up with Google</button>
			</form>
		</section>
	);
};

export default RegisterPage;
