import { tabs } from "@/lib/constants";
import SidebarLink from "./SidebarLink";
import Link from "next/link";

const Sidebar = () => {
	return (
		<nav className="lg:flex flex-col  border-r  py-8 h-screen  hidden gap-8 w-full ">
			<div className="flex items-center font-semibold text-lg pl-4">
				{/* Insert ICON here */}
				<h4>Vortex</h4>
			</div>

			{/* USER PROFILE  */}
			<Link href={"/profile"} className="flex items-center gap-4 pl-4">
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
	);
};

export default Sidebar;
