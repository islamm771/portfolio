"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const { theme = "dark", setTheme } = useTheme();
    return (
        <button
            className="transition-all duration-300 hover:bg-surface p-2 rounded-md cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            <FiSun className="hidden dark:block" size={25} />
            <FiMoon className="block dark:hidden" size={25} />
        </button>
    );
}