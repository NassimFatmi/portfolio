import React from "react";
import { ArrowBtn } from "../../widgets/custom";
import Landing from "../../assets/landing.png";
import { socials } from "../../content/content";
const Home = () => {
	return (
		<div className="h-screen" id="home">
			<div
				className="absolute top-1/2 left-1/2 transform h-60 w-60 md:h-120 md:w-120 -translate-x-1/2 -translate-y-1/2 bg-hoverColor rounded-full opacity-80"
				style={{
					boxShadow: "rgb(255 255 255 / 30%) 0px 0px 40px 6px",
				}}
			></div>
			<div className="relative grid md:grid-cols-2 h-full place-content-center">
				<div className="md:order-2 flex justify-center relative">
					<div
						className="absolute left-auto top-1/2 transform text-6xl hidden md:text-xxx md:visible"
						style={{ lineHeight: "0" }}
					>
						X
					</div>
					<img
						className="w-1/2 object-contain rig"
						style={{ position: "relative", zIndex: "10" }}
						src={Landing}
						alt="landingimage"
					/>
				</div>
				<div className="flex flex-col	justify-center items-start text-center md:text-left">
					<h2 className="main-heading mb-5 animate__animated animate__fadeIn">
						Creative Software Engineer.
					</h2>
					<p
						className="text-pColor mb-10 animate__animated animate__fadeIn"
						style={{
							animationDelay: "300ms",
						}}
					>
						Hi i'am Nassim FATMI. Passionate Software Engineer & Fullstack
						Developer based in Algeria
					</p>
					<a
						href="#projects"
						className="animate__animated animate__fadeIn"
						style={{
							animationDelay: "500ms",
						}}
					>
						<ArrowBtn text="See my work" />
					</a>
					<div
						className="mt-10 flex justify-center md:justify-start w-full animate__animated animate__fadeIn"
						style={{
							animationDelay: "500ms",
						}}
					>
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
