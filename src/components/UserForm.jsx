"use client";
import React from "react";

const UserForm = () => {
  return (
    <div className="bg-[#E3DED7] w-full flex justify-center items-center h-[500px]">
      <form className="flex flex-col w-[500px] border-[1px] border-[#D1D5DB] rounded-lg gap-6 p-4 text-[#374151] bg-white text-sm">
        <div className="flex flex-col gap-3  justify-center items-start">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Nombre:</label>
            <input
              className="rounded-md px-2 border-[1px] border-[#D1D5DB] h-[34px]"
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email">E-mail:</label>
            <input
              className="rounded-md px-2 border-[1px] border-[#D1D5DB] h-[34px]"
              type="text"
              name="email"
              id="email"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="age">Edad:</label>
            <input
              className="rounded-md px-2 border-[1px] border-[#D1D5DB] h-[34px]"
              type="text"
              name="age"
              id="age"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p>Género:</p>
          <div className="grid grid-cols-2 gap-1">
            <div className="flex gap-2">
              <input type="radio" id="famale" name="gender" value="female" />
              <label htmlFor="famale">Mujer</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Hombre</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="nonbinary"
                name="gender"
                value="nonbinary"
              />
              <label htmlFor="nonbinary">No binario</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" id="other" name="gender" value="other" />
              <label htmlFor="other">Otros / Prefiero no decirlo</label>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <label htmlFor="account">Tipo de cuenta:</label>
          <select name="account" id="account">
            <option value="" disabled selected>
              Escoge una
            </option>
            <option value="basic">Básica</option>
            <option value="premium">Premium</option>
            <option value="business">Business</option>
          </select>
        </div>

        <div className="flex gap-3">
          <label htmlFor="publicity">
            Acepto recibir publicidad por email:
          </label>
          <input type="checkbox" id="publicity" name="publicity" value={true} />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
