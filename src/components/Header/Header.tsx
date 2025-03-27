import { BiFolderOpen } from "react-icons/bi";
import { PiSwordBold } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";


export const Header = () => {

const handleClick = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    };
  return (
    <>
        <div className="shadow-[0_8px_10px_-10px_rgba(255,255,255,0.23)]  shadow-orange-900">
            <div className="flex flex-row gap-6 justify-center">
                <a onClick={() => handleClick("About")}>
                    <NavItem icon={<RiAccountCircleLine className="text-orange-800 rounded size-7 
                   hover:scale-125 transition-all  duration-150"/>} text="About"/>
                </a>
                <a onClick={() => handleClick("Projects")}>
                    <NavItem icon={<BiFolderOpen className="text-orange-800 rounded size-7 
                    hover:scale-125 transition-all  duration-150"/>} text="Projetos"/>
                </a>
                <a onClick={() => handleClick("Skills")}>
                    <NavItem icon={<PiSwordBold className="text-orange-800 rounded size-7 
                   hover:scale-125 transition-all  duration-150"/>} text="Skills"/>
                </a>
            </div>
            <div className="bg-orange-700 h-0.5 w-40 mt-2 "></div>
        </div>
    </>
  )
}
const NavItem = ({icon, text}: {icon: React.ReactNode, text: string}) => (
    <div className="relative flex items-center justify-center group cursor-pointer">
        {icon}
        <span className=" absolute text-orange-800 transition-all top-9
            p-2 duration-100 scale-0 origin-top group-hover:scale-100">{text}</span>
    </div>
);