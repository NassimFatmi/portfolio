import React, { useEffect, useState } from "react";
import { FaAffiliatetheme } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const links = [
		{
			to: "#home",
			link: "Home",
		},
		{
			to: "#about",
			link: "About",
		},
		{
			to: "#skills",
			link: "Skills",
		},
		{
			to: "#projects",
			link: "Projects",
		},
		{
			to: "#contact",
			link: "Contact",
		},
	];
	useEffect(() => {
		window.addEventListener("scroll", () => {});
		return () => {};
	}, []);
	return (
		<nav className="bg-primary z-20 fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4">
			<div>
				<FaAffiliatetheme size="2.5rem" color="white" />
			</div>
			<div className="sm:hidden" onClick={() => setShowMenu(!showMenu)}>
				<AiOutlineMenu size="1.5rem" />
			</div>
			<ul
				style={{ zIndex: "1000" }}
				className={`${
					!showMenu ? "hidden" : "block"
				} absolute left-0 top-full w-full sm:w-min bg-primary text-center sm:relative sm:flex`}
			>
				{links.map((link) => (
					<li key={link.to} className="block">
						<a className="link block" href={link.to}>
							{link.link}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
