import ScrollReveal from "@/components/layout/scrollreveal.jsx";

import { SOCIALS } from "@/data/data.jsx"

const Contact = () => {
    return (
        <section id="contact" className="w-full py-18 w-full py-18 bg-white dark:bg-gray-950 transition-colors duration-300 scroll-mt-10">
            <ScrollReveal>
                <div className="mx-auto max-w-6xl flex flex-col gap-8 px-5">
                    <p className="text-center font-semibold text-3xl">GET IN TOUCH</p>
                    <div className="flex gap-5 justify-center">
                        {SOCIALS.map((social, index) => {

                            const IconComponent = social.icon; 
                            return (
                                <a key={index} href={social.url}>
                                    <IconComponent className="size-10 hover:-translate-y-1 transition-transform"/>
                                </a>
                            )
                        })}
                    </div>
                    {/* FORM */}
                    <div className="px-5 mx-auto md:mx-[33%]">
                        <form>
                            <div className="flex flex-col gap-5 justify-center">
                                <input className="block rounded-md outline-2 outline-gray-500 placeholder:text-default-text-color/40 dark:placeholder:text-gray-100/40 focus:outline-black/20 dark:focus:outline-gray-500 focus:-outline-offset-2 py-[5px] pl-[5px]" placeholder="Name"/>
                                <input className="block rounded-md outline-2 outline-gray-500 placeholder:text-default-text-color/40 dark:placeholder:text-gray-100/40 focus:outline-black/20 dark:focus:outline-gray-500 focus:-outline-offset-2 py-[5px] pl-[5px]" placeholder="Subject"/>
                                <input className="block rounded-md outline-2 outline-gray-500 placeholder:text-default-text-color/40 dark:placeholder:text-gray-100/40 focus:outline-black/20 dark:focus:outline-gray-500 focus:-outline-offset-2 py-[5px] pl-[5px]" placeholder="Email"/>
                                <textarea className="block w-full h-[150px] outline-2 outline-gray-500 rounded-md placeholder:text-default-text-color/40 dark:placeholder:text-gray-100/40 focus:outline-black/20 dark:focus:outline-gray-500 focus:-outline-offset-2 pl-[5px]" placeholder="Message"/>
                                <button className="font-semibold rounded-md outline-2 outline-gray-500 hover:bg-slate-300 dark:hover:bg-gray-900 py-[5px]">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </ScrollReveal>
        </section>
        
    )
};

export default Contact;