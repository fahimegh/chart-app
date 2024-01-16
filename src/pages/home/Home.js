import React, { useState } from "react";
import styled from "./home.module.css";
import SvgShape from "../../components/svgShape/SvgShape";
import axios from "axios";
import { Bar, Line, Histogram } from "@ant-design/charts";
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
        <div className="col-md-6">
          <SvgShape
            selectedShape={selectedShape}
            onShapeClick={handleShapeClick}
          />
        </div>
        {/* drawing the charts with loading data from local server */}
        {chartData && (
          <div className="col-md-6">
            {selectedShape === "barChart" && (
              <Bar
                data={chartData}
                xField="label"
                yField="value"
                x={{ color: "#fff" }}
                colorField="#56fc03"
                label={{
                  style: {
                    fill: "#141212",
                    // opacity: 0.9,
                    fontSize: 15,
                  },
                }}
                axisTickLine={{
                  fill: "#fff",
                }}
                axisLabel={{
                  stroke: "#fff",
                }}
              />
            )}
            {selectedShape === "histogramChart" && (
              <Histogram
                data={chartData}
                binField="value"
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
                    fill: "#ddf545",
                  },
                }}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
export default Home;
