import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import TrackVisibility from "react-on-screen";

export const ArrowBtn = ({ handler, text, circleColor = "bg-hoverColor" }) => {
	return (
		<button className="flex items-center relative" onClick={handler}>
			<span
				className={`absolute left-0 h-10 w-10 ${circleColor} rounded-full`}
			></span>
			<span className="z-10 mx-2 uppercase">{text}</span>{" "}
			<AiOutlineArrowRight />
		</button>
	);
};

export const ObjectLayout = ({ title, children }) => {
	return (
		<div className="pb-section">
			<TrackVisibility once>
				{({ isVisible }) => (
					<h2
						className={`text-6xl md:text-7xl animate__animated ${
							isVisible ? "animate__fadeIn opacity-100" : "opacity-0"
						}`}
					>
						{title} &#x7B;
					</h2>
				)}
			</TrackVisibility>

			<div className="border-l-2 py-5 pl-5 md:pl-16 my-5">{children}</div>
			<TrackVisibility once>
				{({ isVisible }) => (
					<h2
						className={`text-7xl animate__animated ${
							isVisible ? "animate__fadeIn opacity-100" : "opacity-0"
						}`}
					>
						&#x7D;
					</h2>
				)}
			</TrackVisibility>
		</div>
	);
};
