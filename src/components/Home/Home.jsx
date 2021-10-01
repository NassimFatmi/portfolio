import React from "react";
import { ArrowBtn } from "../../widgets/custom";
import Landing from "../../assets/landing.png";
import { socials } from "../../content/content";
const Home = () => {
	return (
		<div className="h-screen" id="home">
			<div className="absolute top-1/2 left-1/2 transform h-80 w-80 md:h-120 md:w-120 -translate-x-1/2 -translate-y-1/2 bg-hoverColor rounded-full"></div>
			<div className="relative grid md:grid-cols-2 h-full place-content-center">
				<div className="md:order-2 flex justify-center relative">
					<div
						className="absolute left-auto top-1/2 transform text-6xl md:text-xxx"
						style={{ lineHeight: "0" }}
					>
						X
					</div>
					<img
						className="rig w-1/2 object-contain"
						style={{ position: "relative", zIndex: "10" }}
						src={Landing}
						alt="landingimage"
					/>
				</div>
				<div className="flex flex-col	justify-center items-start text-center md:text-left">
					<h2 className="main-heading mb-5">
						Creative motion designer & developer.
					</h2>
					<p className="text-pColor mb-10">
						Hi i'am Nassim Fatmi. A passionate Motion Designer and Fullstack
						Developer based in Algeria
					</p>
					<ArrowBtn text="See my work" />
					<div className="mt-10 flex justify-center md:justify-start w-full">
						{socials.map((link) => {
							return (
								<a
									key={link.name}
									className="link text-white flex items-center"
									href={link.url}
									rel="noreferrer noopener"
									target="_blank"
								>
									<link.icon />
									<span className="ml-1">{link.name}</span>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
