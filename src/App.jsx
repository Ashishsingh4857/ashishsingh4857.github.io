import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Loader from "./components/Loader";

function App() {
	const [showLoader, setShowLoader] = useState(true);

	return (
		<>
			{/* Loader overlay ki tarah chalega, peeche data fetch hota rahega */}
			{showLoader && (
				<Loader onFinish={() => setShowLoader(false)} />
			)}

			{/* Data background me load ho jayega Loader ke time me hi */}
			<div style={{ display: showLoader ? "none" : "block" }}>
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
			</div>
		</>
	);
}

export default App;
