"use client";

import { useState, useEffect } from "react";

const ToggleTheme = () => {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		const theme = window.localStorage.getItem("theme");
		if (theme === "dark") {
			setDarkMode(true);
		}
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
			window.localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			window.localStorage.setItem("theme", "light");
		}
	}, [darkMode]);
	return (
		<label className="inline-flex items-center me-5 cursor-pointer">
			<input
				type="checkbox"
				value=""
				className="sr-only peer"
				checked={darkMode}
				onChange={() => setDarkMode(!darkMode)}
			></input>
			<div className="relative w-11 h-6 bg-gray-200  rounded-full peer peer-focus:ring-4 peer-focus:ring-slate-100 dark:peer-focus:ring-black dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
			<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
				
			</span>
		</label>
	);
};

export default ToggleTheme;
