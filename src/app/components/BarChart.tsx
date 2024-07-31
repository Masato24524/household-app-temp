import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
import { calculateDailyBalances } from '../utils/financeCalculations';
import { Transaction } from '../types';
import { useTheme } from '@mui/material';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

interface BarChartProps {
  monthlyTransactions: Transaction[]
}
const BarChart = ({ monthlyTransactions }: BarChartProps) => {
  const theme = useTheme();

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

  const dailyBalances = calculateDailyBalances(monthlyTransactions);
  console.log(dailyBalances);
  console.log(monthlyTransactions);

  const dateLabels = Object.keys(dailyBalances).sort();
  console.log(dateLabels);
  const expenseData = dateLabels.map((day) => dailyBalances[day].expense);
  const incomeData = dateLabels.map((day) => dailyBalances[day].income);

  const labels = ["2024-07-18", "February", "March", "April", "May", "June", "July"];

  const data: ChartData<"bar"> = {
      labels: dateLabels,
      datasets: [
          {
          label: "支出",
          data: expenseData,
          backgroundColor: theme.palette.expenseColor.light,
          },
          {
          label: "収入",
          data: incomeData,
          backgroundColor: theme.palette.incomeColor.light,
          }
      ]
  };

  return (
    <Bar options={options} data={data} />
  )
}

export default BarChart
