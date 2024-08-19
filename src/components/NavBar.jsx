"use client";
import { Phone } from "lucide-react";
import React, { useState, useCallback, useRef } from "react";
import Buttons from "./Buttons";
import Link from "next/link";
import Image from "next/image";
import LinksMenuWrapper from "./LinksMenuWrapper";
import Cart from "./Cart";
import UseOutsideClick from "./UseOutsideClick";

const NavBar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const CartIconRef = useRef(null);

  const showHideCart = (event) => {
    event.stopPropagation();
    setIsCartVisible(!isCartVisible);
  };

  const closeCart = useCallback(() => {
    if (isCartVisible) {
      setIsCartVisible(false);
    }
  }, [isCartVisible]);

  const cartRef = UseOutsideClick(closeCart, CartIconRef);

  return (
    <nav className="bg-[#2B2A2B] min-h-16 flex justify-around items-center text-[#FFFFFF] w-full fixed z-[1] top-0">
      <Link href={"/"}>
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
        <Buttons text={"Iniciar sesión"} typeBtn={"gray"} />
      </div>

      <div ref={CartIconRef} onClick={showHideCart}>
        <Image
          className="cursor-pointer"
          src="/images/Carr.png"
          alt="bag"
          width={24}
          height={24}
        />
        <p></p>
      </div>

      {isCartVisible && (
        <div onClick={(e) => e.stopPropagation()} ref={cartRef} className={`absolute right-[30px] top-[55px]`}>
          <Cart />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
