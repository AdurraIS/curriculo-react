import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SalesUnityImg from "../../assets/Carrossel.png"
import { CardLink } from "../CardLink/CardLink";
import { FaGithub } from "react-icons/fa";
interface CarouselProps {
  items: string[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="p-5">
        <div className="m-auto bg-orange-200 p-10 rounded-[10px] w-[60vw]">

          <div className="flex flex-row  max-[639px]:flex-col items-center justify-between max-[639px]:w-48 gap-4">
            <div className="w-96">
              <a href="https://github.com/AdurraIS/SpringAPI_LevelGroupChallenge" target="_blank">
                <h3 className="text-[20px] pb-2">🔗 Sales Unity</h3>
              </a>

              <p className="text-[16px] max-[639px]:w-48 mb-4"> Projeto em equipe em que desenvolvemos uma aplicação web com o objetivo de
                simplificar o processo de cotação de compras.
              </p>
              <h4 className="text-[16px] mb-2">Desenvolvemos:</h4>
              <p className="text-[16px] max-[639px]:w-48">
                • API com Spring Boot, que utiliza Spring Security com geração de JWT Tokens para autenticação.
              </p>
              <p className="text-[16px] max-[639px]:w-48">
                • Interface web com React.js para a visualização e geração de orçamentos.
              </p>
              <p className="text-[16px] max-[639px]:w-48">
                • API com .NET para a geração de relatórios.
              </p>
            </div>
            <img src={SalesUnityImg} className="w-[400px] max-[639px]:w-[200px] h-fit border  border-orange-800 rounded " />
          </div>

        </div>
      </div>
      <div className="object-contain text-center">Projeto 2</div>
    </Slider>
  );
};

export default Carousel;
