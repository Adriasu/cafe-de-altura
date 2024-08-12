import Buttons from "@/components/Buttons";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const SplitTwoToneDesktop = () => {
  const inputText = "leading-4 leading-4 flex flex-col gap-1 w-full";
  const inputs =
    "border border-gray-300 w-full rounded-md border-solid shadow-[0px_1px_2px_0px_#0000000D] outline-none px-[10px] hover:border hover:shadow-[0px_1px_2px_0px_#0000000D] hover:border-solid hover:border-[#9B9EA3] focus:border-2 focus:border-[#3F8F6B]";
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
            <Link href={"/"}>
              ¿Buscas un trabajo?{" "}
              <span className="underline text-black font-semibold">
                Ver nuestras ofertas
              </span>
              .
            </Link>
          </div>
        </div>

        <div className="w-[588px] min-h-[552px] flex justify-center items-center shadow-[0px_4px_4px_0px_#00000040] bg-[#FFFFFF]">
          <form className="min-w-[470px] min-h-[488px] flex flex-col items-start gap-6 text-xs font-normal leading-4 text-gray-700">
            <div className={inputText}>
              <label htmlFor="fullName">Nombre completo</label>
              <input
                className={`${inputs} h-[34px]`}
                type="text"
                name="fullName"
                id="fullName"
              />
            </div>
            <div className={inputText}>
              <label htmlFor="email">Email</label>
              <input
                className={`${inputs} h-[34px]`}
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className={inputText}>
              <label htmlFor="phone">Teléfono</label>
              <div className="flex items-center text-sm border h-[34px] border-gray-300 shadow-[0px_1px_2px_0px_#0000000D] rounded-md border-solid hover:border hover:shadow-[0px_1px_2px_0px_#0000000D] hover:border-solid hover:border-[#9B9EA3] focus-within:border-2 focus-within:border-[#3F8F6B]">
                <div className="w-[68px] flex items-center justify-center h-[38px] ">
                  <select className="outline-none" name="country" id="country">
                    <option value="US">US</option>
                    <option value="CO">CO</option>
                    <option value="ES">ES</option>
                  </select>
                </div>
                <input
                  className="w-full placeholder:text-gray-500 outline-none px-[10px]"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>

            <div className={`${inputText} min-h-[142px]`}>
              <label htmlFor="help">Comentarios</label>
              <textarea
                className={`${inputs} placeholder:text-gray-500 placeholder:text-sm h-[122px] pl-[17px] pr-[13px] pt-[13px]`}
                name="help"
                id="help"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>

            <div className="flex gap-3 items-center text-sm">
              <input
                className="accent-[#2A5B45]"
                type="checkbox"
                name="privacy"
                id="privacy"
              />
              <label htmlFor="privacy">
                Acepto la{" "}
                <Link
                  className="text-gray-700 font-semibold underline"
                  href={"/"}
                >
                  Política de Privacidad
                </Link>{" "}
                y los{" "}
                <Link
                  className="text-gray-700 font-semibold underline"
                  href={"/"}
                >
                  Términos y condiciones
                </Link>
                .
              </label>
            </div>

            <Buttons text={"Enviar"} typeBtn={"green"} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SplitTwoToneDesktop;
