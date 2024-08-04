/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FormContext } from "@/context/FormContext";
import React, { useState, useContext } from "react";

const UserForm = () => {
  const { dataUsers, updateUser} = useContext(FormContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    account: "",
    publicity: false,
  });

  const handleInput = (event) => {
    const { name, type, checked, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const addUser = [...dataUsers, user];
    updateUser(addUser);
    event.target.reset();
    setUser({
      name: "",
      email: "",
      age: "",
      gender: "",
      phone: "",
      account: "",
      publicity: false,
    });
  };

  return (
    <div className="bg-[#E3DED7] w-full flex flex-col justify-start items-center h-[600px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[500px] border-[1px] border-[#D1D5DB] rounded-lg gap-6 p-4 text-[#374151] bg-white text-sm"
      >
        <div className="flex flex-col gap-3  justify-center items-start">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="name">Nombre:</label>
            <input
              required
              onChange={handleInput}
              className="rounded-md px-2 border-[1px] border-[#D1D5DB] h-[34px]"
              type="text"
              name="name"
              value={user.name}
              id="name"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email">E-mail:</label>
            <input
              required
              onChange={handleInput}
              className="rounded-md px-2 border-[1px] border-[#D1D5DB] h-[34px]"
              type="text"
              name="email"
              value={user.email}
              id="email"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="age">Edad:</label>
            <input
              required
              onChange={handleInput}
              className="rounded-md px-2 border-[1px] border-[#D1D5DB] h-[34px]"
              type="number"
              name="age"
              value={user.age}
              id="age"
            />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="phone">Telefono:</label>
            <input
              required
              onChange={handleInput}
              className="rounded-md px-2 border-[1px] border-[#D1D5DB] h-[34px]"
              type="tel"
              name="phone"
              value={user.phone}
              id="phone"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p>Género:</p>
          <div className="grid grid-cols-2 gap-1">
            <div className="flex gap-2">
              <input
                required
                onChange={handleInput}
                type="radio"
                id="famale"
                name="gender"
                value="female"
              />
              <label htmlFor="famale">Mujer</label>
            </div>
            <div className="flex gap-2">
              <input
                required
                onChange={handleInput}
                type="radio"
                id="male"
                name="gender"
                value="male"
              />
              <label htmlFor="male">Hombre</label>
            </div>
            <div className="flex gap-2">
              <input
                required
                onChange={handleInput}
                type="radio"
                id="nonbinary"
                name="gender"
                value="nonbinary"
              />
              <label htmlFor="nonbinary">No binario</label>
            </div>
            <div className="flex gap-2">
              <input
                required
                onChange={handleInput}
                type="radio"
                id="other"
                name="gender"
                value="other"
              />
              <label htmlFor="other">Otros / Prefiero no decirlo</label>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <label htmlFor="account">Tipo de cuenta:</label>
          <select required onChange={handleInput} name="account" id="account">
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
          <input
            onChange={handleInput}
            type="checkbox"
            id="publicity"
            name="publicity"
            value={user.publicity}
          />
        </div>
        <input
          className="px-6 py-3 bg-[#2A5B45] rounded text-white"
          type="submit"
          value={"Enviar"}
        />
      </form>
    </div>
  );
};

export default UserForm;
