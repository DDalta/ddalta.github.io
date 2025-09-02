const Skills = () => {
    return (
        <div className="flex flex-col gap-[10px] px-[260px] py-[45px]">
            <p className="text-center font-semibold text-[32px]">TOOLS & SKILLS</p>
            {/* SKILLS GRID */}
            <div className="flex flex-col gap-[15px] py-[10px]">
                {/* ROW 1 */}
                <div className="flex justify-between">
                    <p className="font-light text-[20px]">Javascript</p>
                    <p className="font-light text-[20px]">React</p>
                    <p className="font-light text-[20px]">Python</p>
                    <p className="font-light text-[20px]">HTML</p>
                    <p className="font-light text-[20px]">CSS</p>
                </div>
                {/* ROW 2 */}
                <div className="flex justify-between">
                    <p className="font-light text-[20px]">Git</p>
                    <p className="font-light text-[20px]">Flask</p>
                    <p className="font-light text-[20px]">Godot</p>
                    <p className="font-light text-[20px]">Figma</p>
                    <p className="font-light text-[20px]">Tailwindcss</p>
                </div>
            </div>
        </div>
    )
};

export default Skills;