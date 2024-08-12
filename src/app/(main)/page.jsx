import CardsConditions from "@/components/CardsConditions";
import Hero from "@/app/(main)/Hero";
import React from "react";
import FeatureSection from "./FeatureSection";
import CardsNews from "./CardsNews";
import FAQWrapperElements from "./FAQWrapperElements";
import SplitTwoToneDesktop from "./SplitTwoToneDesktop";

const Home = () => {
  return (
    <div>
      <Hero/>
      <CardsConditions/>
      <CardsNews/>
      <FAQWrapperElements/>
      <FeatureSection/>
      <SplitTwoToneDesktop/>
    </div>
  );
};

export default Home;
