import portrait from "../../assets/images/portrait.JPEG"
import insta_icon from "../../assets/icons/instagram.png"
import github_icon from "../../assets/icons/github.png"
import linkedin_icon from "../../assets/icons/linkedin.png"

const Hero = () => {
    return (
        <section id="hero" className="w-full py-10">
            <div className="mx-auto max-w-5xl flex flex-col md:flex-row gap-8">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        {/* <p className="font-semibold text-[54px]">HELLO!</p> */}
                        <h1 className="font-semibold text-5xl">HELLO!</h1>
                        <p>I'm a California-based computer science student, recently graduated from UCSC, and currently pursuing further graduate studies at CSULB. Passionate about coding projects and learning in the field of computer science.</p>
                    </div>
                    <div>
                        <p>Available for opportunities!</p>
                    </div>
                    <div className="flex gap-[10px] justify-center md:justify-start">
                        <a href=""><img className="size-10 hover:-translate-y-1" src={insta_icon}/></a>
                        <a href=""><img className="size-10 hover:-translate-y-1" src={github_icon}/></a>
                        <a href=""><img className="size-10 hover:-translate-y-1" src={linkedin_icon}/></a>
                    </div>
                </div>
                <img className="w-180 h-70 object-cover rounded-[34px] shadow-xl" src={portrait} alt="My profile"/>
            </div>
        </section>
        // <div className="px-[150px] py-[50px]">
        //     <div className="flex gap-[200px] px-[150px]">
        //         
        //     </div>
        // </div>
    )
};

export default Hero;