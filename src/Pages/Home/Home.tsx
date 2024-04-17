import NETLOGO from "/NET_CORE_LOGO.png";
import JAVALOGO from "/JAVA_LOGO.png";
import REACTLOGO from "/REACT_LOGO.webp";
import { Header } from "../../components/Header/Header"
import { CiCirclePlus } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Player from "/player.gif";
import Heart from "/heart.gif";
export const Home = () => {
  return (
    <>
        <div className="flex flex-col items-center pt-6 bg-orange-200 min-h-screen w-screen px-[15vw]">
            <Header/>
            <div className="pt-20 text-orange-900 flex flex-row w-full">
                <div className="w-1/2">
                    <h1 className=" text-[36px]">Giovanni Ultramari</h1>
                    <div className="flex flex-row items-center pb-2">
                        <h2 className="text-[18px]">Software Engineer</h2>
                        <img className="h-7 pl-2"src={Heart}/>
                    </div>
                    <h3 className="text-[16px] text-orange-950">Desenvolvedor Full Stack | Java | .NET | React</h3>
                    <div className="card">
                        <h3>• Quarto Semestre Análise e Desenvolvimento de Sistemas.</h3>
                    </div>
                    <div className="card">
                        <h3>• Entusiasta de produção musical e jogos.</h3>
                    </div>
                    
                    <div className="flex gap-2">
                        <a href="https://github.com/AdurraIS" target="_blank">
                            <div className="card-links">
                                <FaGithub size="24px"/>
                                <h3>GitHub</h3>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/giovanni-ultramari/" target="_blank">
                            <div className="card-links">
                                <FaLinkedin size="24px"/>
                                <h3>Linkedin</h3>
                            </div>
                        </a>
                    </div>
                    <h3 className="text-[16px] text-orange-950 mt-8">Principais Habilidades</h3>
                    <div className="flex gap-2">
                        <div className="card-links">
                            <img src={NETLOGO} className="size-11 group"/>
                        </div>
                        <div className="card-links">
                            <img src={JAVALOGO} className="size-11"/>
                        </div>
                        <div className="card-links">
                            <img src={REACTLOGO} className="size-11"/>
                        </div>
                        <div className="card-links">
                            <CiCirclePlus size="44px"/>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end">
                    
                    <img className="size-90"src={Player}/>
                </div>
                
            </div>
        </div>
    </>
  )
}
