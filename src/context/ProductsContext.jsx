"use client";
import React, { createContext, useState, useEffect, useRef } from "react";

export const ProductsContext = createContext(null);

export default function ProductsContextProvider({ children }) {
  const [dataCoffee, setDataCoffee] = useState([]);

  const fetchPrueba = async () => {
    try {
      const response = await fetch(
        "https://cafe-de-altura-lovat.vercel.app/api/products"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDataCoffee(data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPrueba();
  }, []);

  return (
    <ProductsContext.Provider value={{ dataCoffee }}>
      {children}
    </ProductsContext.Provider>
  );
}
