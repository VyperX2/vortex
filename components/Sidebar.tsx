"use client";
import { tabs } from "@/lib/constants.tsx";
import SidebarLink from "./SidebarLink";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

const Sidebar = ({
	children,
	session,
}: {
	children: React.ReactNode;
	session: Session;
}) => {
	const pathname = usePathname();

	return (
		<>
			{pathname === "/login" || pathname === "/register" ? null : (
				<nav className="2xl:flex-[0.2] lg:flex-[0.3] lg:flex flex-col  border-r  py-8 min-h-[100vh] h-full  hidden gap-8 w-full ">
					<div className="flex items-center font-semibold text-lg pl-4">
						{/* Insert ICON here */}
						<h4>Vortex</h4>
					</div>

					{/* USER PROFILE  */}
					{children}
					<ul className="flex flex-col ">
						{tabs.map((tab, index) => (
							<SidebarLink
								{...tab}
								session={session}
								index={index}
								key={index}
							/>
						))}
					</ul>
				</nav>
			)}
		</>
	);
};

export default Sidebar;
