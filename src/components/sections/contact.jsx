import ScrollReveal from "@/components/layout/scrollreveal.jsx";

import { SOCIALS } from "@/data/data.jsx"
import { useState } from "react";

const Contact = () => {
    
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;

        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xblddwev", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                console.error("Form submission failed")
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

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
                        {/* SUCCESS MESSAGE */}
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center p-6 text-green-700 bg-green-100 border-2 border-green-500 rounded-md dark:bg-green-900/30 dark:text-green-400 dark:border-green-800">
                                <p className="text-lg font-bold">Message Sent Successfully!</p>
                                <p className="mt-2 text-sm text-center">Thank you for reaching out. I will get back to you as soon as possible.</p>
                                
                                <button 
                                    onClick={() => setIsSuccess(false)} 
                                    className="mt-4 text-sm font-semibold underline hover:text-green-900 dark:hover:text-green-300"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-5 justify-center">
                                    <input className="block rounded-md outline-2 outline-gray-500 placeholder:text-default-text-color/40 dark:placeholder:text-gray-100/40 focus:outline-black/20 dark:focus:outline-gray-500 focus:-outline-offset-2 py-[5px] pl-[5px]" name="name" placeholder="Name" required/>
                                    <input className="block rounded-md outline-2 outline-gray-500 placeholder:text-default-text-color/40 dark:placeholder:text-gray-100/40 focus:outline-black/20 dark:focus:outline-gray-500 focus:-outline-offset-2 py-[5px] pl-[5px]" name="subject" placeholder="Subject" required/>
                                    <input className="block rounded-md outline-2 outline-gray-500 placeholder:text-default-text-color/40 dark:placeholder:text-gray-100/40 focus:outline-black/20 dark:focus:outline-gray-500 focus:-outline-offset-2 py-[5px] pl-[5px]" name="email" placeholder="Email" type="email" required/>
                                    <textarea className="block w-full h-[150px] outline-2 outline-gray-500 rounded-md placeholder:text-default-text-color/40 dark:placeholder:text-gray-100/40 focus:outline-black/20 dark:focus:outline-gray-500 focus:-outline-offset-2 pl-[5px]" name="message" placeholder="Message" required/>
                                    <button type="submit" disabled={isSubmitting} className="font-semibold rounded-md outline-2 outline-gray-500 hover:bg-slate-300 dark:hover:bg-gray-900 py-[5px] transition-colors duration-300">
                                        {isSubmitting ? "SENDING..." : "SUBMIT"}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </ScrollReveal>
        </section>
        
    )
};

export default Contact;