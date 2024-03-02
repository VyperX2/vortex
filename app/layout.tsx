import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import UserDisplay from "@/components/UserDisplay";
import Menu from "@/components/Menu";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { auth } from "@/lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Vortex",
	description:
		"Unleash the power of connection with Vortex, the innovative social media app driven by metadata precision. Elevate your online experience as Vortex intelligently connects users through shared interests and experiences. Effortlessly organize and discover content with advanced tagging, explore vibrant communities tailored to your passions, and express your identity with precision. Join Vortex and step into a personalized, secure, and dynamic social space where every connection is meaningful. Redefine social media with the future - embrace the Vortex experience today!",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await auth();
	return (
		<html lang="en">
			<body className={`dark ${inter.className} flex bg-background`}>
				<EdgeStoreProvider>
					<Sidebar session={session}>
						<UserDisplay />
					</Sidebar>
					<main className="flex-1 pt-4">
						{children}
						<Menu />
						{/* <Footer /> */}
					</main>
				</EdgeStoreProvider>
			</body>
		</html>
	);
}
