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
          <rect x="75" y="20" width="150" height="50" />
          <text x="120" y="50" fill="#fff">
            Section B
          </text>
          {/*left trapezoid shape */}
          <polygon points="0,200 100,230 100,300 0,330 " />
          <text x="12" y="270" fill="#fff">
            Section A
          </text>
          {/* right trapezoid shape */}
          <polygon points="200,230 300,200 300,330 200,300" />
          <text x="220" y="270" fill="#fff">
            Section C
          </text>
        </svg>
      </div>
    </Fragment>
  );
}
export default Svgchape;
