import React from "react";
import Buttons from "../../components/Buttons";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center min-h-[486px] shadow-[0px_4px_4px_0px_#00000040] bg-[#e3ded74d]">
      <div className="flex items-center justify-between max-w-[1200px] min-h-[390px] gap-6">
        <div className="flex flex-col justify-between max-w-[588px] min-h-[232px] gap-4">
          <h3 className="font-semibold text-lg leading-6 text-[#2A5B45]">De la planta a tu taza</h3>
          <h1 className="font-semibold text-[40px] leading-[44px]">El mejor café del mundo, ahora en tu casa.</h1>
          <p className="font-normal text-sm leading-4">
            Trabajamos con agricultores de todo el mundo para seleccionar los
            mejores granos de café y que puedas viajar desde la comodidad de tu
            hogar.
          </p>
          <div className="flex items-center min-w-[321px] min-h-[40px] gap-4 font-semibold text-sm leading-4">
            <Buttons text={"Descubrir orígenes"} typeBtn={"brown"} />
            <Buttons text={"Comprar café"} typeBtn={"green"}/>
          </div>
        </div>
        <Image src="/images/HeroImage.png" alt="hero image" width={588} height={390}/>
      </div>
    </div>
  );
};

export default Hero;
