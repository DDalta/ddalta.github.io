const DropDownMenu = ({ children }) => {
    return (
        <nav>
            <div className="flex flex-col gap-3 absolute top-18 -translate-x-32 w-[155px] px-3 py-3 bg-gray-200
                            dark:bg-gray-900 font-light text-base rounded-[15px] text-center">
                {children}
            </div>        
        </nav>
        
    )
};

export default DropDownMenu