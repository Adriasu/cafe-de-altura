import SearchUser from "@/components/SearchUser";
import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";
import FormContextProvider, { FormContext } from "@/context/FormContext";
import React from "react";

const Home = () => {
  return (
    <FormContextProvider>
      <div className="flex flex-col justify-center items-center bg-[#E3DED7]">
        <UserForm />
        <SearchUser/>
        <UserList/>
      </div>
    </FormContextProvider>
  );
};

export default Home;
