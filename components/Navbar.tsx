import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import Menu from "./Menu";
import SearchUser from "./SearchUser";

const Navbar = () => {
	return (
		<nav className=" w-full md:w-auto flex gap-2 ">
			<SearchUser />
			<Menu />
		</nav>
	);
};

export default Navbar;
