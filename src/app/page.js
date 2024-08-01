import SearchUser from "@/components/SearchUser";
import UserForm from "@/components/UserForm";
import UserList from "@/components/UserList";
import FormContextProvider, { FormContext } from "@/context/FormContext";
import React from "react";

const Home = () => {
  return (
    <FormContextProvider>
      <div className=" flex flex-col justify-center items-center bg-[#E3DED7]">
        <div className="grid grid-cols-2 gap-20 border-[2px] border-black - p-3">
          <UserForm />
          <SearchUser />
        </div>

        <UserList />
      </div>
    </FormContextProvider>
  );
};

export default Home;
