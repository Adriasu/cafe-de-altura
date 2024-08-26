"use client";
import { Phone } from "lucide-react";
import React, { useState, useContext, useEffect } from "react";
import Buttons from "./Buttons";
import Link from "next/link";
import Image from "next/image";
import LinksMenuWrapper from "./LinksMenuWrapper";
import Cart from "./Cart";
import { ProductsContext } from "@/context/ProductsContext";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const { totalOfProducts, clearLs } = useContext(ProductsContext);
  const pathName = usePathname();

  const showHideCart = () => {
    isCartVisible === false ? setIsCartVisible(true) : setIsCartVisible(false);
  };

  useEffect(() => {
    setIsCartVisible(false);
  }, [pathName]); 

  const cartPointerAvailable = pathName === "/" || pathName === "/shop";
  const bagEmpty = pathName === "/success";

  return (
    <nav className="bg-[#2B2A2B] min-h-16 flex justify-around items-center text-[#FFFFFF] w-full fixed z-[1] top-0">
      <Link onClick={bagEmpty ? clearLs : ""} href={"/"}>
        <div className="flex gap-[7.33px] items-center">
          <p className="text-[23.46px] font-normal leading-[35.19px]">
            cafedealtura.com
          </p>
          <Image
            src="/images/Vector.png"
            alt="coffe"
            height={24.93}
            width={20.53}
          />
        </div>
      </Link>

      <LinksMenuWrapper direction={"row"} />

      <div className="flex min-h-[40px] min-w-[288px] gap-6 text-sm items-center font-semibold">
        <div className="flex gap-2 items-center">
          <Phone className="w-6 h-6" />
          <p className="leading-4">+34 919 49 05 18</p>
        </div>
        <Buttons text={"Iniciar sesión"} typeBtn={"gray"} link={"/login"} />
      </div>

      <div
        className="flex items-center gap-2"
      >
        {totalOfProducts === 0 || bagEmpty ? (
          <Image
            onClick={showHideCart}
            className={`${
              cartPointerAvailable ? "cursor-pointer" : "cursor-default"
            }`}
            src="/images/Carr.png"
            alt="bag"
            width={24}
            height={24}
          />
        ) : (
          <Image
            onClick={showHideCart}
            className={`${
              cartPointerAvailable ? "cursor-pointer" : "cursor-default"
            }`}
            src="/images/CarrLleno.png"
            alt="bagFull"
            width={24}
            height={24}
          />
        )}

        <p
          className={`${
            totalOfProducts === 0 || bagEmpty ? "hidden" : "flex"
          } w-6 h-6 text-white text-xs font-normal leading-4 items-center justify-center rounded-[50%] bg-[#F7F5F31A]`}
        >
          {totalOfProducts}
        </p>
      </div>

      {isCartVisible && cartPointerAvailable && (
        <div
          className={`absolute right-[30px] top-[55px]`}
        >
          <Cart />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
