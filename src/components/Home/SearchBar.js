import React from "react";
import { connect } from "react-redux";
import { getAnime } from "../../actions/animeActions";
import SearchForm from "./SearchForm";
const SearchBar = ({ getAnime }) => {
  return (
    <>
      <SearchForm onSubmit={getAnime} />
    </>
  );
};

const mapDispatchToProps = {
  getAnime,
};

export default connect(null, mapDispatchToProps)(SearchBar);
