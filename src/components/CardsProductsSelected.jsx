import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const CardsProductsSelected = ({ selectedProduct, index }) => {
    const styleTextDescription = "text-sm leading-4"

  return (
    <section className={`flex w-[776px] min-h-[55.66px] justify-between ${index > 0 ? 'border-t border-[#E3DED7] pt-6' : ''}`}>
      <div className="flex w-[88px] h-[55.66px] gap-2 items-center justify-center">
        <Minus className="w-6 h-6 cursor-pointer" />
        <p className="w-6 h-6 bg-[#2A5B451A] flex justify-center items-center text-xs font-normal leading-4 text-[#2A5B45] rounded-[50%]">1</p>
        <Plus className="w-6 h-6 cursor-pointer" />
      </div>
      <Image
        src={selectedProduct.img_url}
        alt={selectedProduct.brand}
        height={55.66}
        width={55.66}
      />
      <div className="w-[506.34px] h-9 flex flex-col gap-1">
        <p className={`${styleTextDescription} font-semibold`}>{selectedProduct.brand}</p>
        <p className={`${styleTextDescription}`}>Paquete de café, 250 gr</p>
      </div>
      <p className="text-lg font-semibold leading-6">{selectedProduct.price.toFixed(2)} €</p>
    </section>
  );
};

export default CardsProductsSelected;
