import { Coffee, Phone, ShoppingBag } from "lucide-react";
import React from "react";
import Buttons from "./Buttons";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-[#2B2A2B] min-h-16 flex justify-around items-center text-[#FFFFFF] w-full fixed z-[1] top-0">
      <Link href={'/'}>
        <div className="flex gap-[7.33px] items-center">
          <p className="text-[23.46px] font-normal leading-[35.19px]">
            cafedealtura.com
          </p>
          <Coffee className="w-6 h-6" />
        </div>
      </Link>

      <ul className="flex min-w-[512px] min-h-[32px] gap-4 text-sm leading-4 items-center justify-between font-semibold list-none">
        <Link href={"/shop"}>
          <li className="p-2 rounded-lg hover:bg-[#F7F5F31A]">Tienda</li>
        </Link>
        <Link href={'/subscription'}><li className="p-2 rounded-lg hover:bg-[#F7F5F31A]">Suscripción</li></Link>
        <Link href={'/forCompanies'}><li className="p-2 rounded-lg hover:bg-[#F7F5F31A]">Para empresas</li></Link>
        <Link href={'/aboutUs'}><li className="p-2 rounded-lg hover:bg-[#F7F5F31A]">Sobre nosotros</li></Link>
        <Link href={'/contact'}><li className="p-2 rounded-lg hover:bg-[#F7F5F31A]">Contacto</li></Link>
      </ul>

      <div className="flex min-h-[40px] min-w-[288px] gap-6 text-sm items-center font-semibold">
        <div className="flex gap-2 items-center">
          <Phone className="w-6 h-6" />
          <p className="leading-4">+34 919 49 05 18</p>
        </div>
        <Buttons text={"Iniciar sesión"} typeBtn={"gray"} />
      </div>

      <div>
        <ShoppingBag className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavBar;
