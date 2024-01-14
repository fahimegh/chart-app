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
            // x="50"
            // y="10"
            width="150"
            height="50"
          />
          <text x="45" y="30" fill="#fff">
            Section B
          </text>
          {/*left trapezoid shape */}
          <polygon
            // fill="transparent"
            // stroke="#fff"
            // stroke-width="2"
            // transform="rotate(90, 50, 150)"
            // points="40,200 50,120 70,120 90,200"
            points="0,200 100,230 100,300 0,330 "
          />
          <text x="12" y="270" fill="#fff">
            Section A
          </text>
        </svg>
      </div>
    </Fragment>
  );
}
export default Svgchape;
