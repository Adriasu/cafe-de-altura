import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";
import LinksMenuWrapper from "./LinksMenuWrapper";

const Footer = () => {
  return (
    <footer className="h-[310px] bg-[#1F1815] flex flex-col items-center justify-between text-white font-semibold text-sm leading-4 relative">
      <div className="flex flex-col w-[1200px] min-h-[201px] gap-4 mt-[28.61px]">
        <div className="w-72 min-h-[36px] flex gap-[7.33px] items-center font-normal text-[23.46px] leading-[35.19px]">
          <p>cafedealtura.com</p>
          <Image
            src="/images/Vector.png"
            alt="coffe"
            width={20.53}
            height={24.93}
          />
        </div>

        <div className="w-[1132px] h-[152px] flex justify-between relative">
          <div className="w-[255.33px] min-h-[152px] flex flex-col gap-4 items-start">
            <p>Te ayudamos en</p>
            <div>
              <div>
                <Buttons
                  icon={<Phone />}
                  text={"+34 919 49 05 18"}
                  typeBtn={"gray"}
                />
              </div>
            </div>
            <div>
              <div>
                <Buttons
                  icon={<Mail />}
                  text={"hola@cafedealtura.com"}
                  typeBtn={"gray"}
                />
              </div>
            </div>
          </div>

          <LinksMenuWrapper direction={"col"}/>




        </div>
      </div>
    </footer>
  );
};

export default Footer;
