"use client";
import React from "react";

import { SubSectionWrapper } from "@src/theme/Global.styles";
import Slider from "@src/components/heroSection/Slider";
import BrandSection from "./BrandSection";

const Hero = () => {
  return (
    <>
      <Slider />
      <SubSectionWrapper>
        <BrandSection />
      </SubSectionWrapper>{" "}
      <SubSectionWrapper>
        <BrandSection />
      </SubSectionWrapper>{" "}
      <SubSectionWrapper>
        <BrandSection />
      </SubSectionWrapper>
    </>
  );
};

export default Hero;
