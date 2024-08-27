"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { ProductsContext } from "@/context/ProductsContext";

const LinksMenuWrapper = ({ direction }) => {

  const { clearLs } = useContext(ProductsContext);

  const pathName = usePathname();

  const linkBtnClearLs = pathName === "/success" ? clearLs : ""

  const styleUl = () => {
    if (direction === "row") {
      return "flex-row min-w-[512px] min-h-[32px] items-center";
    } else {
      return "flex-col min-w-[96px] min-h-[144px] absolute top-[2.61px] left-[577px]";
    }
  };

  const styleLi = () => {
    if (direction === "row") {
      return "p-2 rounded-lg hover:bg-[#F7F5F31A]";
    } else {
      ("");
    }
  };

  return (
    <ul
      className={`flex ${styleUl()}  gap-4 text-sm leading-4 justify-between font-semibold list-none`}
    >
      <Link onClick={linkBtnClearLs} href={"/shop"}>
        <li className={`${styleLi()}`}>Tienda</li>
      </Link>
      <Link onClick={linkBtnClearLs} href={"/subscription"}>
        <li className={`${styleLi()}`}>Suscripción</li>
      </Link>
      <Link onClick={linkBtnClearLs} href={"/forCompanies"}>
        <li className={`${styleLi()}`}>Para empresas</li>
      </Link>
      <Link onClick={linkBtnClearLs} href={"/aboutUs"}>
        <li className={`${styleLi()}`}>Sobre nosotros</li>
      </Link>
      <Link onClick={linkBtnClearLs} href={"/contact"}>
        <li className={`${styleLi()}`}>Contacto</li>
      </Link>
    </ul>
  );
};

export default LinksMenuWrapper;
