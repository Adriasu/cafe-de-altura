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

const CardProductsCart = ({ product, location, index, component }) => {
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

  const styleTextDescription = "text-sm leading-4";

  if (location === "cart") {
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
  } else {
    return (
      <section
        className={`flex min-w-[776px] max-h-[80.45px] justify-between gap-6 ${
          index > 0 ? "border-t border-[#E3DED7] pt-6" : ""
        }`}
      >
        {component === "bag" ? (
          <div className="flex w-[88px] h-[55.66px] gap-2 items-center justify-center">
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
  
            <button onClick={handleSubtract} className="w-6 h-6 cursor-pointer">
              <Minus />
            </button>
  
            <p className="w-6 h-6 bg-[#2A5B451A] flex justify-center items-center text-xs font-normal leading-4 text-[#2A5B45] rounded-[50%]">
              {product.count}
            </p>
  
            <Plus
              onClick={() => btnAddProducts(product, dataSelected)}
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        ) : (
          ""
        )}
  
        <Image
          src={product.img}
          alt={product.nameProduct}
          height={55.66}
          width={55.66}
        />
        <div
          className={`${
            component === "bag" ? "w-[506.34px]" : "w-[994.34px]"
          } h-9 flex flex-col justify-start gap-1`}
        >
          <p className={`${styleTextDescription} font-semibold`}>
            {product.nameProduct}
          </p>
          <p className={`${styleTextDescription}`}>Paquete de café, 250 gr</p>
        </div>
        <p className="text-lg font-semibold leading-6 min-w-[64px] flex justify-end">
          {product.price.toFixed(2)} €
        </p>
      </section>
    );
  }

};

export default CardProductsCart;
