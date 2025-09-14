import { Link } from "react-router-dom";

const ProjectCard = ({project}) => {
    return (
        <div className="w-full px-4 py-3 rounded-[12px] bg-card-color shadow-xl">
            <div className="flex flex-col md:flex-row gap-3">
                {/* IMAGE */}
                <img className="w-full md:w-2/5 md:flex-shrink-0 aspect-[350/185] mb-auto lg:my-auto rounded-[12px]" src={project.image}/>
                {/* INFO */}
                <div className="w-full md:w-3/5 flex flex-col justify-between gap-3">
                    {/* TEXT */}
                    <div className="flex flex-col gap-1">
                        <h3 className="font-medium text-xl">{project.name}</h3>
                        <p>
                            {project.description}
                        </p>
                    </div>
                    {/* TAGS */}
                    <div className="flex justify-between content-center gap-1">
                        <div className="w-6/10 lg:w-4/5 flex gap-3 flex-wrap lg:flex-nowrap">
                            {project.tags.map((tagName, index) => (
                                <div key={index} className="px-2 py-1 bg-tag-color rounded-[7px] text-center"><p className="font-light">{tagName}</p></div>
                            ))}
                        </div>
                        <div className="w-auto mt-auto lg:my-auto text-center">
                            <Link className="font-medium text-sm" to={project.url}><span className="underline">READ MORE </span>→</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;