import Image from "next/image";
import React from "react";

const FormCheckOut = () => {
    const styleTitleH3 = "text-lg font-semibold leading-[27px]"
    const styleRadios = "w-6 h-6 flex justify-center items-center accent-[#2A5B45]"
  return (
    <div className="flex flex-col w-[792px] min-h-[972px] gap-6 p-2">
      <h3 className={`${styleTitleH3}`}>Seleccionar método de pago</h3>

      <div className="flex justify-between items-center">
        <div  className={`${styleRadios}`}>
          <input type="radio" name="paymentMethod" id="card" />
        </div>
        <div className=" flex flex-col w-[665px] h-9 gap-1 text-sm leading-4">
          <label className="font-semibold" htmlFor="card">Tarjeta de débito</label>
          <p className="font-normal">Opción estándar sin seguimiento</p>
        </div>
        <div className="h-6 w-[55px]">
          <p></p>
        </div>
      </div>

      <div>
        <div>
          <label htmlFor="holderName">Titular</label>
          <input
            type="text"
            name="holderName"
            id="holderName"
            placeholder="Nombre del titular"
          />
        </div>
        <div>
          <label htmlFor="numCard">Número de la tarjeta</label>
          <input
            type="number"
            name="numCard"
            id="numCard"
            placeholder="1234 1234 1234 1234"
          />
        </div>
        <div>
          <div>
            <label htmlFor="expirationDate">Fecha de caducidad</label>
            <input
              type="text"
              name="expirationDate"
              id="expirationDate"
              placeholder="MM / YY"
            />
          </div>
          <div>
            <label htmlFor="cvc">CVC</label>
            <input type="number" name="cvc" id="cvc" placeholder="123" />
          </div>
        </div>
      </div>

      <hr />

      <div>
        <div className={`${styleRadios}`}>
          <input type="radio" name="paymentMethod" id="paymentBankTransfer" />
        </div>
        <div>
          <label htmlFor="paymentBankTransfer">
            Transferencia bancaria a la cuenta ES12 1234 1234 123457890
          </label>
          <p>
            Será necesario recibir el comprobante de la transferencia para
            preparar tu pedido
          </p>
        </div>
      </div>

      <hr />

      <div>
        <div className={`${styleRadios}`}>
          <input type="radio" name="paymentMethod" id="bizumPayment" />
        </div>
        <div>
          <label htmlFor="bizum">Bizum</label>
          <p>
            Será necesario recibir el comprobante de la transferencia para
            preparar tu pedido
          </p>
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

      <div>
        <div>
          <label htmlFor="nameUser">Nombre</label>
          <input type="text" name="nameUser" id="nameUser" required />
        </div>
        <div>
          <label for="lastName">Apellidos</label>
          <input type="text" name="lastName" id="lastName" required />
        </div>
        <div>
          <label for="phone">Teléfono</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+34 600 6000 600"
            required
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label for="country">País</label>
          <select name="country" id="country" required>
            <option value="" hidden></option>
            <option value="US">Estados Unidos</option>
            <option value="CO">Colombia</option>
            <option value="ES">España</option>
          </select>
        </div>
        <div>
          <div>
            <label for="population">Población</label>
            <input type="text" name="population" id="population" required />
          </div>
          <div>
            <label for="cp">CP</label>
            <input type="number" name="cp" id="cp" required />
          </div>
        </div>
        <div>
          <div>
            <label for="street">Calle</label>
            <input type="text" name="street" id="street" required />
          </div>
          <div>
            <label for="numStreet">Nº</label>
            <input type="number" name="numStreet" id="numStreet" required />
          </div>
          <div>
            <label for="apartment">Piso</label>
            <input type="text" name="apartment" id="apartment" />
          </div>
          <div>
            <label for="door">Puerta</label>
            <input type="text" name="door" id="door" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCheckOut;
