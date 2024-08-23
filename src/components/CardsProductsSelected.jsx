"use client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";

const CardsProductsSelected = ({ selectedProduct, index, component }) => {
  const { btnAddProducts, btnSubtractProducts, dataSelected } =
    useContext(ProductsContext);

  const styleTextDescription = "text-sm leading-4";

  return (
    <section
      className={`flex min-w-[776px] max-h-[80.45px] justify-between gap-6 ${
        index > 0 ? "border-t border-[#E3DED7] pt-6" : ""
      }`}
    >
      {component === "bag" ? (
        <div className="flex w-[88px] h-[55.66px] gap-2 items-center justify-center">
          <Minus
            onClick={() => btnSubtractProducts(selectedProduct, dataSelected)}
            className="w-6 h-6 cursor-pointer"
          />
          <p className="w-6 h-6 bg-[#2A5B451A] flex justify-center items-center text-xs font-normal leading-4 text-[#2A5B45] rounded-[50%]">
            {selectedProduct.count}
          </p>
          <Plus
            onClick={() => btnAddProducts(selectedProduct, dataSelected)}
            className="w-6 h-6 cursor-pointer"
          />
        </div>
      ) : (
        ""
      )}

      <Image
        src={selectedProduct.img}
        alt={selectedProduct.nameProduct}
        height={55.66}
        width={55.66}
      />
      <div className={`${component === "bag" ? "w-[506.34px]" : "w-[994.34px]"} h-9 flex flex-col justify-start gap-1`}>
        <p className={`${styleTextDescription} font-semibold`}>
          {selectedProduct.nameProduct}
        </p>
        <p className={`${styleTextDescription}`}>Paquete de café, 250 gr</p>
      </div>
      <p className="text-lg font-semibold leading-6 min-w-[64px] flex justify-end">
        {selectedProduct.price.toFixed(2)} €
      </p>
    </section>
  );
};

export default CardsProductsSelected;

