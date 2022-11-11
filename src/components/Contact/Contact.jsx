import React from "react";
import { ObjectLayout } from "../../widgets/custom";
import { contacts, allSocials } from "../../content/content";
import TrackVisibility from "react-on-screen";

const Contact = () => {
	return (
		<ObjectLayout title="Contact">
			<TrackVisibility once>
				{({ isVisible }) => (
					<div className="grid grid-cols-2" id="contact">
						<div>
							{allSocials.map((link, index) => {
								return (
									<a
										key={link.name}
										className={`link text-white flex items-center animate__animated ${
											isVisible
												? "animate__fadeInLeft opacity-100"
												: "opacity-0"
										}`}
										href={link.url}
										rel="noreferrer noopener"
										target="_blank"
										style={{
											animationDelay: `${index}00ms`,
										}}
									>
										<link.icon />
										<span className="ml-1">{link.name}</span>
									</a>
								);
							})}
						</div>

						<div>
							{contacts.map((contact, index) => {
								return (
									<div
										key={contact.contact}
										className={`contactLink text-white flex items-center animate__animated ${
											isVisible
												? "animate__fadeInLeft opacity-100"
												: "opacity-0"
										}`}
										rel="noreferrer noopener"
										style={{
											animationDelay: `${index + 6}00ms`,
										}}
									>
										<contact.icon />
										<span className="ml-1">{contact.contact}</span>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</TrackVisibility>
		</ObjectLayout>
	);
};

export default Contact;
