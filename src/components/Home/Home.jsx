import React, { useState } from "react";
import Form from "../Form/Form";
import Lists from "../Lists/Lists";
import Search from "../Search/Search";

import "./Home.css";

const Home = () => {
  const [inputValueSearch, setInputValueSearch] = useState("");
  const [sortValue, setSortValue] = useState("name");
  const getInputForSorting = (data) => {
    setSortValue(data);
  };

  return (
    <div className="Home">
      <input
        type="text"
        placeholder="search . . . . . "
        className="searchAll"
        value={inputValueSearch}
        onChange={(e) => setInputValueSearch(e.target.value)}
      />

      <div className="main-container">
        <div className="left-container">
          <Form />
          <Search getInputForSorting={getInputForSorting} />
        </div>
        <Lists sortValue={sortValue} inputValueSearch={inputValueSearch} />
      </div>
    </div>
  );
};

export default Home;
