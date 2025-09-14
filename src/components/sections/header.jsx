import { useState } from "react";

import DropDownMenu from "../layout/dropdown.jsx"

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between py-6 px-4 gap-2">
                    <h1 className="font-semibold text-3xl lg:text-5xl">
                        <span>&lt;</span>
                        DANIEL PERALTA
                        <span>/&gt;</span>
                    </h1>
                    <div className="md:hidden my-auto text-xl cursor-pointer w-8">
                        <a className="select-none" onClick={() => setOpen(!open)}>&#9776;</a>
                        {open && <DropDownMenu open={open} setOpen={setOpen}/>}
                    </div>
                    <nav className="hidden md:flex space-x-5 lg:space-x-7 justify-between items-center font-light text-lg">
                        <a href="#about">ABOUT</a>
                        <a href="#projects">PROJECTS</a>
                        <a href="#contact">CONTACT</a>
                        <div className="px-3 py-1 rounded-[18px] bg-[#88b5fc] hover:bg-[#a7c7fa]">
                            <a href="">RESUME</a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default Header;