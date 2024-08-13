import Link from "next/link";
import React from "react";

const LinksMenuWrapper = ({ direction }) => {
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
      <Link href={"/shop"}>
        <li className={`${styleLi()}`}>Tienda</li>
      </Link>
      <Link href={"/subscription"}>
        <li className={`${styleLi()}`}>Suscripción</li>
      </Link>
      <Link href={"/forCompanies"}>
        <li className={`${styleLi()}`}>Para empresas</li>
      </Link>
      <Link href={"/aboutUs"}>
        <li className={`${styleLi()}`}>Sobre nosotros</li>
      </Link>
      <Link href={"/contact"}>
        <li className={`${styleLi()}`}>Contacto</li>
      </Link>
    </ul>
  );
};

export default LinksMenuWrapper;
