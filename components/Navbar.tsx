import React from "react";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
	return (
		<nav className="lg:ml-[300px] w-[300px] ml-6 md:w-auto py-8 flex sm:items-start">
			<IoSearch className="absolute mt-3 ml-2 w-5 h-5 mr-2" />
			<Input placeholder="Search for users..." className="pl-8 py-5" />
		</nav>
	);
};

export default Navbar;
