import React from "react";
import { reduxForm, Field } from "redux-form";

const SearchForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <i className="fas fa-search fa-xs"></i>
      <Field
        autoComplete="off"
        id="search-area"
        placeholder="Search"
        name="search"
        component="input"
      ></Field>
    </form>
  );
};

export default reduxForm({
  form: "searchForm"
})(SearchForm);
