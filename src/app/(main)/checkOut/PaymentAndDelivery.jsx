import React from "react";
import FormCheckOut from "./FormCheckOut";
import TotalPrice from "@/components/TotalPrice";

const PaymentAndDelivery = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-6 min-h-[1108px] mt-16">
      <h2 className="text-[#2A5B45] text-2xl font-medium leading-7">
        Checkout
      </h2>
      <form className="flex w-[1200px] min-h-[972px] gap-6">
        <FormCheckOut />
        <TotalPrice />
      </form>
    </section>
  );
};

export default PaymentAndDelivery;
