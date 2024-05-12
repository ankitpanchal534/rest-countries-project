"use client";

import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  function switchTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <header className="flex py-6 h-20 shadow-xl border-2 justify-center bg-white dark:bg-verydarkBlue ">
      <div className="px-4 md:px-10 w-full flex justify-between items-center">
        <h3 className="font-bold text-sm md:text-xl dark:text-white">
          Where in the world?
        </h3>
        <div
          className="flex items-center gap-2 cursor-pointer select-none"
          onClick={switchTheme}
        >
          <img
            src="/icons/icon_theme.png"
            className="h-4 w-4"
            alt="icon theme switch"
          />

          <span className="capitalize">
            {theme == "light" ? "Dark" : "Light"} Mode
          </span>
        </div>
      </div>
    </header>
  );
}
