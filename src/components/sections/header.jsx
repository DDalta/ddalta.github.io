
const Header = () => {
    return (
        <header className="sticky top-0 w-full bg-white shadow-md ">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between py-6 px-4 gap-2">
                    <h1 className="font-semibold text-3xl lg:text-5xl">
                        <span>&lt;</span>
                        DANIEL PERALTA
                        <span>/&gt;</span>
                    </h1>
                    <div className="md:hidden my-auto text-xl cursor-pointer w-8">
                        &#9776;
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