"use client";
import React, { createContext, useState, useEffect } from "react";

export const FormContext = createContext(null);

export default function FormContextProvider({ children }) {
  const [dataUsers, setDataUsers] = useState([]);
  const [filterDataUser, setFilterDataUsers] = useState([]);

  useEffect(() => {
    const dataUserLs = JSON.parse(localStorage.getItem("dataUser") || "[]");
    setDataUsers(dataUserLs);
    setFilterDataUsers(dataUserLs);
  }, []);

  const updateUser = (user) => {
    setDataUsers(user);
    setFilterDataUsers(user);
	localStorage.setItem("dataUser", JSON.stringify(user));
  };

  return (
    <FormContext.Provider
      value={{
        dataUsers,
        setDataUsers,
        filterDataUser,
        setFilterDataUsers,
        updateUser,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}



