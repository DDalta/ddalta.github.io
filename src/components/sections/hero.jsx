import portrait from "../../assets/images/portrait.JPEG"
import insta_icon from "../../assets/icons/instagram.png"
import github_icon from "../../assets/icons/github.png"
import linkedin_icon from "../../assets/icons/linkedin.png"

const Hero = () => {
    return (
        <section id="hero" className="w-full py-18">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-8 px-5">
                <img className="md:order-last w-full max-w-[18rem] min-w-[288px] aspect-[1/1] mx-auto md:mx-0 object-cover rounded-[24px] shadow-xl" src={portrait} alt="My profile"/>
                <div className="flex flex-col justify-between gap-8 md:gap-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-5xl">HELLO!</h1>
                        <p>I'm a California-based computer science student, recently graduated from UCSC, and currently pursuing further graduate studies at CSULB. Passionate about coding projects and learning in the field of computer science.</p>
                    </div>
                    <div>
                        <p>Available for opportunities!</p>
                    </div>
                    <div className="flex gap-5 justify-center md:justify-start">
                        <a href=""><img className="size-10 hover:-translate-y-1" src={insta_icon}/></a>
                        <a href=""><img className="size-10 hover:-translate-y-1" src={github_icon}/></a>
                        <a href=""><img className="size-10 hover:-translate-y-1" src={linkedin_icon}/></a>
                    </div>
                </div>
                
            </div>
        </section>
    )
};

export default Hero;