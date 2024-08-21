"use client";
import React, { createContext, useState } from "react";

export const FormInfoContext = createContext(null);

export default function FormInfoContextProvider({children}) {

	const [userName, setUserName] = useState(null);

	return(
		<FormInfoContext.Provider value={{userName, setUserName}}>
			{children}
		</FormInfoContext.Provider>
	)
}