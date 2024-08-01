"use client";
import { FormContext } from "@/context/FormContext";
import React, { useContext } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const { dataUsers, setDataUsers, filterDataUser, setFilterDataUsers } = useContext(FormContext);

  const deletUser = (phoneSelected) => {
    const deleteByPhone = dataUsers.findIndex((user) => {
      return user.phone === phoneSelected;
    });
    dataUsers.splice(deleteByPhone, 1);
    setDataUsers([...dataUsers]);
    setFilterDataUsers([...dataUsers])
  };

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {filterDataUser.map((user, i) => {
        return <UserCard key={i} userCard={user} funDelete={deletUser} />;
      })}
    </div>
  );
};

export default UserList;
