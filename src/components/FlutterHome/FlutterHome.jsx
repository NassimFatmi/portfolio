import React from "react";
import { socials } from "../../content/content";
import Flutter from "../../assets/flutter.png";
import { ArrowBtn } from "../../widgets/custom";

function FlutterHome() {
	return (
		<div className="h-screen" id="home">
			<div className="relative grid md:grid-cols-2 h-full place-content-center">
				<div className="mt-10 sm:mt-0 flex mx-auto justify-center relative bg-white rounded-full w-56 h-56 sm:w-96 sm:h-96">
					<img
						className="rig w-24 sm:w-48 object-contain mr-7 sm:mr-10"
						style={{ position: "relative", zIndex: "10" }}
						src={Flutter}
						alt="landingimage"
					/>
				</div>
				<div className="flex flex-col	justify-center items-start text-center md:text-left">
					<h2 className="main-heading mb-5">
						Cross-platform apps with Flutter.
					</h2>
					<p className="mb-10">
						I create cross-platform applications for both mobile operating
						systems IOS/Android, with two years of experience.
					</p>
					<a href="#projects">
						<ArrowBtn circleColor="bg-blue-400" text="See my work" />
					</a>
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
}

export default FlutterHome;
