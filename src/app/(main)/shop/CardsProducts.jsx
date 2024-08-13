"use client";
import React, { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import CardProduct from "@/components/CardProduct";

const CardsProducts = () => {
  const { dataCoffee } = useContext(ProductsContext);
  return (
    <section className="min-h-[938.79px] flex flex-col justify-center items-center gap-6 mt-16">
      <h2 className="text-2xl font-medium text-[#2A5B45] leading-7">Últimos orígenes</h2>
      <div className="flex flex-wrap w-[1200px] gap-6">
        {dataCoffee.map((card, i) => {
          return <CardProduct key={i} data={card} />;
        })}
      </div>
    </section>
  );
};

export default CardsProducts;
