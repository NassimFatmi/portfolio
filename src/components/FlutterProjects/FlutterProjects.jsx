import React from "react";
import { ObjectLayout } from "../../widgets/custom";
import { flutterProjects } from "../../content/content";
import { FaGooglePlay } from "react-icons/fa";
import TrackVisibility from "react-on-screen";

function FlutterProjects() {
	return (
		<div id="flutter-projects">
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
					{flutterProjects.map((project) => (
						<div
							key={project.name}
							className="border rounded-md overflow-hidden"
						>
							<img className="w-300" src={project.image} alt="chattapp" />
							<div className="text-center flex flex-col justify-between">
								<h3 className="p-3 text-lg">{project.name}</h3>
								<div className="text-left p-3">
									<p>
										<strong>Overview: </strong>
										{project.overview}
									</p>
									<p>
										<strong>Libs: </strong>
										{"[ "}
										{project.libs.map((tech, index) => (
											<span key={index} className="text-pColor">
												{tech + ", "}
											</span>
										))}
										{" ]"}
									</p>
								</div>
								<div className="mb-3">
									{project.code && (
										<a
											href={project.code}
											rel="noreferrer"
											className="link bg-gray-900 mr-2 inline-block"
											target="_blank"
										>
											See code
										</a>
									)}
									{project.app && (
										<a
											href={project.app}
											rel="noreferrer"
											className="link bg-blue-900 inline-block"
											target="_blank"
										>
											<span className="flex items-center gap-2">
												<FaGooglePlay />
												Google store
											</span>
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</ObjectLayout>
		</div>
	);
}

export default FlutterProjects;
