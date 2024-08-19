"use client";
import React, { useContext } from "react";
import Buttons from "./Buttons";
import { ProductsContext } from "@/context/ProductsContext";
import CardProductsCart from "./CardProductsCart";

const Cart = () => {
  const { dataSelected, totalPrice } = useContext(ProductsContext);
  return (
    <div className="w-[300px] min-h-[32px] max-h-[440px] bg-[white] gap-2.5 flex flex-col items-center justify-start p-[15px] rounded-[20px] border-2 border-solid border-[#2A5B45]">
      <h2 className="text-[#2A5B45] text-xl leading-7 font-semibold">Cesta</h2>
      <div className="flex flex-col gap-2.5 overflow-y-auto scrollbar-hide">
        {dataSelected.map((productSelected, i) => {
          return <CardProductsCart key={i} product={productSelected} />;
        })}
      </div>
      <div className="flex items-center justify-between w-60">
        <Buttons text={`Check-Out: ${totalPrice.toFixed(2)} €`} typeBtn={"cart"} link={"/bag"} />
        <Buttons text={"Clear"} typeBtn={"cart"} />
      </div>
    </div>
  );
};

export default Cart;
