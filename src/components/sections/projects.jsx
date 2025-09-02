import notaps from "../../assets/images/projects/notaps/thumbnail.png"
import bta from "../../assets/images/projects/bta/thumbnail.png"

const Projects = () => {
    return (
        <div className="flex flex-col gap-[10px] px-[300px] py-[45px] bg-secondary-section-color">
            <p className="text-center font-semibold text-[32px]">PROJECTS</p>
            {/* PROJECTS COLUMN */}
            <div className="flex flex-col gap-[25px] py-[10px]">
                {/* PROJECT 1 CARD */}
                <div className="px-[15px] py-[15px] rounded-[12px] bg-card-color shadow-xl">
                    <div className="flex gap-[10px]">
                        {/* IMAGE */}
                        <img className="w-[350px] h-[185px]" src={notaps}/>
                        {/* INFO */}
                        <div className="flex flex-col justify-between">
                            {/* TEXT */}
                            <div className="flex flex-col gap-[14px]">
                                <p className="font-medium text-[20px]"> Parking App </p>
                                <p className="text-[16px]">
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
                            <div className="flex justify-between content-end">
                                <div className="flex gap-[10px]">
                                    <div className="px-[4px] py-[4px] bg-tag-color rounded-[7px]"><p className="font-light text-[16px]">Node.js</p></div>
                                    <div className="px-[4px] py-[4px] bg-tag-color rounded-[7px]"><p className="font-light text-[16px]">HTML</p></div>
                                    <div className="px-[4px] py-[4px] bg-tag-color rounded-[7px]"><p className="font-light text-[16px]">CSS</p></div>
                                    <div className="px-[4px] py-[4px] bg-tag-color rounded-[7px]"><p className="font-light text-[16px]">MySQL</p></div>
                                    <div className="px-[4px] py-[4px] bg-tag-color rounded-[7px]"><p className="font-light text-[16px]">Caddy</p></div>
                                    <div className="px-[4px] py-[4px] bg-tag-color rounded-[7px]"><p className="font-light text-[16px]">Asuna</p></div>
                                    <div className="px-[4px] py-[4px] bg-tag-color rounded-[7px]"><p className="font-light text-[16px]">Git</p></div>
                                </div>
                                <p className="font-medium text-[13px] underline">READ MORE</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* PROJECT 2 CARD */}
                <div className="px-[15px] py-[15px] rounded-[12px] bg-card-color shadow-xl">
                    <div className="flex gap-[10px]">
                        {/* IMAGE */}
                        <img className="w-[350px] h-[185px]" src={bta}/>
                        {/* INFO */}
                        <div className="flex flex-col justify-between">
                            {/* TEXT */}
                            <div className="flex flex-col gap-[14px]">
                                <p className="font-medium text-[20px]"> Behavior Tree Agent </p>
                                <p className="text-[16px]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate
                                    ullamcorper nulla eget aliquet. Vestibulum sagittis nisi eu posuere 
                                    malesuada. Nullam turpis nunc.
                                </p>
                            </div>
                            {/* TAGS */}
                            <div className="flex justify-between content-end">
                                <div className="flex gap-[10px]">
                                    <div className="px-[4px] py-[4px] bg-tag-color rounded-[7px]"><p className="font-light text-[16px]">Unity</p></div>
                                    <div className="px-[4px] py-[4px] bg-tag-color rounded-[7px]"><p className="font-light text-[16px]">C#</p></div>
                                    <div className="px-[4px] py-[4px] bg-tag-color rounded-[7px]"><p className="font-light text-[16px]">Git</p></div>
                                </div>
                                <p className="font-medium text-[13px] underline">READ MORE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;