import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PortfolioProvider } from "./Context/PortfolioContext.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<PortfolioProvider>
		<ThemeProvider>
			<BrowserRouter basename={import.meta.env.BASE_URL}>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</PortfolioProvider>,
);
