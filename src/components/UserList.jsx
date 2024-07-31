"use client";
import { FormContext } from "@/context/FormContext";
import React, { useContext } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const { dataUsers, setDataUsers } = useContext(FormContext);

  return (
    <div className="flex flex-wrap gap-3 justify-center mt-9">
      {dataUsers.map((user, i) => {
        return <UserCard key={i} userCard={user} />;
      })}
    </div>
  );
};

export default UserList;
