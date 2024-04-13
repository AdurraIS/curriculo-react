
import { Header } from "../../components/Header/Header"
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
                    <p className="text-[14px] text-orange-950">Desenvolvedor Full Stack | Java | .NET | React</p>
                    <div className="card">
                        <p>Card test</p>
                    </div>
                    <div className="card">
                        <p>Card 2</p>
                    </div>
                    <div className="flex gap-2">
                        <a href="https://github.com/AdurraIS" target="_blank">
                            <div className="card-links">
                                <FaGithub size="24px"/>
                                <p>GitHub</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/giovanni-ultramari/" target="_blank">
                            <div className="card-links">
                                <FaLinkedin size="24px"/>
                                <p>Linkedin</p>
                            </div>
                        </a>
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
