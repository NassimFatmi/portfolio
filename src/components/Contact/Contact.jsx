import React from "react";
import { ObjectLayout } from "../../widgets/custom";
import { contacts, allSocials } from "../../content/content";

const Contact = () => {
	return (
		<ObjectLayout title="Contact">
			<div className="grid grid-cols-2" id="contact">
				<div>
					{allSocials.map((link) => {
						return (
							<a
								key={link.name}
								className="link text-white flex items-center"
								href={link.url}
								rel="noreferrer noopener"
								target="_blank"
							>
								<link.icon />
								<span className="ml-1">{link.name}</span>
							</a>
						);
					})}
				</div>
				<div>
					{contacts.map((contact) => {
						return (
							<div
								key={contact.contact}
								className="link text-white flex items-center"
								rel="noreferrer noopener"
							>
								<contact.icon />
								<span className="ml-1">{contact.contact}</span>
							</div>
						);
					})}
				</div>
			</div>
		</ObjectLayout>
	);
};

export default Contact;
