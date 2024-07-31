import { MailCheckIcon } from "lucide-react";
import React from "react";
import Buttons from "./Buttons";

const UserCard = ({ userCard }) => {
  return (
    <div className="p-3 border-[1px] border-[#D1D5DB] bg-white w-[400px] rounded-lg">
      <h1>Nombre: {userCard.name} </h1>
      <p>Edad: {userCard.age}</p>
      <p>E-mail: {userCard.email}</p>
      <p>Telefono: {userCard.phone}</p>
      <p>Género: {userCard.gender}</p>
      <p>Cuenta: {userCard.account}</p>
      <p>Recibir publicidad: {userCard.publicity ? "si" : "no"}</p>
      <button className="px-2 py-1 bg-[#2A5B45] rounded text-white">borrar</button>
      
    </div>
  );
};

export default UserCard;
