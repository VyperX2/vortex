import { IoMdMenu } from "react-icons/io";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { tabs } from "@/lib/constants";
import SidebarLink from "./SidebarLink";
import UserDisplay from "./UserDisplay";

const Menu = async () => {
	return (
		<Sheet>
			<SheetTrigger>
				<IoMdMenu className=" w-10 h-10  block lg:hidden text-accent " />
			</SheetTrigger>
			<SheetContent>
				<div className="mb-2">
					<UserDisplay />
				</div>
				<ul className="flex flex-col ">
					{tabs.map((tab, index) => (
						<SidebarLink {...tab} index={index} key={index} />
					))}
				</ul>
			</SheetContent>
		</Sheet>
	);
};

export default Menu;
