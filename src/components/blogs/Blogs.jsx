import React from "react";
import TrackVisibility from "react-on-screen";
import { blogs } from "../../content/content";
import { ObjectLayout } from "../../widgets/custom";

function Blogs() {
	return (
		<div id="blogs">
			<ObjectLayout title="Blogs">
				{blogs.map((blog) => (
					<TrackVisibility key={blog.title} once>
						{({ isVisible }) => (
							<div
								className={`max-w-md border rounded-md overflow-hidden animate__animated ${
									isVisible ? "animate__zoomIn opacity-100" : "opacity-0"
								}`}
							>
								<img
									className="w-full max-h-96 object-cover"
									src={blog.image}
									alt="chattapp"
								/>
								<div className="text-center flex flex-col justify-between">
									<h3 className="p-3 text-lg">{blog.title}</h3>
									<div className="text-left p-3">
										<p>
											<strong>Resume: </strong>
											{blog.resume}
										</p>
									</div>
									<div className="mb-3">
										<a
											href={blog.link}
											rel="noreferrer"
											className="link bg-gray-900 mr-2 inline-block"
											target="_blank"
										>
											Read all
										</a>
									</div>
								</div>
							</div>
						)}
					</TrackVisibility>
				))}
			</ObjectLayout>
		</div>
	);
}

export default Blogs;
