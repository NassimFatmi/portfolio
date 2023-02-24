import React from "react";
import Flutter from "../../assets/flutter.png";
import { ArrowBtn } from "../../widgets/custom";

function FlutterHome() {
	return (
		<div className="h-screen" id="flutter-home">
			<div className="relative grid md:grid-cols-2 h-full place-content-center">
				<div
					className="mt-10 sm:mt-0 flex mx-auto justify-center relative bg-white rounded-full w-56 h-56 sm:w-96 sm:h-96"
					style={{
						boxShadow: "rgb(255 255 255 / 50%) 0px 0px 40px 6px",
					}}
				>
					<img
						className="rig w-24 sm:w-48 object-contain mr-7 sm:mr-10"
						style={{ position: "relative", zIndex: "10" }}
						src={Flutter}
						alt="landingimage"
					/>
				</div>
				<div className="flex flex-col	justify-center items-start text-center md:text-left">
					<h2 className="main-heading mb-5 animate__animated animate__fadeIn">
						Cross-platform apps with Flutter.
					</h2>
					<p
						className="mb-10 animate__animated animate__fadeIn"
						style={{
							animationDelay: "300ms",
						}}
					>
						I create cross-platform applications for both mobile operating
						systems IOS/Android, with two years of experience.
					</p>
					<a
						href="#projects"
						className="animate__animated animate__fadeIn"
						style={{
							animationDelay: "500ms",
						}}
					>
						<ArrowBtn text="See my work" circleColor="bg-blue-700" />
					</a>
					{/* <div
						className="mt-10 flex justify-center md:justify-start w-full animate__animated animate__fadeIn"
						style={{
							animationDelay: "500ms",
						}}
					>
						{socials.map((link) => {
							return (
								<a
									key={link.name}
									className="link blueHover text-white flex items-center"
									href={link.url}
									rel="noreferrer noopener"
									target="_blank"
								>
									<link.icon />
									<span className="ml-1">{link.name}</span>
								</a>
							);
						})}
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default FlutterHome;
