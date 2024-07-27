"use client"

import { Box } from '@mui/material'
import React, { useState } from 'react'
import MonthlySummary from '../components/MonthlySummary'
import Calender from '../components/Calendar/Calendar'
import TransactionMenu from '../components/TransactionMenu'
import TransactionForm from '../components/TransactionForm'
import { Transaction } from '../types'
import { format } from 'date-fns'
import { Schema } from '../validations/schema'

interface HomeProps {
  monthlyTransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  onSaveTransaction: (transaction: Schema) => Promise<void>
  onDeleteTransaction: (transactionId: string) => Promise<void>
}

const Home = ({
  monthlyTransactions, 
  setCurrentMonth, 
  onSaveTransaction,
  onDeleteTransaction,
}: HomeProps) => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const [currentDay, setCurrentDay] = useState(today);
  const [isEntryDrawerOpen, setIsEntryDrawerOpen] = useState(false); //falseは閉じた状態
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  // 一日分のデータを取得
  const dailyTransactions = monthlyTransactions.filter((transaction) => {
    return transaction.date === currentDay;
  });
  // console.log(dailyTransactions);

  const closeForm = () => {
    setIsEntryDrawerOpen(!isEntryDrawerOpen);
    setSelectedTransaction(null);
  }

  // フォームの開閉処理（内訳追加ボタンを押したとき）
  const handleAddTransactionForm = () => {
    if(selectedTransaction) {
      setSelectedTransaction(null);
    } else {
      setIsEntryDrawerOpen(!isEntryDrawerOpen);
    }
  }

  // 取り引きが選択された時の処理
  const handleSelectTransaction = (transaction: Transaction) => {
    console.log(transaction)
    setIsEntryDrawerOpen(true);
    setSelectedTransaction(transaction);
  }

  return (
    <Box sx={{display: 'flex'}}>
      {/* 左側コンテンツ */}
      <Box sx={{flexGrow: 3}}>
        <MonthlySummary monthlyTransactions={monthlyTransactions} />
        <Calender 
        monthlyTransactions={monthlyTransactions} 
        setCurrentMonth={setCurrentMonth} 
        setCurrentDay={setCurrentDay}
        currentDay={currentDay}
        today={today}
        />
      </Box>

      {/* 右側コンテンツ */}
      <Box>
        <TransactionMenu 
        dailyTransactions={dailyTransactions} 
        currentDay={currentDay} 
        onAddTransactionForm={handleAddTransactionForm}
        onSelectTransaction={handleSelectTransaction}
        />
        <TransactionForm 
        onCloseForm={closeForm} 
        isEntryDrawerOpen={isEntryDrawerOpen}
        currentDay={currentDay}
        onSaveTransaction={onSaveTransaction}
        selectedTransaction={selectedTransaction}
        onDeleteTransaction={onDeleteTransaction}
        />
      </Box>
    </Box>
  )
}

export default Home
