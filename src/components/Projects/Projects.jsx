import React from "react";
import { ObjectLayout } from "../../widgets/custom";
import { projects } from "../../content/content";
import TrackVisibility from "react-on-screen";

const Projects = () => {
	return (
		<div id="projects">
			<ObjectLayout title="Projects">
				<TrackVisibility once>
					{({ isVisible }) => (
						<>
							<h2
								className={`text-4xl font-bold mb-2 animate__animated ${
									isVisible ? "animate__fadeIn opacity-100" : "opacity-0"
								}`}
								style={{ animationDelay: "300ms" }}
							>
								Crafted with love.
							</h2>
							<p
								className={`animate__animated ${
									isVisible ? "animate__fadeIn opacity-100" : "opacity-0"
								}`}
								style={{ animationDelay: "500ms" }}
							>
								These are a collection of my work.
							</p>
						</>
					)}
				</TrackVisibility>
				<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
					{projects.map((project) => (
						<TrackVisibility key={project.name} once>
							{({ isVisible }) => (
								<div
									className={`border rounded-md overflow-hidden animate__animated ${
										isVisible ? "animate__zoomIn opacity-100" : "opacity-0"
									}`}
									style={{ animationDelay: "200ms" }}
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
												{project.technologies.map((tech, index) => (
													<span key={index} className="text-pColor">
														{tech + ", "}
													</span>
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
							)}
						</TrackVisibility>
					))}
				</div>
			</ObjectLayout>
		</div>
	);
};

export default Projects;
