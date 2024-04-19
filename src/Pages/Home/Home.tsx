import NETLOGO from "/NET_CORE_LOGO.png";
import JAVALOGO from "/JAVA_LOGO.png";
import REACTLOGO from "/REACT_LOGO.webp";
import Personagem from "/personagem.png";
import pythonlogo from "/pythonlogo.png";
import { Header } from "../../components/Header/Header"
import { CiCirclePlus } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Player from "/player.gif";
import Heart from "/heart.gif";

export const Home = () => {
  return (
    <>
        <div className="flex flex-col items-center pt-6 bg-orange-200 h-full w-screen ">
            <Header/>
            <div className="pt-20 text-orange-900 flex flex-row w-full lg:min-h-[80vh] max-h-full px-[15vw] pb-9">
                <div className="lg:w-1/2 xl:w-1/2 sm:w-full flex flex-col">
                    <h1 className=" text-[36px] max-[639px]:text-[24px]">Giovanni Ultramari</h1>
                    <div className="flex flex-row items-center pb-2 text-left">
                        <h2 className="md:text-[18px] max-[639px]:text-[15px]">Software Engineer</h2>
                        <img className="h-7 pl-2"src={Heart}/>
                    </div>
                    <h3 className="text-[16px] text-orange-950">Desenvolvedor Full Stack | Java | .NET | React</h3>
                    <div className="mt-3">
                        <CardContent content="• Quarto Semestre Análise e Desenvolvimento de Sistemas." />
                    </div>
                    <div className="my-3">
                        <CardContent content="• Entusiasta de produção musical e jogos." />
                    </div>
                    <div className="flex gap-2">
                        <a href="https://github.com/AdurraIS" target="_blank">
                            <CardLink icon={<FaGithub size="24px"/>} text="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/giovanni-ultramari/" target="_blank">
                            <CardLink icon={<FaLinkedin size="24px"/>} text="Linkedin"/>
                        </a>
                    </div>
                    <h3 className="text-[16px] text-orange-950 mt-8 mb-2">Principais Habilidades</h3>
                    <div className="flex gap-2">
                    <CardSkill content={<img src={NETLOGO} className="size-11"/>} text=".NET"/>
                    <CardSkill content={<img src={JAVALOGO} className="size-11"/>} text="JAVA"/>
                    <CardSkill content={<img src={REACTLOGO} className="size-11"/>}text="REACT"/>
                        <CardSkill content={<CiCirclePlus size="44px"/>} text="More" />
                    </div>
                </div>
                <div className="lg:w-1/2 xl:w-1/2  sm:w-0 w-0 flex content-start justify-end">
                    <img className="size-[450px]" src={Player}/>
                </div>
                
            </div>
            <div className=" text-orange-900 bg-orange-600 bg-opacity-30 flex flex-col min-h-[30vh] py-10
            w-full max-h-full lg:px-[15vw] md:px-[8vw] px-[15vw] justify-center">
                <div className="flex flex-row justify-between">
                    <div className="scale-[40vw] flex items-center max-[800px]:size-0">
                        <img className="size-96"src={Personagem}/>
                    </div>
                    <div className="w-[60%] max-[800px]:w-full">
                        <h1 className="text-[26px]">Sobre mim</h1>
                        <p className="max-[800px]:p-0 p-2 text-[18px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie est id
                            fermentum ultrices. Nunc condimentum blandit ligula, maximus posuere ligula condimentum
                            vitae. Quisque dictum efficitur eros, sed fermentum odio egestas sed. Cras sodales sit
                            amet nibh at cursus. Aliquam cursus lectus at leo euismod, ac tempus magna commodo. In
                            hac habitasse platea dictumst. Curabitur ornare, felis vehicula varius iaculis, mauris
                            elit mattis est, at iaculis felis felis quis felis. Nullam placerat sagittis metus sed
                            sollicitudin.
                        </p>
                    </div>
                </div>
            </div>
            <div className=" text-orange-900 pt-20 flex flex-col min-h-[30vh]
            py-10 w-full max-h-full px-[15vw] justify-center">
                <h3 className="text-[26px] mb-6">Hard Skills</h3>
                <div className="flex flex-row flex-wrap gap-4 w-full">
                    <CardSkill content={<img src={NETLOGO} className="sm:size-16 max-[639px]:size-14"/>} text=".NET"/>
                    <CardSkill content={<img src={JAVALOGO} className="sm:size-16 max-[639px]:size-14"/>} text="JAVA"/>
                    <CardSkill content={<img src={REACTLOGO} className="sm:size-16 max-[639px]:size-14"/>}text="REACT"/>
                    <CardSkill content={<img src={pythonlogo} className="sm:size-16 max-[639px]:size-14"/>}text="PYTHON"/>
                </div>
            </div>
        </div>
    </>
  )
}
const CardLink = ({icon, text = "Tipo"}) => (
    <div className="card-links">
        {icon}
        <h3>{text}</h3>
    </div>
);
const CardSkill = ({content, text}) => (
    <div className="card-links group">
        <div className="group-hover:scale-0 group-hover:opacity-0 transition-all duration-300">
            {content}
        </div>
        <h3 className=" absolute group-hover:scale-100 text-[16px] group-hover:opacity-100 scale-0 
        opacity-0 transition-all duration-300">
            {text}
        </h3>
    </div>
);
const CardContent = ({content}) => (
    <div className="card">
        <h3>{content}</h3>
    </div>
);