import React from "react";
import SearchBar from "../Home/SearchBar";

import HighestSection from "./HighestSection";

const Highest = (props) => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <SearchBar />
        </div>
        <div className="hero-right">
          <div className="preview">
            <HighestSection {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Highest;
