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

export interface PhotoProps {
	id: number;
	title: string;
	url: string;
}

declare module "next-auth" {
	interface User {
		username: string;
	}
}
