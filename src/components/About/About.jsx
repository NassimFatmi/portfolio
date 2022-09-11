import React from "react";
import { ObjectLayout } from "../../widgets/custom";
import Profile from "../../assets/profile.jpg";
import Blob from "../../assets/blob.png";

const About = () => {
	return (
		<div className="mt-10" id="about">
			<ObjectLayout title="About">
				<div className="flex flex-col sm:flex-row justify-between align-middle">
					<div className="flex-1">
						<h2 className="text-4xl mb-4 font-normal leading-14">
							I am a passionate <strong>Full-stack developer</strong> with a
							keen eye for details.
						</h2>
						<p className="leading-8">
							My name is Nassim Fatmi 21 years old, Fifth year Computer science
							student (at Higher school of computer science ESI Algiers, Option
							Software engineering), i am very passionate person, technologies
							enthusiast and fast self learner, In love with perfection.
						</p>
					</div>
					<div className="relative mx-auto mt-10 flex-shrink">
						<img className="h-72 w-72" src={Blob} alt="blob" />
						<img
							className="h-40 w-40 absolute top-16 left-14 rounded-lg"
							src={Profile}
							alt="nassim famti"
						/>
					</div>
				</div>
			</ObjectLayout>
		</div>
	);
};

export default About;
