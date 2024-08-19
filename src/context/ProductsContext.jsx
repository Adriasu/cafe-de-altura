"use client";
import React, { createContext, useState, useEffect, useRef } from "react";

export const ProductsContext = createContext(null);

export default function ProductsContextProvider({ children }) {
  const [dataCoffee, setDataCoffee] = useState([]);
  const [dataSelected, setDataSelected] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalOfProducts, setTotalOfProducts] = useState(0);

  console.log(dataSelected);

  useEffect(() => {
    const dataSelectedLS = JSON.parse(
      localStorage.getItem("arrayProductsSelected") || "[]"
    );
    const totalPriceLS = JSON.parse(localStorage.getItem("totalPrice") || "0");
    const totalOfProductsLs = JSON.parse(
      localStorage.getItem("totalProducts") || "0"
    );
    setDataSelected(dataSelectedLS);
    setTotalPrice(totalPriceLS);
    setTotalOfProducts(totalOfProductsLs);
  }, []);

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
      setDataSelected([...dataSelected, productSelected]);
    }
    return arraySelected;
  };

  const updateProduct = (product) => {
    setDataSelected(product);
    localStorage.setItem("arrayProductsSelected", JSON.stringify(product));
  };

  return (
    <ProductsContext.Provider
      value={{
        dataCoffee,
        dataSelected,
        totalPrice,
        totalOfProducts,
        productCount,
        updateProduct,
        setDataSelected,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
