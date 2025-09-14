import ProjectCard from "@/components/layout/projectcard.jsx"
import ScrollReveal from "@/components/layout/scrollreveal.jsx";

import { PROJECTS } from "@/data/data.jsx"

const Projects = () => {
    return (
        <ScrollReveal>
            <section id="projects" className="w-full py-18 bg-secondary-section-color scroll-mt-10">
                <div className="mx-auto max-w-6xl flex flex-col gap-8 px-5">
                    <h2 className="text-center font-semibold text-3xl">PROJECTS</h2>

                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>
        </ScrollReveal>
    )
};

export default Projects;