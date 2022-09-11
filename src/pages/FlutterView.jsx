import React from "react";
import { Navbar, FlutterHome, FlutterProjects, Footer } from "../components";

function FlutterView() {
	return (
		<div className="bg-gradient-to-r from-blue-700 to-blue-500">
			<Navbar
				showFlutter={false}
				bgColor="bg-gradient-to-r from-blue-700 to-blue-500"
			/>
			<div className="container">
				<FlutterHome />
				<FlutterProjects />
				<Footer />
			</div>
		</div>
	);
}

export default FlutterView;
