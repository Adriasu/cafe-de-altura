import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const CardsProductsSelected = ({selectedProduct}) => {
  return (
    <section>
      <div>
        <Minus/>
        <p>1</p>
        <Plus/>
      </div>
      <Image src={selectedProduct.img_url} alt={selectedProduct.brand} height={55.66} width={55.66} />
      <div>
        <p>{selectedProduct.brand}</p>
        <p>Paquete de café, 250 gr</p>
      </div>
      <p>{selectedProduct.price.toFixed(2)} €</p>
    </section>
  );
};

export default CardsProductsSelected;
