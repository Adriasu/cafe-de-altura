"use client";
import { FormContext } from "@/context/FormContext";
import React, { useContext } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const { dataUsers, setDataUsers } = useContext(FormContext);

  const deletUser = (phoneSelected) => {
    const deleteByPhone = dataUsers.findIndex((user) => {
      return user.phone === phoneSelected;
    });
    dataUsers.splice(deleteByPhone, 1);
    setDataUsers([...dataUsers]);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center m-9">
      {dataUsers.map((user, i) => {
        return <UserCard key={i} userCard={user} funDelete={deletUser} />;
      })}
    </div>
  );
};

export default UserList;
