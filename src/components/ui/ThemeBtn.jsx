import React from "react";
import { Icons } from "../Icons";

const ThemeBtn = ({ theme, setTheme }) => {
	const cycle = () => {
		const order = ["system", "dark", "light"];
		const idx = order.indexOf(theme);
		const next = order[(idx + 1) % order.length];
		setTheme(next);
	};

	return (
		<button
			aria-label="Cambiar tema"
			onClick={cycle}
			className="size-11 items-center justify-center flex rounded-full bg-gray-200 dark:bg-black text-sm text-black dark:text-white cursor-pointer"
			title={`Tema: ${theme} (click para cambiar)`}
		>
			{
      theme === "system" ? <Icons.System color="currentColor" size={20} /> : 
      theme === "dark" ? <Icons.Dark color="currentColor" size={20} /> 
      : <Icons.Light color="currentColor" size={20} />}

		</button>
	);
};

export default ThemeBtn;
