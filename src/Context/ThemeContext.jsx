import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(() => {
		const saved = localStorage.getItem("theme");
		const dark = saved !== "light";
		if (dark) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
		return dark;
	});

	const toggleTheme = () => {
		const newDark = !isDark;
		setIsDark(newDark);
		if (newDark) document.documentElement.classList.add("dark");
		else document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", newDark ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);
