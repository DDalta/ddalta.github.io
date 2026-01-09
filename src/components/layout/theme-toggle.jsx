import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme, ...props }) => {

    return (
        <button { ...props } aria-label="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
    )
}

export default ThemeToggle;