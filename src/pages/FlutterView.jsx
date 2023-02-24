import React from "react";
import { FlutterHome, FlutterProjects } from "../components";

function FlutterView() {
	return (
		<div id="flutter" className="bg-gradient-to-r from-blue-700 to-blue-500">
			{/* <Navbar
				showFlutter={false}
				bgColor="bg-gradient-to-r from-blue-700 to-blue-500"
			/> */}
			<div className="container mb-5">
				<FlutterHome />
				<FlutterProjects />
				{/* <Footer /> */}
			</div>
		</div>
	);
}

export default FlutterView;
