import React from "react";
import Image from "next/image";
import TotalOrder from "./TotalOrder";
import Buttons from "@/components/Buttons";

const OrderPlaced = () => {
  return (
    <div className="mt-[64px] min-h-[1054px] flex flex-col gap-6 p-10 items-center">
      <div className="w-[64px] h-[64px] bg-[#2A5B45] flex justify-center items-center rounded-[20px]">
        <Image
          src={"/images/ClipboardCheck.png"}
          alt="imagen"
          width={40}
          height={40}
        />
      </div>
      <h2 className="text-2xl font-medium text-[#2A5B45] leading-7">El pedido ha sido realizado con éxito</h2>
      <p className="w-[346px] text-sm font-normal leading-4 text-center">
        El pedido #12387 se encuentra en preparación. <br />
        Lo recibirás dentro de las fechas acordadas en tu envío. Hemos enviado un ticket a tu correo
        electrónico.
      </p>
      <TotalOrder/>
      <Buttons text={"Volver a la tienda"} typeBtn={"green"}/>
    </div>
  );
};

export default OrderPlaced;
