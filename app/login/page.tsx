import LoginForm from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { handleGoogleLogin, handleLogin } from "@/lib/actions";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
const LoginPage = async () => {
	return (
		<section className="w-full h-screen flex items-center justify-center">
			<Card className="md:w-[400px]">
				<CardHeader>
					<CardTitle>Login to Vortex</CardTitle>
					<CardDescription>
						A Fullstack Social Media Application
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-4">
					<LoginForm />
					<form className="w-full grid items-center" action={handleGoogleLogin}>
						<Button className="gap-4">
							Login with Google
							<FaGoogle />
						</Button>
					</form>
				</CardContent>
				<CardFooter>
					<Link className="text-sm" href="/register">
						<span className="text-muted-foreground">
							Don't have an account? &nbsp;
						</span>
						Register here
					</Link>
				</CardFooter>
			</Card>
		</section>
	);
};

export default LoginPage;
