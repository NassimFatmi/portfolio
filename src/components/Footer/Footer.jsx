import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
	return (
		<div className="flex justify-center items-center py-5">
			Crafted with love{" "}
			<span className="mx-2">
				<AiFillHeart color="red" />
			</span>
			by <strong className="mx-2">Nassim Fatmi</strong> &copy;{" "}
			{new Date().getFullYear()}
		</div>
	);
};

export default Footer;
