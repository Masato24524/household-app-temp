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
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
  
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
  isLoading: boolean;
}
const BarChart = ({ monthlyTransactions, isLoading }: BarChartProps) => {
  const theme = useTheme();
  const options: ChartOptions<"bar"> = {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "日別収支",
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        width: "100%",
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : monthlyTransactions.length > 0 ? (
          <Bar options={options} data={data} />
      ) : (
        <Typography>データがありません</Typography>
      )}
    </Box>
  )
}

export default BarChart
