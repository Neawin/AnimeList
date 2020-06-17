import React from "react";
import SearchBar from "../Home/SearchBar";

import AnticipatedSection from "./AnticipatedSection";

const Anticipated = (props) => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <SearchBar />
        </div>
        <div className="hero-right">
          <div className="preview">
            <AnticipatedSection {...props} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Anticipated;
