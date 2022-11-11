import React from "react";
import { ObjectLayout } from "../../widgets/custom";
import Profile from "../../assets/profile.jpg";
import Blob from "../../assets/blob.png";
import TrackVisibility from "react-on-screen";

const About = () => {
	return (
		<div className="mt-10" id="about">
			<ObjectLayout title="About">
				<div className="flex flex-col sm:flex-row justify-between align-middle">
					<TrackVisibility className="flex-1" once>
						{({ isVisible }) => (
							<div>
								<h2
									className={`text-4xl mb-4 font-normal leading-14 animate__animated ${
										isVisible ? "animate__flipInX opacity-100" : "opacity-0"
									}`}
								>
									I am a passionate <strong>Full-stack developer</strong> with a
									keen eye for details.
								</h2>
								<p
									className={`leading-8 animate__animated ${
										isVisible ? "animate__flipInX opacity-100" : "opacity-0"
									}`}
									style={{
										animationDelay: "500ms",
									}}
								>
									My name is Nassim Fatmi 21 years old, Fifth year Computer
									science student (at Higher school of computer science ESI
									Algiers, Option Software engineering), i am very passionate
									person, technologies enthusiast and fast self learner, In love
									with perfection.
								</p>
							</div>
						)}
					</TrackVisibility>
					<TrackVisibility once>
						{({ isVisible }) => (
							<div className="relative mx-auto mt-10 flex-shrink">
								<img
									className={`h-72 w-72 animate__animated ${
										isVisible ? "animate__zoomIn opacity-100" : "opacity-0"
									}`}
									src={Blob}
									alt="blob"
								/>
								<img
									className={`h-40 w-40 absolute top-16 left-14 rounded-lg animate__animated ${
										isVisible ? "animate__zoomInDown opacity-100" : "opacity-0"
									}`}
									style={{
										animationDelay: "500ms",
									}}
									src={Profile}
									alt="nassim famti"
								/>
							</div>
						)}
					</TrackVisibility>
				</div>
			</ObjectLayout>
		</div>
	);
};

export default About;
