import React from "react";
import SearchBar from "../Home/SearchBar";

import PopularSection from "./PopularSection";

const Popular = (props) => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <SearchBar />
        </div>
        <div className="hero-right">
          <div className="preview">
            <PopularSection {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
