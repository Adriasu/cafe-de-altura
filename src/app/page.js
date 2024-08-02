import SearchUser from "@/components/SearchUser";
import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";

import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col pt-5">
      <h1>Nuevo usuario</h1>
      <div className=" grid grid-cols-2 gap-3 p-3">
      <UserForm />
      <div className="flex flex-col justify-start items-start">
        <SearchUser />
        <UserList />
      </div>

      </div>
    </div>
  );
};

export default Home;
