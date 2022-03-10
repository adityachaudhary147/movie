import React from "react";
import "./SearchButton.css";
import PropTypes from "prop-types";
function SearchButton({ handleSearch, label }) {
  return (
    <button onClick={handleSearch} className="btn-search">
      {label}
    </button>
  );
}

SearchButton.propTypes = {
  handleSearch: PropTypes.func,
  label: PropTypes.string,
};
export default SearchButton;
