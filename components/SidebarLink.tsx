"use client";
import { SidebarLinkProps } from "@/lib/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

const SidebarLink = ({ href, title, icon, index }: SidebarLinkProps) => {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		const fetchSession = async () => {
			try {
				const session_ = await getSession();
				console.log(session_);
				setSession(session_);
			} catch (error) {
				console.error("Failed to fetch session:", error);
			}
		};

		fetchSession();
	}, []); // Empty dependency array means this effect runs once on mount

	console.log(session);
	if (href === "/saved") {
		href = `/saved/${session?.user?.id}`;
	}
	const pathname = usePathname();
	return (
		<Link
			className={`${pathname === href ? "bg-secondary" : ""} ${
				index === 0 ? "border-t" : ""
			} hover:bg-secondary pl-4 py-4 transition-all border-b  border-b-muted flex items-center gap-4`}
			href={href}
		>
			{icon}
			{title}
		</Link>
	);
};

export default SidebarLink;
