import React from "react";
import { ObjectLayout } from "../../widgets/custom";
import {
	frontDevSkills,
	backDevSkills,
	motionSkills,
} from "../../content/content";
import TrackVisibility from "react-on-screen";

const Skills = () => {
	return (
		<ObjectLayout title="Skills">
			<TrackVisibility once>
				{({ isVisible }) => (
					<div
						id="skills"
						className={`mb-5 animate__animated ${
							isVisible ? "animate__fadeIn opacity-100" : "opacity-0"
						}`}
					>
						<h3 className="text-4xl">Programming &#x7B;</h3>
						<div className="border-l-2 pl-5 md:pl-16 my-5 text-text grid grid-cols-2">
							<div>
								{frontDevSkills.map((skill) => (
									<div key={skill.name} className="link flex items-center mb-2">
										<skill.icon size="1.5rem" />{" "}
										<span className="ml-2 text-lg">{skill.name}</span>
									</div>
								))}
							</div>
							<div>
								{backDevSkills.map((skill) => (
									<div key={skill.name} className="link flex items-center mb-2">
										<skill.icon size="1.5rem" />{" "}
										<span className="ml-2 text-lg">{skill.name}</span>
									</div>
								))}
							</div>
						</div>
						<h3 className="text-4xl">&#x7D;</h3>
					</div>
				)}
			</TrackVisibility>
			<TrackVisibility once>
				{({ isVisible }) => (
					<div
						className={`animate__animated ${
							isVisible ? "animate__fadeIn opacity-100" : "opacity-0"
						}`}
					>
						<h3 className="text-4xl">Motion &#x7B;</h3>
						<div className="border-l-2 my-5 pl-5 md:pl-16">
							{motionSkills.map((skill) => (
								<div key={skill.name} className="link flex items-center mb-2">
									<skill.icon size="1.5rem" />{" "}
									<span className="ml-2 text-lg">{skill.name}</span>
								</div>
							))}
						</div>
						<h3 className="text-4xl">&#x7D;</h3>
					</div>
				)}
			</TrackVisibility>
		</ObjectLayout>
	);
};

export default Skills;
