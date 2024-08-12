import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FormContextProvider from "@/context/FormContext";
import ProductsContextProvider from "@/context/ProductsContext";
import CopyRigth from "@/components/CopyRigth";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Café de Altura",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className} antialiased`}>
      <body className="">
        <ProductsContextProvider>
          <FormContextProvider>
            <NavBar />
            {children}
            <CopyRigth/>
          </FormContextProvider>
        </ProductsContextProvider>
      </body>
    </html>
  );
}
