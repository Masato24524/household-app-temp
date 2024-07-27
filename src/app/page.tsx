"use client"

import React, { useEffect, useState } from 'react';
import './page.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { theme } from './theme/theme'
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Transaction } from './types/index';
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { formatMonth } from './utils/formatting';
import { Schema } from './validations/schema';
import Signup from './Signup/Signup';
import dynamic from 'next/dynamic';
import { getAuth } from 'firebase/auth';
// import ClientOnlyRouter from './ClientOnlyRouter';
// import AuthComponent from './components/AuthComponent';

// クライアントサイド専用で動的にインポート
const ClientOnlyRouter = dynamic(() => import('./ClientOnlyRouter'), {
  ssr: false,
});

function App() {

  // Firestoreのエラーかどうかを判定する型ガード
  function isFireStoreError(err: unknown): err is {code: string, message: string} {
    return typeof err === 'object' && err !== null && 'code' in err
  }

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);

  //firestoreのデータを【ユーザーのUIDと一致するもののみ】を全て取得
  useEffect(() => {
    if (user) {
      const fetchTransactions = async () => {
        try {
          const userTransactionsCollection = collection(db, 'users', user.uid, 'Transactions');
          const querySnapshot = await getDocs(userTransactionsCollection);
          console.log(querySnapshot);

          const transactionsData =querySnapshot.docs.map((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            return {
              ...doc.data(),
              id: doc.id,
            } as Transaction;
          });
          console.log(transactionsData);
          setTransactions(transactionsData);
        } catch(err) {
          if(isFireStoreError(err)) {
            console.error('firestoreのエラーは：', err);
          } else {
            console.error('一般的なエラーは：', err);
          }
          //error
        }
      }
      fetchTransactions();
    }
  
  }, [user])

  //ひと月分のデータのみ取得
  const monthlyTransactions = transactions.filter((transaction) => {
    return transaction.date.startsWith(formatMonth(currentMonth));
  });

  //取引を保存する処理
  const handleSaveTransaction = async(transaction: Schema) => {
    if (user) {
      try {
        // //uidを追加
        // const transactionWithUid = {
        //   ...transaction,
        //   uid: user.uid,
        // };

        //firestoreにデータを保存
        // Add a new document with a generated id.
        const userTransactionsCollection = collection(db, 'users', user.uid, 'Transactions');
        const docRef = await addDoc(userTransactionsCollection, transaction);
        console.log("Document written with ID: ", docRef.id);

        const newTransaction = {
          id: docRef.id,
          ...transaction,
        } as Transaction
        setTransactions((prevTransaction) => [
          ...prevTransaction, 
          newTransaction]);
      } catch(err) {
        if(isFireStoreError(err)) {
          console.error('firestoreのエラーは：', err);
        } else {
          console.error('一般的なエラーは：', err);
        }
      }
    }
  };

  //取引を削除する処理
  const handleDeleteTransaction = async (transactionId: string) => {
    if (user) {
      try {
        //firestoreのデータ削除
        const transactionDoc = doc(db, 'users', user.uid, 'Transactions', transactionId);
        await deleteDoc(transactionDoc);
        console.log(transactionId)
        const filterdTransactions = transactions.filter((transaction) => transaction.id !== transactionId)
        console.log(filterdTransactions)
        setTransactions(filterdTransactions)
      } catch(err) {
        if(isFireStoreError(err)) {
          console.error('firestoreのエラーは：', err);
        } else {
          console.error('一般的なエラーは：', err);
        }
      }
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ClientOnlyRouter 
        monthlyTransactions={monthlyTransactions} 
        setCurrentMonth={setCurrentMonth}
        onSaveTransaction={handleSaveTransaction}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </ThemeProvider>
  );
}

export default App;
