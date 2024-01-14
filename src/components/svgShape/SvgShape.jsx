import React, { Fragment, useState } from "react";
import styled from "./svgShape.module.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function Svgchape({ selectedShape, onShapeClick }) {
  return (
    <>
      {/* <div className={styled.container}> */}
      <svg
        // viewBox="0 0 200 200"
        width="800"
        height="500"
        // x="100"
        // y="0"
      >
        {/* rectangle shape  */}
        <rect
          x="250"
          y="20"
          width="200"
          height="50"
          fill={selectedShape === "barChart" ? "#fa5f3c" : "transparent"}
          onClick={() => onShapeClick("barChart")}
        />
        <text x="320" y="50" fill="#fff">
          Section B
        </text>
        {/*left trapezoid shape */}
        <polygon
          points="200,200 300,230 300,300 200,330 "
          fill={selectedShape === "histogramChart" ? "#fa5f3c" : "transparent"}
          onClick={() => onShapeClick("histogramChart")}
        />
        <text x="212" y="270" fill="#fff">
          Section A
        </text>
        {/* right trapezoid shape */}
        <polygon
          points="400,230 500,200 500,330 400,300"
          fill={selectedShape === "lineChart" ? "#fa5f3c" : "transparent"}
          onClick={() => onShapeClick("lineChart")}
        />
        <text x="420" y="270" fill="#fff">
          Section C
        </text>
        {/* Lines between shapes */}
        <line x1="250" y1="45" x2="100" y2="45" />
        <line x1="100" y1="45" x2="100" y2="270" />
        <line x1="100" y1="270" x2="200" y2="270" />
        <line x1="300" y1="270" x2="400" y2="270" />
        <line x1="500" y1="270" x2="600" y2="270" />
        <line x1="600" y1="270" x2="600" y2="45" />
        <line x1="600" y1="45" x2="450" y2="45" />
      </svg>
      {/* </div> */}
    </>
  );
}
export default Svgchape;
