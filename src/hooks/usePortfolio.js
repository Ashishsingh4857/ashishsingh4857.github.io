import { useState, useEffect } from "react";
import portfolioData from "../data/portfolio.json";

export const usePortfolio = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		// Abhi local JSON, kal API: fetch('/api/portfolio.json')
		setData(portfolioData);
	}, []);

	return { data };
};
