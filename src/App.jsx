import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Loader from "./components/Loader";

function App() {
	const [showLoader, setShowLoader] = useState(true);

	if (showLoader) {
		return <Loader onFinish={() => setShowLoader(false)} />;
	}

	return (
		<Layout>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/project/:id"
					element={<ProjectDetails />}
				/>
			</Routes>
		</Layout>
	);
}

export default App;
