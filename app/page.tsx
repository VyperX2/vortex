import { auth, signOut } from "@/lib/auth";
export default async function Home() {
	const session = await auth();
	console.log(session);
	return (
		<main>
			{session?.user ? (
				<form
					action={async () => {
						"use server";
						await signOut();
					}}
				>
					<button>SIGN OUT</button>
				</form>
			) : (
				<h3>YOU ARE SIGNED OUT</h3>
			)}
		</main>
	);
}
