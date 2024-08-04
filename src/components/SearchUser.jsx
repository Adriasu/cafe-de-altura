"use client";
import { FormContext } from "@/context/FormContext";
import { Search } from "lucide-react";
import React, { useContext, useRef } from "react";

const SearchUser = () => {
  const { dataUsers, setFilterDataUsers, searchUserByEmail } =
    useContext(FormContext);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailUserSearch = inputRef.current.value.toLowerCase();
    searchUserByEmail(emailUserSearch);
  };

  const clearSearch = () => {
    setFilterDataUsers(dataUsers);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-3 w-[500px] justify-between items-center">
        <div className="flex w-full rounded-md px-2 border-[1px] border-[#D1D5DB] bg-white justify-center items-center">
          <Search />
          <input
            ref={inputRef}
            className="w-full h-[34px] px-3 outline-none"
            type="email"
            name="filterEmail"
          />
        </div>

        <div className="flex gap-2 justify-center items-center h-[34px]">
          <input
            className="cursor-pointer font-semibold, leading-4 text-[14px] px-3 py-2 bg-[#2A5B45] rounded text-white mt-1"
            type="submit"
            value="buscar"
          />
          <button
            onClick={clearSearch}
            className="font-semibold, leading-4 text-[14px] px-3 py-2 bg-[#1F1815] rounded text-white mt-1"
          >
            Limpiar
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchUser;
