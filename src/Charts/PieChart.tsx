import React from "react";
import { Chart } from "react-google-charts";

const data: Array<Array<string | number>> = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], 
];

const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

const PieChart: React.FC = () => {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="380px"
      data={data}
      options={options}
    />
  );
};

export default PieChart;
