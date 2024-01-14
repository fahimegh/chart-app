import React, { useState, useEffect, Fragment } from "react";
import styled from "./home.module.css";
import Svgchape from "../../components/svgShape/SvgShape";
import axios from "axios";
import { Bar, Pie, Line, Gauge } from "@ant-design/charts";
import { Column } from "@ant-design/plots";
import { Histogram } from "@ant-design/plots";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  const [selectedShape, setSelectedShape] = useState(null);
  const [chartData, setChartData] = useState(null);
  // receive data frome local server with axios
  const fetchData = (chartType) => {
    axios
      .get(`http://localhost:4000/${chartType}`)
      .then((response) => {
        console.log(response.data.data);
        setChartData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // onclick the svg shapes

  const handleShapeClick = (chartType) => {
    setSelectedShape(chartType);
    fetchData(chartType);
  };

  return (
    <>
      <div className={styled.container}>
        {/* <div style={{ display: "flex" }}> */}
        <div className="col-md-6">
          <Svgchape
            selectedShape={selectedShape}
            onShapeClick={handleShapeClick}
          />
        </div>
        {chartData && (
          <div className="col-md-6">
            {selectedShape === "barChart" && (
              <Bar
                data={chartData}
                xField="label"
                yField="value"
                colorField="#56fc03"
                label={{
                  style: {
                    fill: "#FFFFFF",
                    opacity: 0.6,
                  },
                }}
              />
            )}
            {selectedShape === "histogramChart" && (
              <Histogram
                data={chartData}
                // isGroup="true"
                // xField="type"
                // yField="value"
                // seriesField="city"
                // colorField="#0c6aed"

                binField="value"
                // theme={customTheme}
                binWidth="2"
                colorField="#0c6aed"
              />
            )}
            {selectedShape === "lineChart" && (
              <Line
                data={chartData}
                xField="label"
                yField="value"
                colorField="#ddf545"
                label={{
                  style: {
                    fill: "#FFFFFF",
                    opacity: 0.6,
                  },
                }}
              />
            )}
          </div>
        )}
        {/* </div> */}
      </div>
    </>
  );
}
export default Home;
