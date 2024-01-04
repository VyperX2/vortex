import React from "react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
	return (
		<nav className="relative ml-72 py-4">
			<Input placeholder="Search for users..." />
		</nav>
	);
};

export default Navbar;
