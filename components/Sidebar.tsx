import { tabs } from "@/lib/constants";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
	return (
		<nav className="lg:flex flex-col w-72 border-r fixed left-0 bottom-0 top-0 py-8 pl-4 hidden gap-8">
			<div className="flex items-center font-semibold text-lg">
				{/* Insert ICON here */}
				<h4>Vortex</h4>
			</div>

			{/* USER PROFILE  */}
			<div className="flex items-center gap-4">
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
			</div>

			<ul className="flex flex-col gap-6">
				{tabs.map((tab) => (
					<SidebarLink {...tab} />
				))}
			</ul>
		</nav>
	);
};

export default Sidebar;
