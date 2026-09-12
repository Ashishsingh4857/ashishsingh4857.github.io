import { createContext, useContext, useEffect, useState } from "react";

const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch("/data/portfolio.json")
			.then((res) => {
				if (!res.ok) throw new Error("JSON not found");
				return res.json();
			})
			.then((json) => {
				setData(json);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []); // sirf ek baar pure app me

	return (
		<PortfolioContext.Provider value={{ data, loading, error }}>
			{children}
		</PortfolioContext.Provider>
	);
};

export const usePortfolio = () => {
	const ctx = useContext(PortfolioContext);
	if (!ctx)
		throw new Error("usePortfolio must be inside PortfolioProvider");
	return ctx;
};
