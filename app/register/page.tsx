import {
	Card,
	CardHeader,
	CardDescription,
	CardContent,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";
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
					<RegisterForm />
				</CardContent>
				<CardFooter>
					<Link className="text-sm" href="/login">
						<span className="text-muted-foreground">
							Already have an account? &nbsp;
						</span>
						Login here
					</Link>
				</CardFooter>
			</Card>
		</section>
	);
};

export default RegisterPage;
