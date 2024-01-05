"use client";
import { SidebarLinkProps } from "@/lib/types";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarLink: React.FC<SidebarLinkProps> = ({
	href,
	title,
	icon,
	index,
}) => {
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
