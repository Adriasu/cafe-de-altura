"use client";
import Buttons from "@/components/Buttons";
import TotalPrice from "@/components/TotalPrice";
import React, { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import CardsProductsSelected from "@/components/CardsProductsSelected";
import Link from "next/link";

const BagProductsSend = () => {
  const { dataCoffee } = useContext(ProductsContext);

  const styleH3ProductsSend = "text-lg font-semibold leading-6";
  const styleSend = "w-[776px] h-9 flex justify-between items-center gap-4";
  const styleSelectorDelivery = "h-6 w-6 flex justify-center items-center";
  const styleContainTextDelivery =
    "min-h-[36px] text-sm leading-4 flex flex-col gap-1 justify-center";
  return (
    <section className="h-screen flex flex-col grow shrink gap-6 items-center mt-16 p-10">
      <h2 className="text-[#2A5B45] text-2xl font-medium leading-7">
        Cesta (2)
      </h2>
      <div className="w-[1200px] min-h-[415.32px] flex gap-6">
        <div className="w-[792PX] min-h-[415.32px] flex flex-col gap-4 p-2 justify-start">
          <h3 className={`${styleH3ProductsSend}`}>Productos</h3>

          {dataCoffee.slice(0, 4).map((product, i) => {
            return (
              <CardsProductsSelected
                key={i}
                selectedProduct={product}
                index={i}
              />
            );
          })}

          <h3 className={`${styleH3ProductsSend}`}>Seleccionar envío</h3>
          <form className="flex flex-col gap-4">
            <div className={`${styleSend}`}>
              <div className={`${styleSelectorDelivery}`}>
                <input type="radio" id="free" name="send" value={0} />
              </div>
              <div className={`${styleContainTextDelivery} w-[657px]`}>
                <label className="font-semibold" htmlFor="free">
                  Envío 5-7 días
                </label>
                <p className="font-normal">Opción estándar sin seguimiento</p>
              </div>
              <h3 className={`${styleH3ProductsSend}`}>GRATIS</h3>
            </div>

            <hr className="border-[1px] border-[#E3DED7]" />

            <div className={`${styleSend}`}>
              <div className={`${styleSelectorDelivery}`}>
                <input type="radio" id="urgent" name="send" value={9} />
              </div>
              <div className={`${styleContainTextDelivery} w-[666px]`}>
                <label className="font-semibold" htmlFor="">
                  Envío urgente 24h{" "}
                </label>
                <p className="font-normal">
                  Recibe tu pedido en las siguientes 24h (Para pedidos
                  realizados antes de las 13:00).
                </p>
              </div>
              <h3 className={`${styleH3ProductsSend}`}>9,00 €</h3>
            </div>
          </form>
        </div>

        <TotalPrice
          textBtnOne={"Ir a checkout"}
          typeBtnOne={"green"}
          textBtnTwo={"Seguir comprando"}
          typeBtnTwo={"white"}
        />
      </div>
    </section>
  );
};

export default BagProductsSend;
