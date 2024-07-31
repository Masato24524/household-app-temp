'use client'

import { Box } from '@mui/material'
import React, { useState } from 'react'
import MonthlySummary from '../components/MonthlySummary'
import Calendar from '../components/Calendar/Calendar'
import TransactionMenu from '../components/TransactionMenu'
import TransactionForm from '../components/TransactionForm'
import { Transaction } from '../types'
import { format } from 'date-fns'
import { Schema } from '../validations/schema'
import { NextPage } from 'next'
import AuthComponent from '../components/AuthComponent'
import { useTransactionContext } from '../context/TransactionContext'

interface HomeProps {
  monthlyTransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  handleSaveTransaction: (transaction: Schema) => Promise<void>
  handleDeleteTransaction: (transactionId: string) => Promise<void>
}

console.log('home/page.tsx is being rendered');

const Home: NextPage<HomeProps> = () => {
  const { 
    monthlyTransactions, 
    setCurrentMonth, 
    handleSaveTransaction, 
    handleDeleteTransaction 
  } = useTransactionContext();

  console.log('Home props:', { monthlyTransactions, setCurrentMonth, handleSaveTransaction, handleDeleteTransaction });
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

  console.log('Home component:', { setCurrentMonth, setCurrentDay, currentDay, today });

  return (
    <AuthComponent>
      <Box sx={{display: 'flex'}}>
        {/* 左側コンテンツ */}
        <Box sx={{flexGrow: 3}}>
          <MonthlySummary monthlyTransactions={monthlyTransactions} />
          <Calendar 
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
          onSaveTransaction={handleSaveTransaction}
          selectedTransaction={selectedTransaction}
          onDeleteTransaction={handleDeleteTransaction}
          />
        </Box>
      </Box>
    </AuthComponent>

  )
}

export default Home
