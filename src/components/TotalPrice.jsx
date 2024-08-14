import React from "react";

const TotalPrice = ({ btnOne, btnTwo }) => {
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
          <p className={`${styleSubtotalAndSend} font-semibold`}>0.00 €</p>
        </div>
        <div className={`${styleCarrDetails}`}>
          <p className={`${styleSubtotalAndSend}`}>ENVÍO</p>
          <p className={`${styleSubtotalAndSend} font-semibold`}>GRATIS</p>
        </div>
        <hr className="border-[1px] border-[#E3DED7]" />
        <div className={`${styleCarrDetails}`}>
          <p className={`${styleSubtotalAndSend} font-semibold`}>TOTAL</p>
          <div className="flex flex-col justify-center gap-2 items-end">
            <p className={`${styleSubtotalAndSend} font-semibold`}>0.00 €</p>
            <p className="text-xs leading-4">Incluye 0.00€ de IVA</p>
          </div>
        </div>
        <div className="w-[310px] h-10 flex gap-4">
          {btnOne} {btnTwo}
        </div>
      </div>
    </div>
  );
};

export default TotalPrice;
