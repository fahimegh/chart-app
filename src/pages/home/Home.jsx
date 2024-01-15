import React, { useState, useEffect, Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "./home.module.css";
import SvgShape from "../../components/svgShape/SvgShape";
import axios from "axios";
import { Bar, Line, Gauge } from "@ant-design/charts";
import { Pie, measureTextWidth } from "@ant-design/plots";
import { Column } from "@ant-design/plots";
import { Histogram } from "@ant-design/plots";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ReactDOM } from "react-dom/client";
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
    // if (selectedShape === chartType) {
    //   setSelectedShape(null);
    // } else {
    //   setSelectedShape(chartType);
    //   fetchData(chartType);
    // }
    setSelectedShape(chartType);
    fetchData(chartType);
  };

  const customTheme = {
    geometries: {
      interval: {
        rect: {
          style: {
            fill: "#fff",
          },
        },
      },
    },

    axes: {
      left: {
        label: {
          style: {
            fill: "#fff",
          },
        },
      },
    },
  };
  //
  // function renderStatistic(containerWidth, text, style) {
  //   const { width: textWidth, height: textHeight } = measureTextWidth(
  //     text,
  //     style
  //   );
  //   const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

  //   let scale = 1;

  //   if (containerWidth < textWidth) {
  //     scale = Math.min(
  //       Math.sqrt(
  //         Math.abs(
  //           Math.pow(R, 2) /
  //             (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2))
  //         )
  //       ),
  //       1
  //     );
  //   }

  //   const textStyleStr = `width:${containerWidth}px;`;
  //   return `<div style="${textStyleStr};font-size:${scale}em;line-height:${
  //     scale < 1 ? 1 : "inherit"
  //   };">${text}</div>`;
  // }
  // const pieconfig = {
  //   appendPadding: 10,
  //   data: { chartData },
  //   angleField: "value",
  //   colorField: "type",
  //   radius: 1,
  //   innerRadius: 0.64,
  //   meta: {
  //     value: {
  //       formatter: (v) => `${v} `,
  //     },
  //   },
  //   label: {
  //     type: "inner",
  //     offset: "-50%",
  //     style: {
  //       textAlign: "center",
  //     },
  //     autoRotate: false,
  //     content: "{value}",
  //   },
  //   statistic: {
  //     title: {
  //       offsetY: -4,
  //       customHtml: (container, view, datum) => {
  //         const { width, height } = container.getBoundingClientRect();
  //         const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
  //         const text = datum ? datum.type : "total";
  //         return renderStatistic(d, text, {
  //           fontSize: 28,
  //         });
  //       },
  //     },
  //     content: {
  //       offsetY: 4,
  //       style: {
  //         fontSize: "32px",
  //       },
  //       customHtml: (container, view, datum, data) => {
  //         const { width } = container.getBoundingClientRect();
  //         const text = datum
  //           ? ` ${datum.value}`
  //           : ` ${data.reduce((r, d) => r + d.value, 0)}`;
  //         return renderStatistic(width, text, {
  //           fontSize: 32,
  //         });
  //       },
  //     },
  //   },

  //   interactions: [
  //     {
  //       type: "element-selected",
  //     },
  //     {
  //       type: "element-active",
  //     },
  //     {
  //       type: "pie-statistic-active",
  //     },
  //   ],
  // };
  // const pieconfig = {
  //   appendPadding: 10,
  //   data: { chartData },
  //   angleField: "value",
  //   colorField: "type",
  //   radius: 0.8,
  //   label: {
  //     type: "outer",
  //   },
  //   // interactions: [
  //   //   {
  //   //     type: "element-active",
  //   //   },
  //   // ],
  // };
  const gageconfig = {
    percent: 0.75,
    // type: "meter",
    innerRadius: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ["#F4664A", "#FAAD14", "#30BF78"],
    },
    indicator: {
      pointer: {
        style: {
          stroke: "#D0D0D0",
        },
      },
      pin: {
        style: {
          stroke: "#D0D0D0",
        },
      },
    },
    statistic: {
      content: {
        style: {
          fontSize: "36px",
          lineHeight: "36px",
        },
      },
    },
  };

  return (
    <>
      <div className={styled.container}>
        {/* <div style={{ display: "flex" }}> */}
        <div className="col-md-6">
          <SvgShape
            selectedShape={selectedShape}
            onShapeClick={handleShapeClick}
          />
        </div>
        {chartData && (
          <div className="col-md-6">
            {selectedShape === "barChart" && (
              <Bar
                data={chartData}
                theme={customTheme}
                xField="label"
                yField="value"
                colorField="#56fc03"
                label={{
                  style: {
                    fill: "#FFF",
                    opacity: 0.9,
                  },
                }}
              />
            )}
            {selectedShape === "histogramChart" && (
              // <Gauge {...config} />
              <Histogram
                data={chartData}
                theme={customTheme}
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
                theme={customTheme}
                xField="label"
                yField="value"
                colorField="#ddf545"
                label={{
                  style: {
                    fill: "#FFF",
                    // opacity: 0.6,
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
