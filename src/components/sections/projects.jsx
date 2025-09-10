import notaps from "../../assets/images/projects/notaps/thumbnail.png"
import bta from "../../assets/images/projects/bta/thumbnail.png"

const Projects = () => {
    return (
        <section id="projects" className="w-full py-18 bg-secondary-section-color scroll-mt-10">
            <div className="mx-auto max-w-6xl flex flex-col gap-8 px-5">
                <h2 className="text-center font-semibold text-3xl">PROJECTS</h2>
                
                {/* PROJECT 1 CARD */}
                <div className="w-full px-4 py-3 rounded-[12px] bg-card-color shadow-xl">
                    <div className="flex flex-col md:flex-row gap-3">
                        {/* IMAGE */}
                        <img className="w-full md:w-2/5 md:flex-shrink-0 aspect-[350/185] mb-auto lg:my-auto rounded-[12px]" src={notaps}/>
                        {/* INFO */}
                        <div className="w-full md:w-3/5 flex flex-col justify-between gap-3">
                            {/* TEXT */}
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-xl">Parking App</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Cras vulputate  ullamcorper nulla eget aliquet. Vestibulum
                                    sagittis nisi eu posuere  malesuada. Nullam turpis nunc,
                                    interdum vestibulum sapien id, dapibus  rutrum justo. Duis
                                    viverra feugiat nisl condimentum bibendum. Phasellus  luctus
                                    nisi ac enim sodales aliquet. Morbi tellus lectus, pretium ut 
                                    auctor vel.
                                </p>
                            </div>
                            {/* TAGS */}
                            <div className="flex justify-between content-center gap-2">
                                <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                                    <div className="px-1 py-1 bg-tag-color rounded-[7px]"><p className="font-light">Node.js</p></div>
                                    <div className="px-1 py-1 bg-tag-color rounded-[7px]"><p className="font-light">HTML</p></div>
                                    <div className="px-1 py-1 bg-tag-color rounded-[7px]"><p className="font-light">CSS</p></div>
                                    <div className="px-1 py-1 bg-tag-color rounded-[7px]"><p className="font-light">MySQL</p></div>
                                    <div className="px-1 py-1 bg-tag-color rounded-[7px]"><p className="font-light">Caddy</p></div>
                                    <div className="px-1 py-1 bg-tag-color rounded-[7px]"><p className="font-light">Asuna</p></div>
                                    <div className="px-1 py-1 bg-tag-color rounded-[7px]"><p className="font-light">Git</p></div>
                                </div>
                                <p className="my-auto font-medium text-sm underline">READ MORE</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PROJECT 2 CARD */}
                <div className="w-full px-4 py-3 rounded-[12px] bg-card-color shadow-xl">
                    <div className="flex flex-col md:flex-row gap-3">
                        {/* IMAGE */}
                        <img className="w-full md:w-2/5 md:flex-shrink-0 aspect-[350/185] my-auto rounded-[12px]" src={bta}/>
                        {/* INFO */}
                        <div className="w-full md:w-3/5 flex flex-col justify-between gap-3">
                            {/* TEXT */}
                            <div className="flex flex-col gap-1">
                                <h3 className="font-medium text-xl">Behavior Tree Agent</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate
                                    ullamcorper nulla eget aliquet. Vestibulum sagittis nisi eu posuere 
                                    malesuada. Nullam turpis nunc.
                                </p>
                            </div>
                            {/* TAGS */}
                            <div className="flex justify-between content-center gap-2">
                                <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                                    <div className="px-1 py-1 bg-tag-color rounded-[7px]"><p className="font-light">Unity</p></div>
                                    <div className="px-1 py-1 bg-tag-color rounded-[7px]"><p className="font-light">C#</p></div>
                                    <div className="px-1 py-1 bg-tag-color rounded-[7px]"><p className="font-light">Git</p></div>
                                </div>
                                <p className="my-auto font-medium text-sm underline">READ MORE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;