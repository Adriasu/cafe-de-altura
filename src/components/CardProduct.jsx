"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Buttons from "./Buttons";
import { ProductsContext } from "@/context/ProductsContext";

const CardProduct = ({ data }) => {
  const { dataSelected, productCount } = useContext(ProductsContext);

  const handleClick = () => {
    const productSelect = {
      id: data._id,
      img: data.img_url,
      nameProduct: data.brand,
      price: data.price,
      count: 1,
    };
    productCount(productSelect, dataSelected);
  };

  console.log(dataSelected);

  const styleAvailable = () => {
    if (!data.available) {
      return "opacity-40";
    }
  };

  const hoverAvailable = () => {
    if (data.available) {
      return "group hover:bg-[#f7f5f3]";
    }
  };

  return (
    <div
      className={`${hoverAvailable()} w-[282px] h-[391.39px] gap-6 border flex flex-col items-center justify-center rounded-lg border-solid border-[#E3DED7]`}
    >
      <Image
        className={`${styleAvailable()}`}
        src={data.img_url}
        alt={data.brand}
        width={219.39}
        height={219.39}
      />
      <div
        className={`${styleAvailable()} flex flex-col justify-center items-center gap-3 text-sm leading-4 font-normal`}
      >
        <p className="font-semibold">{data.brand}</p>
        <p>{data.price.toFixed(2)} €</p>
      </div>
      <div onClick={handleClick}>
        <Buttons
          text={data.available ? "Añadir" : "Agotado"}
          typeBtn={data.available ? "add" : "soldOut"}
        />
      </div>
    </div>
  );
};

export default CardProduct;

// const exist = dataSelected.some((product) => product.id === productSelect.id);
// if (exist) {
//   const products = dataSelected.map((product) => {
//     if (product.id === productSelect.id) {
//       product.count++;
//       return product;
//     } else {
//       return product;
//     }
//   });
//   setDataSelected([...products]);
// } else {
//   setDataSelected([...dataSelected, productSelect]);
// }
