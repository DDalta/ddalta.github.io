import { useState, useEffect } from "react";

const ThemeToggle = () => {

    // get initial theme (stored theme takes priority over system theme)
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem("theme") || null;
        if (storedTheme) return storedTheme;

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";

        return "light";
    })

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark"
        localStorage.setItem("theme", newTheme)
        setTheme(newTheme);
    }

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
    }, [theme])

    return (
        <div className="px-4 py-4 bg-gray-400">
            <button onClick={toggleTheme}>TOGGLE THEME</button>
        </div>
    )
}

export default ThemeToggle;