"use client";
import Buttons from "@/components/Buttons";
import React from "react";
import { toast } from "sonner";

const Prueba = () => {
  return (
    <div>
      <div
        onClick={() => toast("Producto añadido")}
      >
        <Buttons text={"Añadir"} typeBtn={"green"} />
      </div>
    </div>
  );
};

export default Prueba;
