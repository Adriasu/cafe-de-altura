"use client";
import React, { createContext, useState, useEffect } from "react";

export const FormInfoContext = createContext(null);

export default function FormInfoContextProvider({ children }) {
  const [dataUsers, setDataUsers] = useState({});

  useEffect(() => {
    const dataUserLs = JSON.parse(localStorage.getItem("dataUsers") || "[]");
    setDataUsers(dataUserLs);
  }, []);

  const updateUser = (user) => {
    setDataUsers(user);
    localStorage.setItem("dataUsers", JSON.stringify(user));
  };
  

  return (
    <FormInfoContext.Provider value={{ updateUser, dataUsers }}>
      {children}
    </FormInfoContext.Provider>
  );
}
