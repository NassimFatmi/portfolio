import React, { useEffect, useState } from "react";
import { FaAffiliatetheme } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { RiFlutterFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = ({ bgColor, showFlutter = true }) => {
	const [showMenu, setShowMenu] = useState(false);
	const flutterLinks = [
		{
			to: "#home",
			link: "Home",
		},
		{
			to: "#projects",
			link: "Projects",
		},
	];

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
		<nav
			className={`${bgColor} z-20 fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4`}
		>
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
				} absolute left-0 top-full w-full sm:w-min  text-center sm:relative sm:flex ${
					showFlutter ? "bg-primary" : "bg-blue-500"
				} sm:bg-transparent`}
			>
				{showFlutter
					? links.map((link) => (
							<li key={link.to} className="block">
								<a className="link block" href={link.to}>
									{link.link}
								</a>
							</li>
					  ))
					: flutterLinks.map((link) => (
							<li key={link.to} className="block">
								<a className="link block" href={link.to}>
									{link.link}
								</a>
							</li>
					  ))}
				{showFlutter ? (
					<li key={"flutter"} className="block">
						<Link className="flutterLink block" to="/flutter">
							<div className="flex items-center gap-2">
								<RiFlutterFill />
								<span>flutter</span>
							</div>
						</Link>
					</li>
				) : (
					<li key={"Main"} className="block">
						<Link className="mainLink block" to="/">
							<div className="flex items-center gap-2">
								<SiJavascript />
								<span>Main</span>
							</div>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
