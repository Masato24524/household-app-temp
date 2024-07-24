import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = () => {
    const options: ChartOptions<"bar">
      = {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: true,
            text: "Chart.js Bar Chart"
          }
        }
      };

    const labels = ["2024-07-18", "February", "March", "April", "May", "June", "July"];

    const data = {
        labels,
        datasets: [
            {
            label: "支出",
            data: [100, 200, 300, 400, 500, 600, 700],
            backgroundColor: "rgba(255, 99, 132, 0.5)"
            },
            {
            label: "収入",
            data: [100, 200, 300, 400, 500, 600, 700],
            backgroundColor: "rgba(53, 162, 235, 0.5)"
            }
        ]
    };
  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart
