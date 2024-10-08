import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";
import LinksMenuWrapper from "./LinksMenuWrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-[270px] bg-[#1F1815] flex flex-col items-center justify-between text-white font-semibold text-sm leading-4">
      <div className="flex flex-col w-[1200px] min-h-[201px] gap-4 mt-[28.61px]">
        <Link href={"/"}>
          <div className="w-72 min-h-[36px] flex gap-[7.33px] items-center font-normal text-[23.46px] leading-[35.19px]">
            <p>cafedealtura.com</p>
            <Image
              src="/images/Vector.png"
              alt="coffe"
              width={20.53}
              height={24.93}
            />
          </div>
        </Link>

        <div className="w-[1132px] h-[152px] flex justify-between relative">
          <div className="w-[255.33px] min-h-[152px] flex flex-col gap-4 items-start">
            <p>Te ayudamos en</p>
            <div>
              <div>
                <Buttons
                  icon={<Phone />}
                  text={"+34 919 49 05 18"}
                  typeBtn={"gray"}
                  link={"/contact"}
                />
              </div>
            </div>
            <div>
              <div>
                <Buttons
                  icon={<Mail />}
                  text={"hola@cafedealtura.com"}
                  typeBtn={"gray"}
                  link={"/contact"}
                />
              </div>
            </div>
          </div>

          <LinksMenuWrapper direction={"col"} />

          <ul className="flex flex-col gap-4 absolute top-[3px] left-[800px]">
            <Link href={"/privacyAndPolicy"}><li className="cursor-pointer">Política de privacidad</li></Link> 
            <Link href={"/privacyAndPolicy"}><li className="cursor-pointer">Política de cookies</li></Link> 
            <Link href={"/privacyAndPolicy"}><li className="cursor-pointer">Términos y condiciones</li></Link> 
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
