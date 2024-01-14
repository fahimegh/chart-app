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
          <rect x="275" y="20" width="150" height="50" />
          <text x="320" y="50" fill="#fff">
            Section B
          </text>
          {/*left trapezoid shape */}
          <polygon points="200,200 300,230 300,300 200,330 " />
          <text x="212" y="270" fill="#fff">
            Section A
          </text>
          {/* right trapezoid shape */}
          <polygon points="400,230 500,200 500,330 400,300" />
          <text x="420" y="270" fill="#fff">
            Section C
          </text>
          {/* Lines between shapes */}
          <line x1="275" y1="35" x2="100" y2="35" />
          <line x1="100" y1="50" x2="100" y2="270" />
          <line x1="100" y1="270" x2="200" y2="270" />
          <line x1="300" y1="270" x2="400" y2="270" />
          <line x1="500" y1="270" x2="600" y2="270" />
          <line x1="600" y1="270" x2="600" y2="50" />
          <line x1="600" y1="50" x2="425" y2="50" />
        </svg>
      </div>
    </Fragment>
  );
}
export default Svgchape;
