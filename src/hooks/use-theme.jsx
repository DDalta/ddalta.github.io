import { useState, useEffect } from "react";

const useTheme = () => {
    // get initial theme (stored theme takes priority over system theme)
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme") || null;
        if (storedTheme) return storedTheme;

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";

        return "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme);
    }

    return { theme, toggleTheme}
}

export default useTheme