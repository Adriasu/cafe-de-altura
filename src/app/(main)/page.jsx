import CardsConditions from "@/components/CardsConditions";
import Hero from "@/app/(main)/Hero";
import React from "react";
import FeatureSection from "./FeatureSection";
import CardsNews from "./CardsNews";
import FAQWrapperElements from "./FAQWrapperElements";
import SplitTwoToneDesktop from "./SplitTwoToneDesktop";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      <Hero/>
      <CardsConditions/>
      <CardsNews/>
      <FAQWrapperElements/>
      <FeatureSection/>
      <SplitTwoToneDesktop/>
      <Footer/>
    </div>
  );
};

export default Home;
