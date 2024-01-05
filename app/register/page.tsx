import {
	Card,
	CardHeader,
	CardDescription,
	CardContent,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const RegisterPage = () => {
	return (
		<section className="w-full h-screen grid place-items-center">
			<Card className="md:w-[400px]">
				<CardHeader>
					<CardTitle>Register To Vortex</CardTitle>
					<CardDescription>
						A Fullstack Social Media Appliaction
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form className="space-y-4" action="">
						<Input type="text" name="username" placeholder="Username" />
						<Input type="email" name="email" placeholder="Email" />
						<Input type="password" name="password" placeholder="Password" />
						<Input
							type="password"
							name="passwordRepeat"
							placeholder="Confirm Password"
						/>
						<Button className="w-full">Register</Button>
					</form>
				</CardContent>
				<CardFooter>
					<Link className="text-sm" href="/login">
						{" "}
						<span className="text-muted-foreground">
							Already have an account?
						</span>{" "}
						Login here
					</Link>
				</CardFooter>
			</Card>
		</section>
	);
};

export default RegisterPage;
