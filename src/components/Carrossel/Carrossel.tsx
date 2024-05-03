import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SalesUnityImg from "../../assets/Carrossel.png"

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
        <div className="m-auto border-orange-800 bg-orange-200 p-5 border rounded-xl w-fit">
          
          <div className="flex flex-row  max-[639px]:flex-col max-[639px]:w-48 gap-4">
            <div className="w-96">
            <h3 className="text-[20px] pb-2">Sales Unity</h3>
            <p  className="text-[16px] max-[639px]:w-48">Desenvolvi uma API com Spring Boot, que utiliza Spring Security para geração de JWT Tokens.
                Nesse mesmo projeto também desenvolvi uma plataforma em React.js que faz uso da API e facilita
                o usuario a fazer pedido de orçamentos e visualização de métricas.
            </p>
            </div>
            <img src={SalesUnityImg} className="w-[500px]  max-[639px]:w-[200px] border  border-orange-800 rounded "/>
          </div>
          
        </div>
      </div>
      <div className="object-contain text-center">Projeto 2</div>
    </Slider>
  );
};

export default Carousel;
