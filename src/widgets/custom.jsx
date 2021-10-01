import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export const ArrowBtn = ({ handler, text }) => {
	return (
		<button className="flex items-center relative" onClick={handler}>
			<span className="absolute left-0 h-10 w-10 bg-hoverColor rounded-full"></span>
			<span className="z-10 mx-2 uppercase">{text}</span>{" "}
			<AiOutlineArrowRight />
		</button>
	);
};

export const ObjectLayout = ({ title, children }) => {
	return (
		<div className="pb-section">
			<h2 className="text-6xl md:text-7xl">{title} &#x7B;</h2>
			<div className="border-l-2 py-5 pl-5 md:pl-16 my-5">{children}</div>
			<h2 className="text-7xl">&#x7D;</h2>
		</div>
	);
};
