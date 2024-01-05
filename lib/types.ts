import { ReactElement } from "react";

export interface SidebarLinkProps {
	title: string;
	href: string;
	icon: ReactElement;
	index: number;
}
export interface UserFameProps {
	posts: number;
	followers: number;
	following: number;
}
