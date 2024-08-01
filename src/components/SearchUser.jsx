"use client";
import { FormContext } from "@/context/FormContext";
import { Search } from "lucide-react";
import React, { useContext, useRef } from "react";

const SearchUser = () => {
  const { dataUsers, setFilterDataUsers } = useContext(FormContext);
  const inputRef = useRef(null);

  const deleteUser = (email) => {
    if (email) {
      const filterEmail = dataUsers.filter((user) => {
        return user.email.toLowerCase() === email;
      });
      if (filterEmail.length) {
        return setFilterDataUsers(filterEmail);
      } else {
        return setFilterDataUsers(dataUsers);
      }
    } else {
      return setFilterDataUsers(dataUsers);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailUserSearch = inputRef.current.value.toLowerCase();
    deleteUser(emailUserSearch);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mt-12 w-[500px] rounded-md px-2 border-[1px] border-[#D1D5DB] bg-white justify-center items-center">
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
