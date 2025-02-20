import NETLOGO from "../../assets/NET_CORE_LOGO.png";
import JAVALOGO from "../../assets/JAVA_LOGO.png";
import REACTLOGO from "../../assets/REACT_LOGO.webp";
import Personagem from "../../assets/personagem.png";
import pythonlogo from "../../assets/pythonlogo.png";
import tailwindlogo from "../../assets/tailwind.png";
import springlogo from "../../assets/spring-logo.png";
import gitlogo from "../../assets/git-logo.png";
import githublogo from "../../assets/github-logo.png";
import vitelogo from "../../assets/vite-logo.png";
import typescriptlogo from "../../assets/type-script-logo.webp";
import csharplogo from "../../assets/c-sharp-logo.svg";
import { Header } from "../../components/Header/Header"
import { CiCirclePlus } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Player from "../../assets/player.gif";
import Heart from "../../assets/heart.gif";
import Carrossel from "../../components/Carrossel/Carrossel";
import { CardLink } from "../../components/CardLink/CardLink";

export const Home = () => {

    const items = [
        csharplogo,
        typescriptlogo
    ];

    return (
        <>
            <div className="flex flex-col items-center pt-6 bg-orange-200 h-full w-screen selection:bg-orange-700 selection:text-white">
                <Header />
                <div id="Home" className="pt-20 text-orange-900 flex flex-row w-full lg:min-h-[80vh] max-h-full px-[15vw] pb-9">
                    <div className="lg:w-1/2 xl:w-1/2 sm:w-full flex flex-col">
                        <h1 className=" text-[36px] max-[639px]:text-[24px]">Giovanni Ultramari</h1>
                        <div className="flex flex-row items-center pb-2 text-left">
                            <h2 className="md:text-[18px] max-[639px]:text-[15px]">Software Engineer</h2>
                            <img className="h-7 pl-2" src={Heart} />
                        </div>
                        <h3 className="text-[16px] text-orange-950">Desenvolvedor Full Stack | Java | .NET | React</h3>
                        <div className="mt-3">
                            <CardContent content="• Formado em Análise e Desenvolvimento de Sistemas." />
                        </div>
                        <div className="my-3">
                            <CardContent content="• Segundo Semestre de Ciências da Computação." />
                        </div>
                        <div className="flex gap-2">
                            <a href="https://github.com/AdurraIS" target="_blank">
                                <CardLink icon={<FaGithub size="24px" />} text="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/giovanni-ultramari/" target="_blank">
                                <CardLink icon={<FaLinkedin size="24px" />} text="Linkedin" />
                            </a>
                        </div>
                        <h3 className="text-[16px] text-orange-950 mt-8 mb-2">Principais Habilidades</h3>
                        <div className="flex gap-2">
                            <CardSkill content={<img src={JAVALOGO} className="size-11" />} text="JAVA" />
                            <CardSkill content={<img src={REACTLOGO} className="size-11" />} text="REACT" />
                            <button onClick={() => document.getElementById("Skills")?.scrollIntoView({ behavior: 'smooth' })}>
                                <CardSkill content={<CiCirclePlus size="44px" />} text="+" />
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 xl:w-1/2  sm:w-0 w-0 flex justify-end">
                        <img className="size-[450px] select-none" src={Player} />
                    </div>

                </div>
                <div id="About" className=" text-orange-900 bg-orange-600 bg-opacity-30 flex flex-col min-h-[30vh] py-10
            w-full max-h-full lg:px-[15vw] md:px-[8vw] px-[15vw] justify-center">
                    <div className="flex flex-row justify-between">
                        <div className="scale-[40vw] flex items-center max-[800px]:size-0">
                            <img className="size-96 select-none" src={Personagem} />
                        </div>
                        <div className="w-[60%] max-[800px]:w-full">
                            <h1 className="text-[26px]">Sobre mim</h1>
                            <p className="max-[800px]:p-0 p-2 text-[18px]">
                                Olá, me chamo Giovanni, tenho 20 anos e sou apaixonado por tecnologia, videogames e música. Em 2024 me formei em Análise e
                                Desenvolvimento de Sistemas, formação muito importante em que iniciei meus estudos no desenvolvimento de software.
                            </p>
                            <p className="max-[800px]:p-0 p-2 text-[18px]">
                                Desenvolvi projetos acadêmicos grandes e adquiri conhecimento em Java, SpringBoot, JavaScript, React, Git e SQL. Além de ter a
                                experiência de trabalhar em equipe, solucionar problemas, ser criativo, trabalhar com metodologia ágil e com estruturação de projetos.
                            </p>
                            <p className="max-[800px]:p-0 p-2 text-[18px]">
                                Senti a necessidade de me aprofundar e por isso atualmente estou cursando Ciência da Computação, que me possibilita fortalecer
                                a base e entender mais a fundo o desenvolvimento de software.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="Skills" className=" text-orange-900 flex flex-col min-h-[30vh]
            py-20 mb-10 w-full max-h-full px-[15vw] justify-center">
                    <h3 className="text-[26px] mb-6">Hard Skills</h3>
                    <div className=" flex flex-row gap-4 justify-center flex-wrap select-none w-full">
                        <CardSkill content={<img src={JAVALOGO} className="sm:size-[70px] max-[639px]:size-14" />}
                            text="JAVA" />
                        <CardSkill content={<img src={REACTLOGO} className="sm:size-[70px] max-[639px]:size-14" />}
                            text="REACT" />
                        <CardSkill content={<img src={NETLOGO} className="sm:size-[70px] max-[639px]:size-14" />}
                            text=".NET" />
                        <CardSkill content={<img src={pythonlogo} className="sm:size-[70px] max-[639px]:size-14" />}
                            text="PYTHON" />
                        <CardSkill content={<img src={tailwindlogo} className="sm:size-[70px] max-[639px]:size-14" />}
                            text="TAILWIND" />
                        <CardSkill content={<img src={springlogo} className="sm:size-[70px] max-[639px]:size-14" />}
                            text="SPRING" />
                        <CardSkill content={<img src={gitlogo} className="sm:size-[70px] max-[639px]:size-14" />}
                            text="GIT" />
                        <CardSkill content={<img src={githublogo} className="sm:size-[70px] max-[639px]:size-14" />}
                            text="GITHUB" />
                        <CardSkill content={<img src={vitelogo} className="sm:size-[70px] max-[639px]:size-14" />}
                            text="VITE" />
                        <CardSkill content={<img src={typescriptlogo} className="sm:size-[70px] max-[639px]:size-14" />}
                            text="TypeScript" />
                        <CardSkill content={<img src={csharplogo} className="sm:size-[70px] max-[639px]:size-14" />}
                            text="C#" />
                    </div>
                    <h3 className="text-[26px] my-6">Soft Skills</h3>
                    <div className="flex flex-row justify-center text-center gap-6">
                        <CardContent content="Comunicação eficaz" />
                        <CardContent content="Trabalho em equipe" />
                        <CardContent content="Resolução de problemas" />
                    </div>
                </div>
                <div id="Projects" className=" text-orange-900 bg-orange-600 bg-opacity-30 pt-20 flex flex-col min-h-[30vh]
            py-10 w-full max-h-full px-[15vw] justify-center">
                    <h3 className="text-[26px] text-center mb-6">Projetos</h3>
                    <Carrossel items={items} />
                </div>
            </div>
        </>
    )
}

const CardSkill = ({ content, text }) => (
    <div className="card-links group">
        <div className="group-hover:scale-0 group-hover:opacity-0 transition-all duration-200">
            {content}
        </div>
        <h3 className=" absolute group-hover:scale-100 text-[16px] group-hover:opacity-100 scale-0 
        opacity-0 transition-all duration-200">
            {text}
        </h3>
    </div>
);
const CardContent = ({ content }) => (
    <div className="card">
        <h3>{content}</h3>
    </div>
);