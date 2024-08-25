"use client";
import React, { useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import CardProduct from "./CardProduct";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ContainCarsdProducts = ({ location, title }) => {
  const { dataCoffee } = useContext(ProductsContext);
  return (
    <section
      className={` flex flex-col justify-center items-center ${
        location === "home"
          ? "gap-10 min-h-[603.39px]"
          : "gap-6 mt-16 min-h-[938.79px]"
      }`}
    >
      <h2 className="text-2xl font-medium text-[#2A5B45] leading-7">{title}</h2>
      <div className={`flex flex-wrap w-[1200px] gap-6`}>
        {location === "home"
          ? dataCoffee.slice(0, 4).map((card, i) => {
              return <CardProduct key={i} data={card} />;
            })
          : dataCoffee.map((card, i) => {
              return <CardProduct key={i} data={card} />;
            })}
      </div>
      {location === "home" ? (
        <div>
            <Link
          className="flex justify-between items-center gap-4 text-sm font-semibold text-black underline"
          href={"/shop"}
        >
          Ver todos
          <ArrowRight className="h-6 w-6" />
        </Link>
        </div>
      ) : ""}
    </section>
  );
};

export default ContainCarsdProducts;
