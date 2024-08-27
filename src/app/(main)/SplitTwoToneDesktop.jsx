import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";

const SplitTwoToneDesktop = () => {
  
  return (
    <div className="min-h-[552px] bg-[#E3DED7] flex justify-center">
      <div className="max-w-[1200px] min-h-[552px] gap-6 opacity-[90%] bg-[#E3DED7] flex items-center justify-between">
        <div className="flex flex-col gap-8 w-[588px] h-80 font-normal text-sm leading-4 text-gray-500">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg leading-6 text-gray-900">
              Entra en contacto con nosotros
            </h3>
            <p>
              Si tienes dudas, ponte en contacto con nosotros a través del
              formulario y te responderemos lo antes posible.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p>
              También puedes ponerte en contacto con nostros en nuestra
              dirección o a través del teléfono de la tienda.
            </p>
            <div>
              <p>742 Evergreen Terrace</p>
              <p>Springfield, OR 12345</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <Phone className="h-6 w-6" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="h-6 w-6" />
                <p>support@example.com</p>
              </div>
            </div>
            <Link href={"/jobCenter"}>
              ¿Buscas un trabajo?{" "}
              <span className="underline text-black font-semibold">
                Ver nuestras ofertas
              </span>
              .
            </Link>
          </div>
        </div>

        <div className="w-[588px] min-h-[552px] flex items-center shadow-[0px_4px_4px_0px_#00000040] bg-[#FFFFFF]">
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default SplitTwoToneDesktop;
