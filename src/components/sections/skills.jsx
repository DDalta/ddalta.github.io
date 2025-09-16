import ScrollReveal from "@/components/layout/scrollreveal.jsx";

import { SKILLS } from "@/data/data.jsx"

const Skills = () => {
    return (
        <section id="skills" className="w-full py-18 bg-white dark:bg-gray-950 transition-colors duration-300">
            <ScrollReveal>
                <div className="mx-auto max-w-6xl flex flex-col gap-8 px-5">
                    <h2 className="text-center font-semibold text-3xl">TOOLS & SKILLS</h2>
                    {/* SKILLS GRID */}
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                            {SKILLS.map((skill, index) => {
                                const SkillIcon = skill.icon;
                                return (
                                    <div key={index} className="flex flex-col gap-2 text-center">
                                        <SkillIcon className="mx-auto size-14 hover:-translate-y-1 transition-transform"/>
                                        <p className="font-light text-xl">{skill.label}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
};

export default Skills;