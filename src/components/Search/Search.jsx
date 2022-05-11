import React, { useState } from "react";
import "./Search.css";

const Search = ({ getInputForSorting }) => {
  const [sortInputValue, setSortInputValue] = useState("name");
  const sortButtonClickHandle = () => {
    getInputForSorting(sortInputValue);
  };

  return (
    <div className="search-container">
      <select onChange={(e) => setSortInputValue(e.target.value)}>
        <option value="sort by">Sort by</option>
        <option value="name">name</option>
        <option value="email">email</option>
        <option value="role">role</option>
      </select>
      <br />
      <button onClick={sortButtonClickHandle}>Enter</button>
    </div>
  );
};

export default Search;
