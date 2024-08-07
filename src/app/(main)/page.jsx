import CardsConditions from "@/components/CardsConditions";
import Hero from "@/app/(main)/Hero";
import React from "react";
import FeatureSection from "./FeatureSection";
import CardsNews from "./CardsNews";

const Home = () => {
  return (
    <div>
      <Hero/>
      <CardsConditions/>
      <CardsNews/>
      <FeatureSection/>
    </div>
  );
};

export default Home;
