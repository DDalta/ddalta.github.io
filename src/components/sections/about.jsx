import portrait from "../../assets/images/portrait.JPEG"

const About = () => {
    return (
        <div className="flex flex-col gap-[10px] px-[95px] py-[45px] bg-secondary-section-color">
            <p className="text-center font-semibold text-[32px]">ABOUT ME</p>
            <div className="flex justify-between px-[200px]">
                <img className="w-[270px] h-[380px] object-cover rounded-[34px] shadow-xl" src={portrait} alt="My profile"/>
                <div className="w-[850px] px-[25px]">
                    <p className="text-[16px]"> 
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
    )
};

export default About;