import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import FormContextProvider from "@/context/FormContext";
import ProductsContextProvider from "@/context/ProductsContext";
import CopyRight from "@/components/CopyRight";
import FormInfoContextProvider from "@/context/FormInfoContext";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Café de Altura",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.className} antialiased`}>
      <body className="">
        <ProductsContextProvider>
          <FormInfoContextProvider>
            <FormContextProvider>
              <NavBar />
              {children}
              <Toaster/>
              <CopyRight />
            </FormContextProvider>
          </FormInfoContextProvider>
        </ProductsContextProvider>
      </body>
    </html>
  );
}
