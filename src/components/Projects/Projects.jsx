import React from "react";
import { ObjectLayout } from "../../widgets/custom";
import { projects } from "../../content/content";

const Projects = () => {
	return (
		<div id="projects">
			<ObjectLayout title="Projects">
				<h2 className="text-4xl font-bold mb-2">Crafted with love.</h2>
				<p>These are a collection of my work.</p>
				<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
					{projects.map((project) => (
						<div
							key={project.name}
							className="border rounded-md overflow-hidden"
						>
							<img className="w-full" src={project.image} alt="chattapp" />
							<div className="text-center flex flex-col justify-between">
								<h3 className="p-3 text-lg">{project.name}</h3>
								<div className="text-left p-3">
									<p>
										<strong>Overview: </strong>
										{project.overview}
									</p>
									<p>
										<strong>Technologies: </strong>
										{"[ "}
										{project.technologies.map((tech) => (
											<span className="text-pColor">{tech + ", "}</span>
										))}
										{" ]"}
									</p>
								</div>
								<div className="mb-3">
									<a
										href={project.code}
										rel="noreferrer"
										className="link bg-gray-900 mr-2 inline-block"
										target="_blank"
									>
										See code
									</a>
									<a
										href={project.live}
										rel="noreferrer"
										className="link bg-gray-900 inline-block"
										target="_blank"
									>
										Live
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</ObjectLayout>
		</div>
	);
};

export default Projects;
