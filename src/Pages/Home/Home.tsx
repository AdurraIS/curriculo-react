
import { Header } from "../../components/Header/Header"
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
                    
                </div>
                <div className="w-1/2 flex justify-end">
                    
                    <img className="size-90"src={Player}/>
                </div>
                
            </div>
        </div>
    </>
  )
}
