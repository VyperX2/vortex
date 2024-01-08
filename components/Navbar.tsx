import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
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

const Navbar = () => {
	return (
		<nav className=" w-full md:w-auto flex container ">
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
			<IoSearch
				className="absolute mt-3 ml-2 w-5 h-5 mr-2 text-red-800"
				style={{ color: "whitesmoke", opacity: "0.7" }}
			/>
			<Input placeholder="Search for users..." className="pl-8 py-5" />
		</nav>
	);
};

export default Navbar;
