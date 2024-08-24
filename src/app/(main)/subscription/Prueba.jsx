"use client";
import Buttons from "@/components/Buttons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";
import { toast } from "sonner";

const Prueba = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div onClick={() => toast("Producto añadido")}>
            <Buttons text={"Añadir"} typeBtn={"green"} />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Quitar artículo</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Estás seguro que quieres eliminar el artículo de tu cesta?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction>Continuar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Prueba;
