"use client";
import React, { useContext } from "react";
import Buttons from "./Buttons";
import { ProductsContext } from "@/context/ProductsContext";
import CardProductsCart from "./CardProductsCart";
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
} from "./ui/alert-dialog";

const Cart = () => {
  const { dataSelected, totalPrice, btnClearCart } =
    useContext(ProductsContext);

  const styleBtnBag = dataSelected.length > 0 ? "cart" : "soldOut";
  const styleBtnClear = dataSelected.length > 0 ? "clear" : "soldOut";


  return (
    <div className="w-[310px] min-h-[32px] max-h-[467px] bg-[white] gap-2.5 flex flex-col items-center justify-start p-[15px] rounded-[20px] border-2 border-solid border-[#2A5B45]">
      <h2 className="text-[#2A5B45] text-xl leading-7 font-semibold">Cesta</h2>
      <div className="flex flex-col gap-2.5 overflow-y-auto pr-2 cart-scrollbar">
        {dataSelected.length === 0 ? (
          <p className="text-[rgba(0,0,0,0.4)]">El carrito está vacío.</p>
        ) : (
          dataSelected.map((productSelected, i) => {
            return (
              <CardProductsCart
                key={i}
                product={productSelected}
                location={"cart"}
              />
            );
          })
        )}
      </div>
      <div className="flex items-center justify-between w-52">
        <Buttons
          text={`Ir a la Cesta`}
          typeBtn={styleBtnBag}
          link={dataSelected.length > 0 ? "/bag" : ""}
        />

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Buttons text={"Clear"} typeBtn={styleBtnClear} />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Vaciar carrito</AlertDialogTitle>
              <AlertDialogDescription>
                ¿Estás seguro que quieres eliminar todos los artículos de tu
                cesta?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={() => btnClearCart(dataSelected)}>
                Continuar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <p className="text-[#2B2A2B] font-bold">{`TOTAL: ${totalPrice.toFixed(2)} €`}</p>
    </div>
  );
};

export default Cart;
