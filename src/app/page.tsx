"use client"

import React, { useEffect, useState } from 'react';
import './page.css';
import { theme } from './theme/theme'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import Home from './home/page';
// import Report from './Report/page';
import { useRouter } from 'next/navigation';
import Signup from './signup/page';
// import ClientOnlyRouter from './ClientOnlyRouter';
// import AuthComponent from './components/AuthComponent';

function App() {
  const router = useRouter();

  useEffect(() => {
    // 初回アクセス時にSignupページへリダイレクト
    router.push('/');
  }, [router]);

  return (
    <Signup />
  //   <Home 
  //   monthlyTransactions={monthlyTransactions} 
  //   setCurrentMonth={setCurrentMonth}
  //   onSaveTransaction={handleSaveTransaction}
  //   onDeleteTransaction={handleDeleteTransaction}
  // />
  )
}

export default App;
