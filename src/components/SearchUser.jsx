"use client";
import { FormContext } from "@/context/FormContext";
import { Search } from "lucide-react";
import React, { useContext } from "react";

const SearchUser = () => {
  const { dataUsers, setFilterDataUsers } = useContext(FormContext);

  const filterUserEmail = (event) => {
    event.preventDefault();
    const filterEmail = event.target.value.toLowerCase();
    console.log(filterEmail);
  };

  return (
    <form>
      <div className="flex mt-12 w-full rounded-md px-2 border-[1px] border-[#D1D5DB] bg-white justify-center items-center">
        <Search />
        <input className="w-full h-[34px] px-3 outline-none" type="text" name="filterEmail" />
      </div>
    </form>
  );
};

export default SearchUser;
