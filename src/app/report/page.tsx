'use client'

import { Box, Grid, Paper } from '@mui/material'
import React from 'react'
import MonthSelector from '../components/MonthSelector'
import CategoryChart from '../components/CategoryChart'
import TransactionTable from '../components/TransactionTable'
import BarChart from '../components/BarChart'
import { Transaction } from '../types/index'
import { useTransactionContext } from '../context/TransactionContext'

interface ReportProps {
  monthlyTransactions: Transaction[];
}

const Report: React.FC<ReportProps> =() => {
  const { monthlyTransactions } = useTransactionContext();

  const commonPaperStyle = {
    height: {xs: "auto", md: "400px"},
    display: "flex",
    flexDirection: "column",
  } 

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MonthSelector />
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper sx={commonPaperStyle}>
          <CategoryChart />

        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper sx={commonPaperStyle}>
          {/* 棒グラフ */}
          <BarChart monthlyTransactions={monthlyTransactions} />

        </Paper>
      </Grid>
      <Grid item xs={12}>
        <TransactionTable />
      </Grid>
    </Grid>
  )
}

export default Report
