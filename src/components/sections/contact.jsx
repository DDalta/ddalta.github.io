import insta_icon from "../../assets/icons/instagram.png"
import github_icon from "../../assets/icons/github.png"
import linkedin_icon from "../../assets/icons/linkedin.png"

const Contact = () => {
    return (
        <section id="contact" className="w-full py-18 bg-secondary-section-color scroll-mt-10">
            <div className="mx-auto max-w-6xl flex flex-col gap-8 px-5">
                <p className="text-center font-semibold text-3xl">GET IN TOUCH</p>
                <div className="flex gap-5 justify-center">
                    <a href=""><img className="size-10 hover:-translate-y-1" src={insta_icon}/></a>
                    <a href=""><img className="size-10 hover:-translate-y-1" src={github_icon}/></a>
                    <a href=""><img className="size-10 hover:-translate-y-1" src={linkedin_icon}/></a>
                </div>
                {/* FORM */}
                <div className="px-5 mx-auto md:mx-[33%]">
                    <form>
                        <div className="flex flex-col gap-5 justify-center">
                            <input className="block rounded-md outline-1 placeholder:text-default-text-color/40 outline-gray/25 focus:outline-black/20 focus:-outline-offset-2 py-[5px] pl-[5px]" placeholder="Name"/>
                            <input className="block rounded-md outline-1 placeholder:text-default-text-color/40 focus:outline-black/20 py-[5px] pl-[5px]" placeholder="Subject"/>
                            <input className="block rounded-md outline-1 placeholder:text-default-text-color/40 focus:outline-black/20 py-[5px] pl-[5px]" placeholder="Email"/>
                            <textarea className="block w-full h-[150px] outline-1 rounded-md placeholder:text-default-text-color/40 focus:outline-black/20 pl-[5px]" placeholder="Message"/>
                            <button className="rounded-md outline-gray/25 outline-1 hover:bg-default-text-color/5 py-[5px]">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        // <div className="flex flex-col gap-[10px] px-[95px] py-[45px]">
        //     <p className="text-center font-semibold text-[32px]">GET IN TOUCH</p>
        //     <div className="flex gap-[15px] justify-center">
        //         <img className="size-8" src={insta_icon}/>
        //         <img className="size-8" src={github_icon}/>
        //         <img className="size-8" src={linkedin_icon}/>
        //     </div>
        //     {/* FORM */}
        //     <div className="mt-[16px]">
        //         <form>
        //             <div className="flex flex-col gap-[10px] justify-center px-[38%]">
        //                 <input className="block rounded-md outline-1 placeholder:text-default-text-color/40 outline-gray/25 focus:outline-black/20 focus:-outline-offset-2 py-[5px] pl-[5px]" placeholder="Name"/>
        //                 <input className="block rounded-md outline-1 placeholder:text-default-text-color/40 focus:outline-black/20 py-[5px] pl-[5px]" placeholder="Subject"/>
        //                 <input className="block rounded-md outline-1 placeholder:text-default-text-color/40 focus:outline-black/20 py-[5px] pl-[5px]" placeholder="Email"/>
        //                 <textarea className="block w-full h-[150px] outline-1 rounded-md placeholder:text-default-text-color/40 focus:outline-black/20 pl-[5px]" placeholder="Message"/>
        //                 <button className="rounded-md outline-gray/25 outline-1 hover:bg-default-text-color/5 py-[5px]">SUBMIT</button>
        //             </div>
        //         </form>
        //     </div>
        // </div>
    )
};

export default Contact;