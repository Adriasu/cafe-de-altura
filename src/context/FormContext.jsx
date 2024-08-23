"use client";
import React, { createContext, useState, useEffect, useRef } from "react";

export const FormContext = createContext(null);

export default function FormContextProvider({ children }) {
  const [dataUsers, setDataUsers] = useState([]);
  const [filterDataUser, setFilterDataUsers] = useState([]);
  const [searchMessage, setSearchMessage] = useState("");
  const inputRef = useRef(null);

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

  const searchUserByEmail = (email) => {
    if (email) {
      const filterEmail = dataUsers.filter((user) => {
        return user.email.toLowerCase() === email;
      });
      if (filterEmail.length) {
        setSearchMessage("Encontrado");
        return setFilterDataUsers(filterEmail);
      } else {
        setSearchMessage(`El correo "${email}" no ha sido encontrado`);
        return setFilterDataUsers(dataUsers);
      }
    } else {
      return setFilterDataUsers(dataUsers);
    }
  };

  const clearSearch = () => {
    setFilterDataUsers(dataUsers);
    setSearchMessage("");
    inputRef.current.value = "";
  };

  return (
    <FormContext.Provider
      value={{
        dataUsers,
        setDataUsers,
        filterDataUser,
        setFilterDataUsers,
        updateUser,
        searchUserByEmail,
        searchMessage,
        clearSearch,
        inputRef,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
