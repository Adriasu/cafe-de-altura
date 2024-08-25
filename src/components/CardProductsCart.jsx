"use client";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

const CardProductsCart = ({ product }) => {
  const { btnAddProducts, btnSubtractProducts, dataSelected } =
    useContext(ProductsContext);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubtract = () => {
    if (product.count === 1) {
      setIsDialogOpen(true);
    } else {
      btnSubtractProducts(product, dataSelected);
    }
  };

  const handleConfirmDelete = () => {
    btnSubtractProducts(product, dataSelected);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex items-center bg-[white] w-[280px] min-h-[100px] justify-around border-[1px] rounded-[10px] border-[#E3DED7] hover:bg-[#F7F5F3]">
      <Image
        src={product.img}
        alt={product.nameProduct}
        width={80}
        height={80}
      />
      <div className="text-sm w-[150px] h-[50px] flex flex-col justify-between text-[black]">
        <p className="font-semibold">{product.nameProduct}</p>
        <p>{product.price.toFixed(2)} €</p>
      </div>
      <div className="flex flex-col h-20 justify-between items-center bg-[white] rounded-[5px] border-[1px] border-[#E3DED7]">
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Quitar artículo</AlertDialogTitle>
              <AlertDialogDescription>
                ¿Estás seguro que quieres eliminar el artículo de tu cesta?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>
                Cancelar
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirmDelete}>
                Continuar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Plus
          onClick={() => btnAddProducts(product)}
          className="cursor-pointer border-b-[1px] border-b-[#E3DED7] text-black"
        />
        <p className="w-5 h-5 bg-[#2A5B45B2] flex justify-center items-center text-[white] text-xs rounded-[50%]">
          {product.count}
        </p>

        <button
          onClick={handleSubtract}
          className="cursor-pointer border-t-[1px] border-t-[#E3DED7] text-black"
        >
          <Minus />
        </button>
      </div>
    </div>
  );
};

export default CardProductsCart;
