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
import FlutterView from "./FlutterView";

function MainView() {
	return (
		<>
			<Navbar bgColor="bg-primary" />
			<div className="container">
				<Home />
				<About />
				<Skills />
				<Projects />
			</div>
			<FlutterView />
			<div className="container">
				<Blogs />
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default MainView;
