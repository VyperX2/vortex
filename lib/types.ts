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
// facing this error cant use image from api check next config
// Unhandled Runtime Error

// Error: Invalid src prop (https://via.placeholder.com/600/92c952) on `next/image`, hostname "via.placeholder.com" is not configured under images in your `next.config.js`
// See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
