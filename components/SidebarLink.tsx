"use client";
import { SidebarLinkProps } from "@/lib/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SidebarLink = ({
	href,
	title,
	icon,
	index,
	session,
}: SidebarLinkProps & { session: Session }) => {
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
