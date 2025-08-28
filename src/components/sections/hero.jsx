import portrait from "../../assets/images/portrait.JPEG"

const Hero = () => {
    return (
        <div className="px-[161px]">
            <div className="flex gap-[120px] px-[52px]">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="font-semibold text-[54px]">HELLO!</p>
                        <p className="text-[16px]">I'm a California-based computer science student, recently graduated from UCSC, and currently pursuing further graduate studies at CSULB. Passionate about coding projects and learning in the field of computer science.</p>
                    </div>
                    <div>
                        <p>Available for opportunities!</p>
                    </div>
                    <div>
                        Social Icons
                    </div>
                </div>
                <img className="w-[318px] h-[253px] object-cover rounded-[34px]" src={portrait} alt="My profile"/>
            </div>
        </div>
    )
};

export default Hero;