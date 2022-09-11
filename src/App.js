import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { MainView, FlutterView } from "./pages";

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
