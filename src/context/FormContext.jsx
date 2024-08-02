"use client";
import React, { createContext, useState, useEffect } from "react";

export const FormContext = createContext(null);

export default function FormContextProvider({children}) {

	const [dataUsers, setDataUsers] = useState([]);
	const [filterDataUser, setFilterDataUsers] = useState([])

	useEffect(() => {
		const dataUserLs = JSON.parse(localStorage.getItem("dataUser")|| "[]") ;
		setDataUsers(dataUserLs);
		setFilterDataUsers(dataUserLs);
	  },[]);


	return(
		<FormContext.Provider value={{dataUsers, setDataUsers, filterDataUser, setFilterDataUsers}}>
			{children}
		</FormContext.Provider>
	)
}