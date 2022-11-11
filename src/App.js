import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import { MainView, FlutterView } from "./pages";
import "animate.css";

const App = () => {
	return (
		<Router>
			<div className="app bg-primary">
				<Switch>
					<Route path="/" exact>
						<MainView />
					</Route>
					<Route path="/flutter">
						<FlutterView />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
