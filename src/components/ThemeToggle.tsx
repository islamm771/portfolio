"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button className="rounded-lg p-2 cursor-pointer">
                <FiSun />
            </button>
        );
    }

    return (
        <button
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="rounded-lg p-2 cursor-pointer hover:bg-surface"
        >
            {resolvedTheme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
    );
}