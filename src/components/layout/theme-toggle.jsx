import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme, ...props }) => {

    return (
        <button { ...props } onClick={toggleTheme}>
            {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
    )
}

export default ThemeToggle;