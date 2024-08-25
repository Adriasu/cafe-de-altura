import React from "react";
import UserForm from "./UserForm";
import SearchUser from "./SearchUser";
import UserList from "./UserList";
import PageConstruction from "@/components/PageConstruction";

const ForCompanies = () => {
  return (
    <div>
      <PageConstruction location={"Para empresas"}/>
    </div>

    //   <div className="flex flex-col mt-[64px] pt-5 justify-center items-center h-screen bg-[#E3DED7]">
    //   <h1 className="md:w-[1128px] sm:w-[500px] text-2xl">Nuevo usuario:</h1>
    //   <div className=" md:flex justify-center items-start md:gap-32 p-3 sm:grid sm:grid-cols-1 sm:gap-1">
    //     <div className="w-[500px]">
    //       <UserForm/>
    //     </div>
    //     <div className="flex flex-col justify-start items-center w-[500px]">
    //       <SearchUser/>
    //       <UserList/>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ForCompanies;
