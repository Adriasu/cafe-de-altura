import React from "react";
import CardConWrapper from "./CardConWrapper";

const CardsConditions = () => {
  return (
    <div className="min-h-[380px] bg-[url('/images/backgroundCards.jpeg')] bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center gap-6">
      <h2 className="w-[350px] h-7 text-white text-2xl leading-7 font-medium">
        Café con las mejores condiciones
      </h2>
      <div className="flex justify-between items-center max-w-[996px] min-h-[232px] gap-6">
        <CardConWrapper
          textH3={"Recibe tu pedido sin preocuparte"}
          textP={
            "Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana."
          }
          imgRoute={"/images/ClipboardCheck.png"}
        />
        <CardConWrapper
          textH3={"Envío en 24/48h"}
          textP={
            "Pide tu café antes de las 12h y lo recibirás al día siguiente."
          }
          imgRoute={"/images/Truck.png"}
        />
        <CardConWrapper
          textH3={"Descuentos y beneficios"}
          textP={
            "Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros."
          }
          imgRoute={"/images/Gift.png"}
        />
      </div>
    </div>
  );
};

export default CardsConditions;
