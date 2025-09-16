import { useState } from "react";

import DropDownMenu from "@/components/layout/dropdown.jsx"
import ThemeToggle from "@/components/layout/theme-toggle.jsx";
import useTheme from "@/hooks/use-theme.jsx"

import { NAV } from "@/data/data.jsx"

const Header = () => {

    const [open, setOpen] = useState(false);
    const {theme, toggleTheme} = useTheme();

    return (
        <header className="sticky top-0 w-full bg-white dark:bg-gray-950 shadow-md z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between content-center py-6 px-4 gap-2">
                    <h1 className="font-semibold text-2xl lg:text-5xl">
                        <span>&lt;</span>   
                        DANIEL PERALTA
                        <span>/&gt;</span>
                    </h1>
                    <div className="md:hidden my-auto text-xl cursor-pointer w-8">
                        <a className="select-none" onClick={() => setOpen(!open)}>&#9776;</a>
                        {
                            open && 
                            <DropDownMenu>
                                {NAV.map((link, index) => (
                                    <div key={index} className="px-2 py-2 bg-white hover:bg-gray-200 dark:bg-gray-950 dark:hover:bg-gray-900 rounded-[15px] transition-colors">
                                        <a href={link.url} onClick={() => setOpen(!open)}>{link.label}</a>
                                    </div>
                                ))}
                                <ThemeToggle className="flex items-center justify-center w-10 h-10 rounded-xl bg-white hover:bg-gray-200 dark:hover:bg-gray-950 dark:bg-gray-900 transition-colors duration-300" 
                                        theme={theme} toggleTheme={toggleTheme} />
                            </DropDownMenu>
                        }
                    </div>
                    <nav className="hidden md:flex space-x-5 lg:space-x-7 justify-between items-center font-light text-base lg:text-lg">
                        <a href="#about">ABOUT</a>
                        <a href="#projects">PROJECTS</a>
                        <a href="#contact">CONTACT</a>
                        <div className="px-3 py-1 rounded-[18px] bg-blue-300 hover:bg-blue-400 dark:bg-blue-900 dark:hover:bg-blue-950 transition-colors duration-300">
                            <a href="/resume.pdf">RESUME</a>
                        </div>
                        <ThemeToggle className="flex items-center justify-center w-10 h-10 bg-white hover:bg-gray-200 dark:bg-gray-950 dark:hover:bg-gray-900
                                                rounded-xl transition-colors duration-300" 
                                        theme={theme} toggleTheme={toggleTheme} />
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default Header;