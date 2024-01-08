import { IoMdMenu } from "react-icons/io";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { tabs } from "@/lib/constants";
import SidebarLink from "./SidebarLink";

const Menu = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<IoMdMenu className="absolute mt-3 ml-2 w-10 h-10 left-2 top-5 block lg:hidden text-accent " />
			</SheetTrigger>
			<SheetContent>
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
