import CardsConditions from "@/components/CardsConditions";
import Hero from "@/app/(main)/Hero";
import React from "react";
import FeatureSection from "./FeatureSection";
import FAQWrapperElements from "./FAQWrapperElements";
import SplitTwoToneDesktop from "./SplitTwoToneDesktop";
import Footer from "@/components/Footer";
import ContainCarsdProducts from "@/components/ContainCarsdProducts";

const Home = () => {
  return (
    <div>
      <Hero/>
      <CardsConditions/>
      <ContainCarsdProducts location={"home"} title={"Novedades"}/>
      <FAQWrapperElements/>
      <FeatureSection/>
      <SplitTwoToneDesktop/>
      <Footer/>
    </div>
  );
};

export default Home;
