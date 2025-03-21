'use client'

import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Box, CircularProgress, MenuItem, TextField, Typography } from '@mui/material';
import { ExpenseCategory, IncomeCategory, Transaction, TransactionType } from '../types';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CategoryChartProps {
  monthlyTransactions: Transaction[];
  isLoading: boolean;
}

const CategoryChart = ({ monthlyTransactions, isLoading } :CategoryChartProps) => {

  const [selectedType, setSelectedType] = useState<TransactionType>("expense");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSelectedType(e.target.value as TransactionType)
  }

  const categorySums = monthlyTransactions
  .filter(
    (transaction) => transaction.type === selectedType
  ).reduce<Record<IncomeCategory | ExpenseCategory, number>>((acc, transaction) => {
    if (!acc[transaction.category]) {
      acc[transaction.category] = 0;
    }
    acc[transaction.category] += transaction.amount;
    return acc;
    // {
    //   "食費": 2000,
    //   "日用品": 3000,
    // };
    }, {} as Record<IncomeCategory | ExpenseCategory, number>
  );
  console.log(categorySums);

  const categoryLabels = Object.keys(categorySums);
  const categoryValues = Object.values(categorySums);
  console.log(categoryLabels);
  console.log(categoryValues);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  const data: ChartData<"pie"> = {
    labels: categoryLabels,
    datasets: [
      {
        data: categoryValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <TextField 
        label="収支の種類" 
        select fullWidth value={selectedType} 
        onChange={(handleChange)}>
        <MenuItem value={"income"}>収入</MenuItem>
        <MenuItem value={"expense"}>支出</MenuItem>
      </TextField>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >

        {isLoading ? (
          <CircularProgress />
        ) : monthlyTransactions.length > 0 ? (
            <Pie data={data} options={options} />
        ) : (
          <Typography>データがありません</Typography>
        )}
      </Box>
    </>
  )
}

export default CategoryChart
