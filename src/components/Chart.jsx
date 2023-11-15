import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend
);

const Chart = ({ arr = [], days }) => {
    const prices = [];
    const date = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
      else date.push(new Date(arr[i][0]).toLocaleDateString());
      prices.push(arr[i][1]);
    }
  
  const data = {
    labels: date,
    datasets: [
      {
        label: `price in inr`,
        data: prices,
        borderColor: "rgb(225,99,132)",
        backgroundColor: "rgb(225,99,132,0.5)",
      },
    ],
  };
  return (
    <Line
      options={{
        responsive: true,
      }}
      data={data}
      style={{
        width:'100%'
    }}
    />
  );
};

export default Chart;
