const DropDownMenu = ({ open, setOpen }) => {
    return (
        <nav>
            <div className="flex flex-col gap-3 absolute top-18 -translate-x-32 w-[155px] px-3 py-3 bg-gray-100 font-light rounded-[15px] text-center">
                <div className="px-2 py-2 bg-white hover:bg-gray-200 rounded-[15px] transition-colors">
                    <a href="#about" onClick={() => setOpen(!open)}>ABOUT</a>
                </div>
                <div className="px-2 py-2 bg-white hover:bg-gray-200 rounded-[15px] transition-colors">
                    <a href="#projects" onClick={() => setOpen(!open)}>PROJECTS</a>
                </div>
                <div className="px-2 py-2 bg-white hover:bg-gray-200 rounded-[15px] transition-colors">
                    <a href="#contact" onClick={() => setOpen(!open)}>CONTACT</a>
                </div>
                <div className="px-2 py-2 bg-white hover:bg-gray-200 rounded-[15px] transition-colors">
                    <a onClick={() => setOpen(!open)}>RESUME</a>
                </div>
            </div>        
        </nav>
        
    )
};

export default DropDownMenu