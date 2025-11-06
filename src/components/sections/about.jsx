import ScrollReveal from "@/components/layout/scrollreveal.jsx";

import portrait from "../../assets/images/portrait.JPEG"

const About = () => {
    return (
        
        <section id="about" className="w-full py-18 bg-secondary-section-color dark:bg-gray-900 transition-colors duration-300 scroll-mt-10">
            <ScrollReveal>
                <div className="mx-auto max-w-6xl flex flex-col gap-8 px-5">
                    <p className="text-center font-semibold text-3xl">ABOUT ME</p>
                    <div className="flex flex-col md:flex-row justify-between gap-12">
                        <img className="w-[315px] h-[430px] mx-auto md:mx-0 object-cover rounded-[24px] shadow-secondary-light dark:shadow-secondary-dark transition-shadow duration-300" src={portrait} alt="My profile"/>
                        <div className="flex flex-col gap-5 max-w-xl mx-auto md:mx-0">
                            <p className="text-base/7"> 
                                Passionate about software development and love brining projects to life from start to finish. My interest in tech started when I was young, as I loved tinkering with computers and figuring out
                                how they worked. I followed that passion to get my Bachelors in Computer Science at UC Santa Cruz and then decided to work on my Master's at CSU Long Beach. My recent work involves building full
                                stack projects, and I'm also currently assisting one of my professors with their research. When I'm not deep in a coding project, I like to switch things up with photography and video editing.
                                I also have a huge passion for game development and have built project using both Unity and Godot.
                            </p>
                            <div className="w-full lg:w-3/4 flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-4 rounded-xl transition-colors shadow-secondary-light dark:shadow-secondary-dark transition-shadow duration-300">
                                <h3 className="text-xl font-medium">EDUCATIONS</h3>
                                <ul>
                                    <li>
                                        <div className="flex justify-between">
                                            <span>• UC Santa Cruz</span>
                                            <span className="italic text-xs font-light ml-10">grad. 2024</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex justify-between">
                                            <span>• CSU Long Beach</span>
                                            <span className="italic text-xs font-light ml-10">exp. 2026 </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-3/4 flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-4 rounded-xl transition-colors shadow-secondary-light dark:shadow-secondary-dark transition-shadow duration-300">
                                <h3 className="text-xl font-medium">WORK EXPERIENCES</h3>
                                <ul>
                                    <li>
                                        <div className="flex justify-between">
                                            <span>•  Tech Crew / Event Staff @ UCSC </span>
                                            <span className="italic text-xs font-light ml-10">2023 - 2024</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex justify-between">
                                            <span>•  Graduate Assistant @ CSULB</span>
                                            <span className="italic text-xs font-light ml-10">2024 - CURR</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="flex justify-between">
                                            <span>•  Teacher Assistant @ CSULB</span>
                                            <span className="italic text-xs font-light ml-10">2025 - CURR</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
        
    )
};

export default About;