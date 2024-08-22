"use client";
import React, { useContext } from "react";
import Buttons from "./Buttons";
import { ProductsContext } from "@/context/ProductsContext";

const TotalPrice = ({
  textBtnOne,
  typeBtnOne,
  textBtnTwo,
  typeBtnTwo,
}) => {
  const { totalPrice, totalDelivery } = useContext(ProductsContext);

  const styleCarrDetails = "flex justify-between w-[336px]";
  const styleSubtotalAndSend = "text-sm leading-4";
  return (
    <div className="w-96 h-[280px] bg-[#F7F5F3] flex flex-col justify-between gap-4 p-6">
      <div className="flex flex-col min-w-[336px] min-h-[176px] gap-4">
        <h3 className="text-lg font-semibold leading-6 w-[129px] h-6">
          Total del carrito
        </h3>
        <hr className="border-[1px] border-[#E3DED7]" />
        <div className={`${styleCarrDetails}`}>
          <p className={`${styleSubtotalAndSend}`}>SUBTOTAL</p>
          <p className={`${styleSubtotalAndSend} font-semibold`}>
            {totalPrice.toFixed(2)} €
          </p>
        </div>
        <div className={`${styleCarrDetails}`}>
          <p className={`${styleSubtotalAndSend}`}>ENVÍO</p>
          <p className={`${styleSubtotalAndSend} font-semibold`}>
            {totalDelivery == "0" ? "GRATIS" : "9.00 €"}
          </p>
        </div>
        <hr className="border-[1px] border-[#E3DED7]" />
        <div className={`${styleCarrDetails}`}>
          <p className={`${styleSubtotalAndSend} font-semibold`}>TOTAL</p>
          <div className="flex flex-col justify-center gap-2 items-end">
            <p className={`${styleSubtotalAndSend} font-semibold`}>
              {(parseInt(totalPrice) + parseInt(totalDelivery)).toFixed(2)} €
            </p>
            <p className="text-xs leading-4">
              Incluye{" "}
              {(
                (parseInt(totalPrice) + parseInt(totalDelivery)) *
                0.21
              ).toFixed(2)}
              € de IVA
            </p>
          </div>
        </div>
        <div className="w-[310px] h-10 flex gap-4">
          {textBtnOne === "Pagar y realizar pedido" ? (
            <Buttons
              text={textBtnOne}
              typeBtn={typeBtnOne}
              type="submit"
            />
          ) : (
            <Buttons text={textBtnOne} typeBtn={typeBtnOne} link="/checkOut" />
          )}

          <Buttons text={textBtnTwo} typeBtn={typeBtnTwo} link={"/shop"} />
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
