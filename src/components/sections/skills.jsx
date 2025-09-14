import ScrollReveal from "@/components/layout/scrollreveal.jsx";

const Skills = () => {
    return (
        <section id="skills" className="w-full py-18">
            <ScrollReveal>
                <div className="mx-auto max-w-6xl flex flex-col gap-8 px-5">
                    <h2 className="text-center font-semibold text-3xl">TOOLS & SKILLS</h2>
                    {/* SKILLS GRID */}
                    <div className="flex flex-col gap-8">
                        {/* ROW 1 */}
                        <div className="flex justify-between">
                            <p className="font-light text-xl">Javascript</p>
                            <p className="font-light text-xl">React</p>
                            <p className="font-light text-xl">Python</p>
                            <p className="font-light text-xl">HTML</p>
                            <p className="font-light text-xl">CSS</p>
                        </div>
                        {/* ROW 2 */}
                        <div className="flex justify-between">
                            <p className="font-light text-xl">Git</p>
                            <p className="font-light text-xl">Flask</p>
                            <p className="font-light text-xl">Godot</p>
                            <p className="font-light text-xl">Figma</p>
                            <p className="font-light text-xl">Tailwindcss</p>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
};

export default Skills;