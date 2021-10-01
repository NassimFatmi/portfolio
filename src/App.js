import React from "react";
import {
	Navbar,
	Home,
	About,
	Skills,
	Projects,
	Contact,
	Footer,
} from "./components";

const App = () => {
	return (
		<div className="app bg-primary">
			<Navbar />
			<div className="container">
				<Home />
				<About />
				<Skills />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default App;
