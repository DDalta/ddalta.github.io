
const Header = () => {
    return (
        <header className="sticky top-0 w-full bg-white shadow-md ">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between py-8 px-4">
                    <h1 className="font-semibold text-5xl lg:text-6xl md:text-4xl">DANIEL PERALTA</h1>
                    {/* <p className="font-semibold text-[64px]">DANIEL PERALTA</p> */}
                    <div className="md:hidden my-auto text-xl cursor-pointer w-8">
                        &#9776;
                    </div>
                    <nav className="hidden md:flex space-x-12 items-center">
                        <a href="#about" className="font-light text-xl">ABOUT</a>
                        <a href="" className="font-light text-xl">PROJECTS</a>
                        <a href="" className="font-light text-xl">CONTACT</a>
                        <a href="" className="font-light text-xl">RESUME</a>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default Header;