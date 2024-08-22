import Image from "next/image";
import React from "react";
import dayjs from "dayjs";


const FormCheckOut = ({register, watch }) => {


  const watchShowPaymentMethod = watch("paymentMethod");

 

  // ------------------- estilos comunes ---------------------- //

  const styleTitleH3 = "text-lg font-semibold leading-[27px]";
  const styleRadios =
    "w-6 h-6 flex justify-center items-center accent-[#2A5B45]";
  const styleInputs =
    "h-[36px] border border-gray-300 rounded-md border-solid outline-none px-[10px] hover:border hover:shadow-[0px_1px_2px_0px_#0000000D] hover:border-solid hover:border-[#9B9EA3] focus:border-2 focus:border-[#3F8F6B]";
  const styleLabel = "text-xs font-normal leading-4";
  const stylePlaceholder =
    "placeholder:text-xs placeholder:font-normal placeholder:leading-4 placeholder:text-[#515051]";
  const styleFormAddress = "flex flex-col gap-[3px] w-[521px] h-[55px]";
  const styleDetailsAddress = "flex flex-col w-[112.25px] h-[55px] gap-[3px]";

  return (
    <div className="flex flex-col w-[792px] h-[972px] gap-6 p-2">
      <h3 className={`${styleTitleH3}`}>Seleccionar método de pago</h3>

      <div className="flex justify-between items-center">
        <div className={`${styleRadios}`}>
          <input
            type="radio"
            id="card"
            {...register("paymentMethod")}
            value={"card"}
            defaultChecked
          />
        </div>
        <div className=" flex flex-col w-[665px] h-9 gap-1 text-sm leading-4 justify-center">
          <label className="font-semibold" htmlFor="card">
            Tarjeta de débito
          </label>
          {watchShowPaymentMethod === "card" && (
            <p className="font-normal">Opción estándar sin seguimiento</p>
          )}
        </div>
        <div className="h-6 w-[55px] rou">
          <p></p>
        </div>
      </div>

      {watchShowPaymentMethod === "card" && (
        <div className="w-[279px] h-[181px] flex flex-col gap-2 justify-between">
          <div className="flex flex-col w-[279px] h-[55px] gap-[3px]">
            <label className={`${styleLabel}`} htmlFor="holderName">
              Titular
            </label>
            <input
              className={`${styleInputs} ${stylePlaceholder}`}
              type="text"
              {...register("holderName")}
              id="holderName"
              placeholder="Nombre del titular"
            />
          </div>
          <div className="flex flex-col w-[279px] h-[55px] gap-[3px]">
            <label className={`${styleLabel}`} htmlFor="numCard">
              Número de la tarjeta
            </label>
            <input
              className={`${styleInputs} ${stylePlaceholder}`}
              type="number"
              {...register("numCard")}
              id="numCard"
              placeholder="1234 1234 1234 1234"
            />
          </div>
          <div className="w-[279px] h-[55px] gap-6 flex justify-between">
            <div className="w-[127.5PX] h-[55PX] flex flex-col gap-[3px]">
              <label className={`${styleLabel}`} htmlFor="expirationDate">
                Fecha de caducidad
              </label>
              <input
                className={`${styleInputs} ${stylePlaceholder}`}
                type="text"
                {...register("expirationDate")}
                id="expirationDate"
                placeholder="MM / YY"
              />
            </div>
            <div className="w-[127.5PX] h-[55PX] flex flex-col gap-[3px]">
              <label className={`${styleLabel}`} htmlFor="cvc">
                CVC
              </label>
              <input
                className={`${styleInputs} ${stylePlaceholder}`}
                type="number"
                {...register("cvc")}
                id="cvc"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      )}

      <hr className="border-[1px] w-[776px] border-[#E3DED7]" />

      <div className="flex justify-between w-[776x] h-9 gap-4 items-center">
        <div className={`${styleRadios}`}>
          <input
            type="radio"
            {...register("paymentMethod")}
            id="paymentBankTransfer"
            value={"bankTransfer"}
          />
        </div>
        <div className="flex flex-col gap-1 w-[736px] h-9 text-sm leading-4 justify-center">
          <label className="font-semibold" htmlFor="paymentBankTransfer">
            Transferencia bancaria a la cuenta ES12 1234 1234 123457890
          </label>
          {watchShowPaymentMethod === "bankTransfer" && (
            <p className="font-normal">
              Será necesario recibir el comprobante de la transferencia para
              preparar tu pedido
            </p>
          )}
        </div>
      </div>

      <hr className="border-[1px] w-[776px] border-[#E3DED7]" />

      <div className="flex w-[776px] gap-4 items-center text-sm font-semibold">
        <div className={`${styleRadios}`}>
          <input
            type="radio"
            {...register("paymentMethod")}
            id="bizumPayment"
            value={"bizum"}
          />
        </div>
        <div className="flex flex-col justify-center">
          <label className="font-semibold" htmlFor="bizumPayment">
            Bizum
          </label>
          {watchShowPaymentMethod === "bizum" && (
            <p className="font-normal">
              Será necesario recibir el comprobante de la transferencia para
              preparar tu pedido
            </p>
          )}
        </div>
        <Image
          src={"/images/bizum.png"}
          alt="bizum"
          width={69.23}
          height={30}
        />
        <div>
          <p></p>
        </div>
      </div>

      <h3 className={`${styleTitleH3}`}>Dirección de envío</h3>

      <div className="w-[521px] h-[433px] flex flex-col gap-2">
        <div className={`${styleFormAddress}`}>
          <label className={`${styleLabel}`} htmlFor="nameUser">
            Nombre
          </label>
          <input
            className={`${styleInputs}`}
            type="text"
            {...register("nameUser")}
            id="nameUser"
            required
          />
        </div>
        <div className={`${styleFormAddress}`}>
          <label className={`${styleLabel}`} for="lastName">
            Apellidos
          </label>
          <input
            className={`${styleInputs}`}
            type="text"
            {...register("lastName")}
            id="lastName"
            required
          />
        </div>
        <div className={`${styleFormAddress}`}>
          <label className={`${styleLabel}`} for="phone">
            Teléfono
          </label>
          <input
            className={`${styleInputs} ${stylePlaceholder}`}
            type="tel"
            {...register("phone")}
            id="phone"
            placeholder="+34 600 6000 600"
            required
          />
        </div>
        <div className={`${styleFormAddress}`}>
          <label className={`${styleLabel}`} for="email">
            Email
          </label>
          <input
            className={`${styleInputs}`}
            type="email"
            {...register("email")}
            id="email"
            required
          />
        </div>
        <div className={`${styleFormAddress}`}>
          <label className={`${styleLabel}`} for="country">
            País
          </label>
          <select
            className={`${styleInputs} ${styleLabel} text-[#515051]`}
            {...register("country")}
            id="country"
            required
          >
            <option value="" hidden>
              Seleccionar
            </option>
            <option value="US">Estados Unidos</option>
            <option value="CO">Colombia</option>
            <option value="ES">España</option>
          </select>
        </div>
        <div className="w-[521px] h-[55px] flex gap-6 justify-between items-center">
          <div className="flex flex-col w-[248.5px] h-[55px] gap-[3px]">
            <label className={`${styleLabel}`} for="population">
              Población
            </label>
            <input
              className={`${styleInputs}`}
              type="text"
              {...register("population")}
              id="population"
              required
            />
          </div>
          <div className="flex flex-col w-[248.5px] h-[55px] gap-[3px]">
            <label className={`${styleLabel}`} for="cp">
              CP
            </label>
            <input
              className={`${styleInputs}`}
              type="number"
              {...register("cp")}
              id="cp"
              required
            />
          </div>
        </div>
        <div className="flex w-[521px] h-[55px] gap-6">
          <div className={`${styleDetailsAddress}`}>
            <label className={`${styleLabel}`} for="street">
              Calle
            </label>
            <input
              className={`${styleInputs}`}
              type="text"
              {...register("street")}
              id="street"
              required
            />
          </div>
          <div className={`${styleDetailsAddress}`}>
            <label className={`${styleLabel}`} for="numStreet">
              Nº
            </label>
            <input
              className={`${styleInputs}`}
              type="number"
              {...register("numStreet")}
              id="numStreet"
              required
            />
          </div>
          <div className={`${styleDetailsAddress}`}>
            <label className={`${styleLabel}`} for="apartment">
              Piso
            </label>
            <input
              className={`${styleInputs}`}
              type="text"
              {...register("apartment")}
              id="apartment"
            />
          </div>
          <div className={`${styleDetailsAddress}`}>
            <label className={`${styleLabel}`} for="door">
              Puerta
            </label>
            <input
              className={`${styleInputs}`}
              type="text"
              {...register("door")}
              id="door"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCheckOut;
