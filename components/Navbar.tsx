import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import Menu from "./Menu";

const Navbar = () => {
	return (
		<nav className=" w-full md:w-auto flex gap-2 ">
			<IoSearch
				className="absolute mt-3 ml-2 w-5 h-5 mr-2 text-red-800"
				style={{ color: "whitesmoke", opacity: "0.7" }}
			/>
			<Input placeholder="Search for users..." className="pl-8 py-5 flex-1" />
			<Menu />
		</nav>
	);
};

export default Navbar;
