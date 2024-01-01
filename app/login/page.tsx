import { handleGoogleLogin } from "@/lib/action";
const RegisterPage = async () => {
	return (
		<section className="w-full h-screen flex items-center justify-center">
			<form action={handleGoogleLogin}>
				<button>Login with Google</button>
			</form>
		</section>
	);
};

export default RegisterPage;
