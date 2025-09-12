import { SOCIALS } from "@/data/data.jsx"

const Contact = () => {
    return (
        <section id="contact" className="w-full py-18 bg-secondary-section-color scroll-mt-10">
            <div className="mx-auto max-w-6xl flex flex-col gap-8 px-5">
                <p className="text-center font-semibold text-3xl">GET IN TOUCH</p>
                <div className="flex gap-5 justify-center">
                    {SOCIALS.map((social, index) => (
                            <a key={index} href={social.url}><img className="size-10 hover:-translate-y-1 transition-transform" src={social.icon}/></a>
                    ))}
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
    )
};

export default Contact;