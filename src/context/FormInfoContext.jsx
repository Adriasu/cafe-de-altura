"use client";
import React, { createContext, useState, useEffect } from "react";

export const FormInfoContext = createContext(null);

export default function FormInfoContextProvider({ children }) {
  const [dataUsers, setDataUsers] = useState([]);
  const [dataPayment, setDataPayment] = useState([]);

  useEffect(() => {
    const dataUserLs = JSON.parse(localStorage.getItem("dataUsers") || "[]");
    setDataUsers(dataUserLs);
    const dataPaymentLS = JSON.parse(
      localStorage.getItem("dataPayment") || "[]"
    );
    setDataPayment(dataPaymentLS);
  }, []);

  const formSubmit = (data, setState, keyLS, processedData) => {
    const addUser = [...processedData, data];
    setState(addUser);
    localStorage.setItem(`${keyLS}`, JSON.stringify(addUser));
  };

  console.log(dataPayment);
  

  return (
    <FormInfoContext.Provider
      value={{ dataUsers, dataPayment, setDataUsers, formSubmit, setDataPayment }}
    >
      {children}
    </FormInfoContext.Provider>
  );
}
