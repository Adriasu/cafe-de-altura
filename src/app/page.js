import SearchUser from "@/components/SearchUser";
import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";
import FormContextProvider, { FormContext } from "@/context/FormContext";
import React from "react";

const Home = () => {
  return (
    <FormContextProvider>
      <div className=" grid grid-cols-2 gap-3 p-3 bg-[#E3DED7]">
        <UserForm />
        <div className="flex flex-col justify-start items-start">
          <SearchUser />
          <UserList />
        </div>
      </div>
    </FormContextProvider>
  );
};

export default Home;
