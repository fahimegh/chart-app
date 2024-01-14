import React, { Fragment } from "react";
import styled from "./svgShape.module.css";
function Svgchape() {
  return (
    <Fragment>
      <div className={styled.container}>
        <svg
          // viewBox="0 0 100 100"
          width="800"
          height="500"
          // x="100"
          // y="0"
        >
          {/* rectangle shape  */}
          <rect
            // className={`shape ${isClicked ? "clicked" : ""}`}
            // x="50"
            // y="10"
            width="150"
            height="50"
            // fill={selectedShape === "barChart" ? "#fa5f3c" : "blue"}
            // style={{ cursor: "pointer" }}
            // onClick={() => handleShapeClick("barChart")}
          />
          <text x="45" y="30" fill="#fff">
            Section B
          </text>
        </svg>
      </div>
    </Fragment>
  );
}
export default Svgchape;
