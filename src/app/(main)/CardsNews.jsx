"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import CardProduct from "@/components/CardProduct";

const CardsNews = () => {
    const {dataCoffee} = useContext(ProductsContext)
  return (
    <div className="min-h-[603.39px] flex flex-col justify-center items-center gap-10">
      <h2 className="text-2xl font-medium text-[#2A5B45] leading-7 w-[120px]">
        Novedades
      </h2>
      <div className="flex max-w-[1200px] min-h-[391.39px] gap-6 justify-between items-center">
        {dataCoffee.slice(0, 4).map((card, i) => {
          return <CardProduct key={i} data={card} />;
        })}
      </div>
      <div>
        <Link
          className="flex justify-between items-center gap-4 text-sm font-semibold text-black"
          href={"/shop"}
        >
          Ver todos
          <ArrowRight className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default CardsNews;
