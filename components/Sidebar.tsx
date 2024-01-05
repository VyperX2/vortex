"use client";
import { tabs } from "@/lib/constants.tsx";
import SidebarLink from "./SidebarLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
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
					<Link
						href={"/profile/vyperx2"}
						className="flex items-center gap-4 pl-4"
					>
						<img
							src="https://picsum.photos/200/300"
							alt="profile_img"
							className=" h-14 w-14 rounded-full"
						/>
						{/* CHANGE THIS TO NEXT IMAGE LATER */}
						<div className="flex flex-col">
							<p className="font-semibold">VyperX</p>
							<p className="text-muted-foreground">@vyperx</p>
						</div>
					</Link>

					<ul className="flex flex-col ">
						{tabs.map((tab, index) => (
							<SidebarLink {...tab} index={index} key={index} />
						))}
					</ul>
				</nav>
			)}
		</>
	);
};

export default Sidebar;
