'use client'

import { Box, useMediaQuery, useTheme } from '@mui/material'
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
import { DateClickArg } from '@fullcalendar/interaction'

interface HomeProps {
  monthlyTransactions: Transaction[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  handleSaveTransaction: (transaction: Schema) => Promise<void>
  handleDeleteTransaction: (transactionId: string) => Promise<void>
}

const Home: NextPage<HomeProps> = () => {
  const { 
    monthlyTransactions, 
    setCurrentMonth, 
    handleSaveTransaction, 
    handleDeleteTransaction 
  } = useTransactionContext();

  const today = format(new Date(), 'yyyy-MM-dd');
  const [currentDay, setCurrentDay] = useState(today);
  const [isEntryDrawerOpen, setIsEntryDrawerOpen] = useState(false); //falseは閉じた状態
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  console.log(isMobile);

  // 一日分のデータを取得
  const dailyTransactions = monthlyTransactions.filter((transaction) => {
    return transaction.date === currentDay;
  });
  // console.log(dailyTransactions);

  const closeForm = () => {
    setSelectedTransaction(null);

    if (isMobile) {
      setIsDialogOpen(!isDialogOpen);
    } else {
      setIsEntryDrawerOpen(!isEntryDrawerOpen);
    }
  }

  // フォームの開閉処理（内訳追加ボタンを押したとき）
  const handleAddTransactionForm = () => {
    if (isMobile) {
      setIsDialogOpen(!isDialogOpen);
    } else {
      if (selectedTransaction) {
        setSelectedTransaction(null);
      } else {
        setIsEntryDrawerOpen(!isEntryDrawerOpen);
      }
    }
  }

  // 取り引きが選択された時の処理
  const handleSelectTransaction = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    if (isMobile) {
      setIsDialogOpen(true);
    } else {
      setIsEntryDrawerOpen(true);
    }
  } 

  //モバイル用Drawerを閉じる処理
  const handleCloseMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  }

  //日付を選択したときの処理
  const handleDateClick = (dateInfo: DateClickArg) => {
    setCurrentDay(dateInfo.dateStr)
    setIsMobileDrawerOpen(true);
  }

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
            onDateClick={handleDateClick}
          />
        </Box>

        {/* 右側コンテンツ */}
        <Box>
          <TransactionMenu 
          dailyTransactions={dailyTransactions} 
          currentDay={currentDay} 
          onAddTransactionForm={handleAddTransactionForm}
          onSelectTransaction={handleSelectTransaction}
          isMobile={isMobile}
          open={isMobileDrawerOpen}
          onClose={handleCloseMobileDrawer}
          />
          <TransactionForm 
          onCloseForm={closeForm} 
          isEntryDrawerOpen={isEntryDrawerOpen}
          currentDay={currentDay}
          onSaveTransaction={handleSaveTransaction}
          selectedTransaction={selectedTransaction}
          onDeleteTransaction={handleDeleteTransaction}
          isMobile={isMobile}
          isDialogOpen={isDialogOpen}
          />
        </Box>
      </Box>
    </AuthComponent>

  )
}

export default Home
