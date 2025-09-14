import ScrollReveal from "@/components/layout/scrollreveal.jsx";

import portrait from "../../assets/images/portrait.JPEG"

const About = () => {
    return (
        <ScrollReveal>
            <section id="about" className="w-full py-18 bg-secondary-section-color scroll-mt-10">
                <div className="mx-auto max-w-6xl flex flex-col gap-8 px-5">
                    <p className="text-center font-semibold text-3xl">ABOUT ME</p>
                    <div className="flex flex-col md:flex-row justify-between gap-12">
                        <img className="w-[315px] h-[430px] mx-auto md:mx-0 object-cover rounded-[24px] shadow-xl" src={portrait} alt="My profile"/>
                        <div className="max-w-xl mx-auto md:mx-0">
                            <p> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non  auctor dui. Donec eros nibh, suscipit at sapien vitae, faucibus faucibus leo.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed  pretium metus. Mauris vitae nisi libero. Integer ut massa vitae nunc  tristique porttitor.
                                Aenean augue urna, fermentum eu ligula non, gravida tempor magna. Curabitur et ex tellus. Aenean bibendum nisl eu ante  pulvinar porta nec in tortor.
                                Vivamus mi nisl, vestibulum in bibendum  vitae, sagittis quis nunc. Etiam eget tortor consequat, auctor quam id,  porta lacus. Curabitur mollis velit ac
                                metus interdum euismod. Fusce  purus est, convallis in interdum eu, euismod gravida sapien.
                                Fusce placerat nunc feugiat tellus pulvinar vulputate. Quisque id  euismod lectus, nec malesuada ante. Sed ut justo vulputate, dictum augue faucibus,
                                malesuada sapien. Donec ultrices euismod sapien id cursus.  Sed id arcu ac tellus aliquam vulputate id nec dolor. Cras orci sem,  egestas nec mollis in,
                                ornare ut mi. Pellentesque quam odio, elementum  id blandit et, fermentum at dolor. Sed eu faucibus enim. Nam sit amet  suscipit sem, pretium euismod metus.
                                Sed commodo, diam ac mattis  imperdiet, ex arcu rhoncus magna, quis semper lectus ex ac sapien. Donec ut ullamcorper erat, in sodales mi. Praesent sit
                                amet ullamcorper arcu. Duis tortor ipsum, cursus vitae nulla vel, aliquam ornare urna. Ut  tempus est eu felis hendrerit interdum. Vivamus dignissim
                                ipsum felis.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    )
};

export default About;