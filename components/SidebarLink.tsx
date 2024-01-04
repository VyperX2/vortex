"use client";
import { SidebarLinkProps } from "@/lib/types";
import { usePathname } from "next/navigation";

const SidebarLink: React.FC<SidebarLinkProps> = ({
	href,
	title,
	icon,
	index,
}) => {
	const pathname = usePathname();

	return (
		<a
			className={`${pathname === href ? "bg-secondary" : ""} ${
				index === 0 ? "border-t" : ""
			} hover:bg-secondary pl-4 py-4 transition-all border-b  border-b-muted`}
			href={href}
		>
			{title}
		</a>
	);
};

export default SidebarLink;
