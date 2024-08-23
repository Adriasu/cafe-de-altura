"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Buttons from "@/components/Buttons";
import { useForm } from "react-hook-form";
import { FormInfoContext } from "@/context/FormInfoContext";

const ContactForm = () => {
  const { dataUsers, setDataUsers, formSubmit } = useContext(FormInfoContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      country: "US",
      conditions: false,
    },
  });

  const onSubmit = (data) => {
   formSubmit(data, setDataUsers, "dataUsers", dataUsers)
    reset();
  };

  const inputText = "leading-4 leading-4 flex flex-col gap-1 w-full";
  const inputs =
    "border border-gray-300 w-full rounded-md border-solid shadow-[0px_1px_2px_0px_#0000000D] outline-none px-[10px] hover:border hover:shadow-[0px_1px_2px_0px_#0000000D] hover:border-solid hover:border-[#9B9EA3] focus:border-2 focus:border-[#3F8F6B]";
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-[470px] min-h-[488px] flex flex-col items-start gap-6 text-xs font-normal leading-4 text-gray-700"
    >
      <div className={inputText}>
        <label htmlFor="fullName">Nombre completo</label>
        <input
          {...register("fullName", {required: true})}
          className={`${inputs} h-[34px]`}
          type="text"
          id="fullName"
        />
        {errors.fullName?.type === "required" && <span className="text-red-600">Este campo no puede estar vacío.</span>}
      </div>
      <div className={inputText}>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", {required: true})}
          className={`${inputs} h-[34px]`}
          type="email"
          id="email"
        />
        {errors.email?.type === "required" && <span className="text-red-600">Este campo no puede estar vacío.</span>}
      </div>
      <div className={inputText}>
        <label htmlFor="phone">Teléfono</label>
        <div className="flex items-center text-sm border h-[34px] border-gray-300 shadow-[0px_1px_2px_0px_#0000000D] rounded-md border-solid hover:border hover:shadow-[0px_1px_2px_0px_#0000000D] hover:border-solid hover:border-[#9B9EA3] focus-within:border-2 focus-within:border-[#3F8F6B] focus-within:hover:shadow-none focus-within:hover:border-[#3F8F6B] focus-within:hover:border-2">
          <div className="w-[68px] flex items-center justify-center h-[38px] ">
            <select
              {...register("country")}
              className="outline-none"
              id="country"
            >
              <option value="US">US</option>
              <option value="CO">CO</option>
              <option value="ES">ES</option>
            </select>
          </div>
          <input
            {...register("phone", {required: true, pattern: /^[0-9]+$/ })}
            className="w-full placeholder:text-gray-500 outline-none px-[10px]"
            type="tel"
            id="phone"
            placeholder="+1 (555) 987-6543"
          />
        </div>
          {errors.phone?.type === "required" && <span className="text-red-600">Este campo no puede estar vacío.</span>}
          {errors.phone?.type === "pattern" && <span className="text-red-600">Este campo sólo acepta números.</span>}
      </div>

      <div className={`${inputText} min-h-[142px]`}>
        <label htmlFor="help">Comentarios</label>
        <textarea
          {...register("comments", {required: true})}
          className={`${inputs} placeholder:text-gray-500 placeholder:text-sm h-[122px] pl-[17px] pr-[13px] pt-[13px]`}
          id="help"
          placeholder="¿En qué podemos ayudarte?"
        ></textarea>
        {errors.comments?.type === "required" && <span className="text-red-600">Este campo no puede estar vacío.</span>}
      </div>

      <div className="flex gap-3 items-center text-sm">
        <input
          {...register("conditions")}
          className="accent-[#2A5B45]"
          type="checkbox"
          id="privacy"
        />
        <label htmlFor="privacy">
          Acepto la{" "}
          <Link className="text-gray-700 font-semibold underline" href={"/"}>
            Política de Privacidad
          </Link>{" "}
          y los{" "}
          <Link className="text-gray-700 font-semibold underline" href={"/"}>
            Términos y condiciones
          </Link>
          .
        </label>
      </div>

      <Buttons text={"Enviar"} typeBtn={"green"} type="submit" />
    </form>
  );
};

export default ContactForm;
