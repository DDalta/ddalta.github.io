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
                            <p> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non  auctor dui. Donec eros nibh, suscipit at sapien vitae, faucibus faucibus leo.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed  pretium metus. Mauris vitae nisi libero. Integer ut massa vitae nunc  tristique porttitor.
                                Aenean augue urna, fermentum eu ligula non, gravida tempor magna. Curabitur et ex tellus. Aenean bibendum nisl eu ante  pulvinar porta nec in tortor.
                                Vivamus mi nisl, vestibulum in bibendum  vitae, sagittis quis nunc. Etiam eget tortor consequat, auctor quam id,  porta lacus. Curabitur mollis velit ac
                                metus interdum euismod. Fusce  purus est, convallis in interdum eu, euismod gravida sapien.
                            </p>
                            <div className="w-full lg:w-3/4 flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-4 rounded-xl transition-colors shadow-secondary-light dark:shadow-secondary-dark transition-shadow duration-300">
                                <h3 className="text-xl font-medium">EDUCATIONS</h3>
                                <p>• University of California, Santa Cruz</p>
                                <p>• California State University Long Beach</p>
                            </div>
                            <div className="w-full lg:w-3/4 flex flex-col bg-gray-100 dark:bg-gray-700 px-4 py-4 rounded-xl transition-colors shadow-secondary-light dark:shadow-secondary-dark transition-shadow duration-300">
                                <h3 className="text-xl font-medium">EXPERIENCES</h3>
                                <ul>
                                    <li>• Tech Crew / Event Staff @ UCSC</li>
                                    <li>• Graduate Assistant @ CSULB</li>
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