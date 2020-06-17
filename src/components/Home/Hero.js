import React from "react";
import SearchBar from "./SearchBar";
import PreviewSection from "./PreviewSection";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <SearchBar />
      </div>
      <div className="hero-right">
        <div className="preview">
          <PreviewSection />
        </div>
      </div>
    </div>
  );
};

export default Hero;
