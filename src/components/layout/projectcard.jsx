import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    return (
        <div className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-secondary-light dark:shadow-secondary-dark transition-shadow transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-3">
                {/* IMAGE */}
                <img loading="lazy" className="w-full md:w-2/5 md:flex-shrink-0 aspect-[350/185] mb-auto lg:my-auto rounded-xl" src={project.image}/>
                {/* INFO */}
                <div className="w-full md:w-3/5 flex flex-col justify-between gap-3">
                    {/* TEXT */}
                    <div className="flex flex-col gap-2">
                        <h3 className="font-medium text-xl">{project.name}</h3>
                        <p>
                            {project.description}
                        </p>
                    </div>
                    {/* TAGS */}
                    <div className="flex justify-between content-center gap-1">
                        <div className="w-6/10 lg:w-4/5 flex gap-3 flex-wrap">
                            {project.tags.map((tagName, index) => (
                                <div key={index} className="px-2 py-1 text-center rounded-[7px] bg-blue-300 dark:bg-blue-950 transition-colors duration-300"><p className="font-light">{tagName}</p></div>
                            ))}
                        </div>
                        <div className="w-auto mt-auto lg:mb-1 text-center">
                            <Link className="font-medium text-sm" to={project.url}><span className="underline">READ MORE </span>→</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;