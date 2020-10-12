import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./styled.css";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleReset = () => {
    setSearchValue("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    search(searchValue);
    handleReset();
  };

  return (
    <form className="search">
      <input
        className="search-input"
        value={searchValue}
        placeholder="Search for favorite movie"
        aria-label="Search"
        type="text"
        onChange={handleChange}
      />
      <button
        type="submit"
        value="SEARCH"
        className="search-button"
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon={faSearch} />
        <span>Search</span>
      </button>
    </form>
  );
};

export default Search;
