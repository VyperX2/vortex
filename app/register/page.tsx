import {
	Card,
	CardHeader,
	CardDescription,
	CardContent,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
			</Card>
		</section>
	);
};

export default RegisterPage;
