import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
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
