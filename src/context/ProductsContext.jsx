"use client";
import React, { createContext, useState, useEffect, useRef } from "react";

export const ProductsContext = createContext(null);

export default function ProductsContextProvider({ children }) {
  // --------------- Estados iniciales al cargar pagina ----------------- //

  const [dataCoffee, setDataCoffee] = useState([]);
  const [dataSelected, setDataSelected] = useState(() => {
    return JSON.parse(localStorage.getItem("arrayProductsSelected") || "[]");
  });
  const [totalPrice, setTotalPrice] = useState(() => {
    return JSON.parse(localStorage.getItem("totalPrice") || "0");
  });
  const [totalOfProducts, setTotalOfProducts] = useState(() => {
    return JSON.parse(localStorage.getItem("totalProducts") || "0");
  });

  // ----------- Fetch Data ---------------- //

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

  // ----------- Funciones Carrito ------------------- //

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

  const btnAddProducts = (product) => {
    product.count++;
    setTotalOfProducts((prev) => (prev += 1));
    setTotalPrice((prev) => prev + product.price);
  };

  const btnSubtractProducts = (product) => {
    if (product.count > 1) {
      product.count--;
    }
  };

  // --------------- Actualizacion localStorage ------------------------ //

  useEffect(() => {
    localStorage.setItem("arrayProductsSelected", JSON.stringify(dataSelected));
    localStorage.setItem("totalProducts", JSON.stringify(totalOfProducts));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [dataSelected, totalOfProducts, totalPrice]);

  return (
    <ProductsContext.Provider
      value={{
        dataCoffee,
        dataSelected,
        totalPrice,
        totalOfProducts,
        productCount,
        setDataSelected,
        setTotalOfProducts,
        setTotalPrice,
        btnAddProducts,
        btnSubtractProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
