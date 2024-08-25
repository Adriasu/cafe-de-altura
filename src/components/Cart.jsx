"use client";
import React, { useContext } from "react";
import Buttons from "./Buttons";
import { ProductsContext } from "@/context/ProductsContext";
import CardProductsCart from "./CardProductsCart";

const Cart = () => {
  const { dataSelected, totalPrice, btnClearCart } =
    useContext(ProductsContext);

    const styleBtn =  dataSelected.length > 0 ? "cart" : "soldOut";

  return (
    <div className="w-[300px] min-h-[32px] max-h-[440px] bg-[white] gap-2.5 flex flex-col items-center justify-start p-[15px] rounded-[20px] border-2 border-solid border-[#2A5B45]">
      <h2 className="text-[#2A5B45] text-xl leading-7 font-semibold">Cesta</h2>
      <div className="flex flex-col gap-2.5 overflow-y-auto scrollbar-hide">
        {dataSelected.length === 0 ? (
          <p className="text-[rgba(0,0,0,0.4)]">El carrito está vacío.</p>
        ) : (
          dataSelected.map((productSelected, i) => {
            return <CardProductsCart key={i} product={productSelected} location={"cart"} />;
          })
        )}
      </div>
      <div className="flex items-center justify-between w-60">
        <Buttons
          text={`Check-Out: ${totalPrice.toFixed(2)} €`}
          typeBtn={styleBtn}
          link={dataSelected.length > 0 ? "/bag" : ""}
        />

        <Buttons
          text={"Clear"}
          typeBtn={styleBtn}
          onClick={() => btnClearCart(dataSelected)}
        />
      </div>
    </div>
  );
};

export default Cart;
