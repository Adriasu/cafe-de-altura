"use client";
import React, { createContext, useState, useEffect, useRef } from "react";

export const ProductsContext = createContext(null);

export default function ProductsContextProvider({ children }) {
  const [dataCoffee, setDataCoffee] = useState([]);
  const [dataSelected, setDataSelected] = useState(() => {
    return JSON.parse(localStorage.getItem("arrayProductsSelected") || "[]") 
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    return JSON.parse(localStorage.getItem("totalPrice") || "0")
  })
  const [totalOfProducts, setTotalOfProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("totalProducts") || "0")
  })

  const fetchCoffeeData = async () => {
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
    fetchCoffeeData();
  }, []);

  const productCount = (productSelected, arraySelected) => {
    const productsCount = arraySelected.reduce((acc, product) => {
      if (product.id === productSelected.id) {
        product.count++;
        return true;
      }
      return acc;
    }, false);
    if (!productsCount) {
      //const newProduct = [...dataSelected, productSelected];
      setDataSelected([...dataSelected, productSelected]);
    }
    return arraySelected;
  };

  useEffect(() => {
    localStorage.setItem("arrayProductsSelected", JSON.stringify(dataSelected));
    localStorage.setItem("totalProducts", JSON.stringify(totalOfProducts));
  }, [dataSelected, totalOfProducts]);

  return (
    <ProductsContext.Provider
      value={{
        dataCoffee,
        dataSelected,
        totalPrice,
        totalOfProducts,
        productCount,
        setDataSelected,
        setTotalOfProducts
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
