interface SidebarLinkProps {
	title: string;
	href: string;
	icon: React.FC;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, title, icon }) => {
	return <a href={href}>{title}</a>;
};

export default SidebarLink;
