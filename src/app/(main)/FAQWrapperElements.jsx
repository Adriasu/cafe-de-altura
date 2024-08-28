import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const FAQWrapperElements = () => {
  return (
    <div className="min-h-[444px] bg-[#2A5B45] flex flex-col items-center justify-center gap-6">
      <h2 className="text-white font-medium text-2xl leading-7 h-[93px] flex justify-center p-[17px] items-end">
        Preguntas frecuentes
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-[668px] flex flex-col gap-4"
      >
        <AccordionItem
          value="item-1"
          className="flex flex-col items-center bg-white min-h-[72px] p-6 rounded-[10px] gap-4"
        >
          <AccordionTrigger className="flex justify-between items-center min-w-[620px] min-h-[24px] text-lg font-semibold leading-6 text-[#2B2A2B]">
            ¿Cómo hago el pedido?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-xs">
            <hr className="w-[620px] border border-solid border-[#E3DED7] text-[#2B2A2B]" />
            Selecciona el café que desees probar y completa el proceso de
            compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te
            lo mandemos a casa y así nunca te quedarás sin café.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="flex flex-col items-center bg-white min-h-[72px] p-6 rounded-[10px] gap-4"
        >
          <AccordionTrigger className="flex justify-between items-center min-w-[620px] min-h-[24px] text-lg font-semibold leading-6 text-[#2B2A2B]">
            ¿Por qué los precios son tan bajos?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-xs">
            <hr className="w-[620px] border border-solid border-[#E3DED7] text-[#2B2A2B]" />
            Viajamos constantemente para encontrar los mejores granos y a los
            agricultores más exigentes. Si podemos ofrecerte estos precios es
            porque tratamos directamente con los productores de café, sin
            intermediarios. Así obtenemos el mejor precio para ti y la persona
            que está detrás de los granos de café recibe el mayor beneficio
            posible.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="flex flex-col items-center bg-white min-h-[72px] p-6 rounded-[10px] gap-4"
        >
          <AccordionTrigger className="flex justify-between items-center min-w-[620px] min-h-[24px] text-lg font-semibold leading-6 text-[#2B2A2B]">
            ¿Es posible enviar café a mi oficina?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-xs">
            <hr className="w-[620px] border border-solid border-[#E3DED7] text-[#2B2A2B]" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sit saepe dolores corporis tempore, nulla aut sunt delectus libero
            adipisci, quasi temporibus quis quos! Non nobis laudantium mollitia
            accusantium hic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="w-[178px] h-[72px]">
        <Link
          href={"contact"}
          className="h-6 items-center gap-4 flex justify-center text-sm font-semibold leading-4 text-white underline"
        >
          Resolvemos tus dudas
          <MoveRight className="h-6 w-6"/>
        </Link>
      </div>
    </div>
  );
};

export default FAQWrapperElements;
