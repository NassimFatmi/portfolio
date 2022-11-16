import React from "react";
import {
	Navbar,
	Home,
	About,
	Skills,
	Projects,
	Contact,
	Footer,
	Blogs,
} from "../components";

function MainView() {
	return (
		<>
			<Navbar bgColor="bg-primary" />
			<div className="container">
				<Home />
				<About />
				<Skills />
				<Projects />
				<Blogs />
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default MainView;
