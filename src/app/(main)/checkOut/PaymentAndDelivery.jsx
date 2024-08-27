"use client";
import React, { useContext, useState, useEffect } from "react";
import FormCheckOut from "./FormCheckOut";
import TotalPrice from "@/components/TotalPrice";
import { useForm } from "react-hook-form";
import { FormInfoContext } from "@/context/FormInfoContext";
import { useRouter } from "next/navigation";

const PaymentAndDelivery = () => {
  const { formSubmit, dataPayment, setDataPayment } =
    useContext(FormInfoContext);

  const [isFormValid, setIsFormValid] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      paymentMethod: "card",
    },
  });

  const router = useRouter();

  useEffect(() => {
    setIsFormValid(isValid);
  }, [isValid]);

  const onSubmit = (data) => {
    formSubmit(data, setDataPayment, "dataPayment", dataPayment);
    reset();
    router.push("/success");
  };

  return (
    <section className="flex flex-col justify-start items-center gap-6 min-h-[1108px] mt-16 mb-11 pt-10">
      <h2 className="text-[#2A5B45] text-2xl font-medium leading-7">
        Checkout
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[1200px] min-h-[972px] gap-6"
      >
        <FormCheckOut register={register} watch={watch} errors={errors} />
        <TotalPrice
          textBtnOne={"Pagar y realizar pedido"}
          typeBtnOne={"green"}
          isFormValid={isFormValid}
        />
      </form>
    </section>
  );
};

export default PaymentAndDelivery;
