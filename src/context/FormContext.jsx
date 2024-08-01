"use client";
import React, { createContext, useState } from "react";

export const FormContext = createContext(null);

export default function FormContextProvider({children}) {

	const [dataUsers, setDataUsers] = useState([]);
	const [filterDataUser, setFilterDataUsers] = useState([])

	return(
		<FormContext.Provider value={{dataUsers, setDataUsers, filterDataUser, setFilterDataUsers}}>
			{children}
		</FormContext.Provider>
	)
}