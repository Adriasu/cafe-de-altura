"use client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";

const CardProductsCart = ({ product }) => {
  const { btnAddProducts, btnSubtractProducts, dataSelected } = useContext(ProductsContext);

  return (
    <div className="flex items-center bg-[white] w-[280px] min-h-[100px] justify-around border-[1px] rounded-[10px] border-[#E3DED7] hover:bg-[#F7F5F3]">
      <Image
        src={product.img}
        alt={product.nameProduct}
        width={80}
        height={80}
      />
      <div className="text-sm w-[150px] h-[50px] flex flex-col justify-between text-[black]">
        <p className="font-semibold">{product.nameProduct}</p>
        <p>{product.price.toFixed(2)} €</p>
      </div>
      <div className="flex flex-col h-20 justify-between items-center bg-[white] rounded-[5px] border-[1px] border-[#E3DED7]">
        <Plus
          onClick={() => btnAddProducts(product)}
          className="cursor-pointer border-b-[1px] border-b-[#E3DED7] text-black"
        />
        <p className="w-5 h-5 bg-[#2A5B45B2] flex justify-center items-center text-[white] text-xs rounded-[50%]">
          {product.count}
        </p>
        <Minus
          onClick={() => btnSubtractProducts(product, dataSelected)}
          className="cursor-pointer border-t-[1px] border-t-[#E3DED7] text-black"
        />
      </div>
    </div>
  );
};

export default CardProductsCart;
