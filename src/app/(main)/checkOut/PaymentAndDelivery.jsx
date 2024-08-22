"use client";
import React, { useContext } from "react";
import FormCheckOut from "./FormCheckOut";
import TotalPrice from "@/components/TotalPrice";
import { useForm, Controller } from "react-hook-form";
import { FormInfoContext } from "@/context/FormInfoContext";

const PaymentAndDelivery = () => {
  const { formSubmit, dataPayment, setDataPayment } =
    useContext(FormInfoContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      paymentMethod: "card",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    formSubmit(data, setDataPayment, "dataPayment", dataPayment);
    reset();
  };

  return (
    <section className="flex flex-col justify-center items-center gap-6 h-[1108px] mt-16">
      <h2 className="text-[#2A5B45] text-2xl font-medium leading-7">
        Checkout
      </h2>
      <form className="flex w-[1200px] min-h-[972px] gap-6">
        <FormCheckOut register={register} watch={watch} errors={errors} />
        <TotalPrice
          textBtnOne={"Pagar y realizar pedido"}
          typeBtnOne={"green"}
          onSubmitForm={handleSubmit(onSubmit)}
        />
      </form>
    </section>
  );
};

export default PaymentAndDelivery;
