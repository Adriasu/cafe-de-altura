"use client";
import React, { createContext, useState } from "react";

export const FormContext = createContext(null);

export default function FormContextProvider({children}) {

	const [dataUsers, setDataUsers] = useState([]);

	return(
		<FormContext.Provider value={{dataUsers, setDataUsers}}>
			{children}
		</FormContext.Provider>
	)
}