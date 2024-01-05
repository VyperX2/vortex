import { FaHome } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { MdAddToPhotos } from "react-icons/md";

const tabs = [
	{ title: "Home", href: "/", icon: <FaHome /> },
	{ title: "Explore", href: "/explore", icon: <MdExplore /> },
	{ title: "People", href: "/people", icon: <MdPeople /> },
	{ title: "Saved", href: "/saved", icon: <FaBookmark /> },
	{ title: "Create", href: "/create", icon: <MdAddToPhotos /> },
];
const Userfame = [
	{
		posts: 5,
		followers: 10,
		following: 20,
	},
];

const usersArray = [
	{
		name: "John Doe",
		img: "https://picsum.photos/200/300?id=1",
	},
	{
		name: "Alice Smith",
		img: "https://picsum.photos/200/300?id=2",
	},
	{
		name: "Bob Johnson",
		img: "https://picsum.photos/200/300?id=3",
	},
	{
		name: "Eva Williams",
		img: "https://picsum.photos/200/300?id=4",
	},
];

export { tabs, Userfame, usersArray };
