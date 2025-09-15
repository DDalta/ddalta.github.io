import portrait from "../../assets/images/portrait.JPEG"
import { SOCIALS } from "@/data/data.jsx"
import { CircleCheckBig } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="w-full py-18 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-8 px-5">
                <img className="md:order-last w-full max-w-[18rem] min-w-[288px] aspect-[1/1] mx-auto md:mx-0 object-cover rounded-[24px] shadow-primary-light dark:shadow-primary-dark transition-shadow duration-300" src={portrait} alt="My profile"/>
                <div className="flex flex-col justify-between gap-8 md:gap-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-5xl">HELLO!</h1>
                        <p>I'm a California-based computer science student, recently graduated from UCSC, and currently pursuing further graduate studies at CSULB. Passionate about coding projects and learning in the field of computer science.</p>
                    </div>
                    <div>
                        <span className="inline-flex items-center space-x-2">
                            <CircleCheckBig />
                            <span><p>Available for opportunities!</p></span>
                        </span>
                    </div>
                    <div className="flex gap-5 justify-center md:justify-start">
                        {SOCIALS.map((social, index) => {
                            
                            const IconComponent = social.icon;
                            return (
                                <a key={index} href={social.url}>
                                    <IconComponent className="size-10 hover:-translate-y-1 transition-transform"/>
                                </a>
                            );
                            
                        })}
                    </div>
                </div>
                
            </div>
        </section>
    )
};

export default Hero;