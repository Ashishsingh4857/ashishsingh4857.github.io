import { useState, useEffect } from "react";

export function usePortfolio() {
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
	}, []);

	return { data, loading, error };
}
