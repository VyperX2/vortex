import { Session } from "next-auth";
import { ReactElement } from "react";

export interface SidebarLinkProps {
	title: string;
	href: string;
	icon: ReactElement;
	index: number;
	session: Session;
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

export interface User {
	_id: string;
	username: string;
	password: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	img: string;
	__v: number;
	followers: string[];
	following: string[];
	saved: string[];
}

export interface Post {
	_id: string;
	creator: User;
	caption: string;
	img: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	likes: string[];
}
