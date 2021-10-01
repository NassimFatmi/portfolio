import React from "react";
import { ObjectLayout } from "../../widgets/custom";

const About = () => {
	return (
		<div className="mt-10" id="about">
			<ObjectLayout title="About">
				<h2 className="text-4xl mb-4 font-normal leading-14">
					I am a passionate <strong>Full-stack developer</strong> and{" "}
					<strong>Motion Designer</strong> with a keen eye for details.
				</h2>
				<p className="leading-8">
					My name is Nassim Fatmi 20 years old, Fourth year Computer science
					student (at Higher school of computer science ESI Algiers, Option
					Software engineering), i am very passionate person, technologies
					enthusiast and fast self learner, In love with perfection.
				</p>
			</ObjectLayout>
		</div>
	);
};

export default About;
