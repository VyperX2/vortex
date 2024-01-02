import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { handleGoogleLogin } from "@/lib/action";
import { FaGoogle } from "react-icons/fa";
const LoginPage = async () => {
	return (
		<section className="w-full h-screen flex items-center justify-center">
			<Card>
				<CardHeader>
					<CardTitle>Login to Vortex</CardTitle>
					<CardDescription>
						A Fullstack Social Media Appliaction
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="w-full grid items-center" action={handleGoogleLogin}>
						<Button className="gap-4">
							Login with Google
							<FaGoogle />
						</Button>
					</form>
				</CardContent>
			</Card>
		</section>
	);
};

export default LoginPage;
