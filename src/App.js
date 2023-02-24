import React from "react";
import { MainView } from "./pages";
import "animate.css";

const App = () => {
	return (
		// <Router>
		<div className="app bg-primary">
			{/* <Switch> */}
			{/* <Route path="/" exact> */}
			<MainView />
			{/* </Route> */}
			{/* <Route path="/flutter">
						<FlutterView />
					</Route> */}
			{/* </Switch> */}
		</div>
		// </Router>
	);
};

export default App;
