import portrait from "../../assets/images/portrait.JPEG"
import insta_icon from "../../assets/icons/instagram.png"
import github_icon from "../../assets/icons/github.png"
import linkedin_icon from "../../assets/icons/linkedin.png"

const Hero = () => {
    return (
        <div className="px-[150px] py-[50px]">
            <div className="flex gap-[200px] px-[150px]">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="font-semibold text-[54px]">HELLO!</p>
                        <p className="text-[16px]">I'm a California-based computer science student, recently graduated from UCSC, and currently pursuing further graduate studies at CSULB. Passionate about coding projects and learning in the field of computer science.</p>
                    </div>
                    <div className="py-[35px]">
                        <p>Available for opportunities!</p>
                    </div>
                    <div className="flex gap-[10px]">
                        <img className="size-10" src={insta_icon}/>
                        <img className="size-10" src={github_icon}/>
                        <img className="size-10" src={linkedin_icon}/>
                    </div>
                </div>
                <img className="w-[700px] h-[270px] object-cover rounded-[34px] shadow-xl" src={portrait} alt="My profile"/>
            </div>
        </div>
    )
};

export default Hero;