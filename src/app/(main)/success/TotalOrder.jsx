"use client";
import React, { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import CardProductsCart from "@/components/CardProductsCart";

const TotalOrder = () => {
  const { dataSelected, totalPrice, totalDelivery } =
    useContext(ProductsContext);

  const styleSizeDetails = "text-sm leading-4 flex justify-between";
  return (
    <section className="w-[1200px] min-h-[391.32px] rounded-[10px] flex flex-col gap-6 bg-[#F7F5F3] justify-center items-center p-6">
      <h3 className="text-lg font-semibold leading-6 w-[1152px]">Tu pedido</h3>

      <div className="w-[1152px] flex flex-col gap-6">
        {dataSelected.map((product, i) => {
          return <CardProductsCart key={i} product={product} />;
        })}
      </div>

      <div className="w-[1152px] flex flex-col gap-4">
        <hr />
        <div className={`${styleSizeDetails}`}>
          <p>SUBTOTAL</p>
          <p className="font-semibold">{totalPrice.toFixed(2)} €</p>
        </div>
        <div className={`${styleSizeDetails}`}>
          <p>ENVÍO</p>
          <p className="font-semibold">
            {totalDelivery == "0" ? "GRATIS" : "9.00 €"}
          </p>
        </div>
        <hr />
        <div className={`${styleSizeDetails}`}>
          <p className="font-semibold">TOTAL</p>
          <div className="flex flex-col gap-2 items-end">
            <p className="font-semibold">
              {(parseInt(totalPrice) + parseInt(totalDelivery)).toFixed(2)} €
            </p>
            <p className="text-xs">
              Incluye{" "}
              {(
                (parseInt(totalPrice) + parseInt(totalDelivery)) *
                0.21
              ).toFixed(2)}
              € de IVA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalOrder;
