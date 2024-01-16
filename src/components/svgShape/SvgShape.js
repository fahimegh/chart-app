import React, { Fragment, useState } from "react";
import styled from "./svgShape.module.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function SvgShape({ selectedShape, onShapeClick }) {
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
          points="120,120 220,150 220,220 120,250 "
          fill={selectedShape === "histogramChart" ? "#fa5f3c" : "transparent"}
          onClick={() => onShapeClick("histogramChart")}
        />
        <text x="140" y="190" fill="#fff">
          Section A
        </text>
        {/* right trapezoid shape */}
        <polygon
          points="480,150 580,120 580,250 480,220"
          fill={selectedShape === "lineChart" ? "#fa5f3c" : "transparent"}
          onClick={() => onShapeClick("lineChart")}
        />
        <text x="500" y="190" fill="#fff">
          Section C
        </text>
        {/* Lines between shapes */}
        <line x1="250" y1="45" x2="170" y2="45" />
        <line x1="170" y1="45" x2="170" y2="135" />

        <line x1="220" y1="190" x2="480" y2="190" />

        <line x1="530" y1="135" x2="530" y2="45" />
        <line x1="530" y1="45" x2="450" y2="45" />
      </svg>
      {/* </div> */}
    </>
  );
}
export default SvgShape;
