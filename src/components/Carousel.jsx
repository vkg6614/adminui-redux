import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(5);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const list = array
    .slice(startPage, endPage)
    .filter((currElem) => {
      return currElem;
    })
    .map((data, index) => {
      return <p key={index}>{data}</p>;
    });

  const onClickHandle = (type) => {
    if (type === "prev") {
      if (startPage === 0) {
        setEndPage(5);
        setStartPage(0);
      } else {
        setStartPage(startPage - 4);
        setEndPage(endPage - 4);
      }
    }
    if (type === "next") {
      if (endPage === 13) {
        setStartPage(array.length - 4);
        setEndPage(array.length + 1);
      } else {
        setStartPage(startPage + 4);
        setEndPage(endPage + 4);
      }
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <h1 onClick={() => onClickHandle("prev")}>prev</h1>
      <div className="carousel-container">{list}</div>
      <h1 onClick={() => onClickHandle("next")}>next</h1>
    </div>
  );
};

export default Carousel;
