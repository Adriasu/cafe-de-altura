"use client";
import { FormContext } from "@/context/FormContext";
import { Search } from "lucide-react";
import React, { useContext, useRef } from "react";

const SearchUser = () => {
  const { dataUsers, setFilterDataUsers } = useContext(FormContext);
  const inputRef = useRef(null);

  const filterUserEmail = (event) => {
    event.preventDefault();
    //console.log(inputRef.current.value);
    const filterEmail = dataUsers.filter((user) => {
      if (user.email.toLowerCase() === inputRef.current.value.toLowerCase()) {
        return user;
      } else if (inputRef.current.value.toLowerCase() === "" || user.email.toLowerCase() !== inputRef.current.value.toLowerCase()) {
        return dataUsers
      }
      
    });

    setFilterDataUsers(filterEmail);
  };

  return (
    <form onSubmit={filterUserEmail}>
      <div className="flex mt-12 w-full rounded-md px-2 border-[1px] border-[#D1D5DB] bg-white justify-center items-center">
        <Search />
        <input
          ref={inputRef}
          className="w-full h-[34px] px-3 outline-none"
          type="email"
          name="filterEmail"
        />
      </div>
      <input
        className="px-2 py-1 bg-[#2A5B45] rounded text-white mt-1"
        type="submit"
        value="buscar"
      />
    </form>
  );
};

export default SearchUser;
