import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Report from './Report/Report';
import NoMatch from './NoMatch/NoMatch';
import AppLayout from './components/layout/AppLayout';
import Signup from './Signup/Signup';
import { Transaction } from './types';
import { Schema } from './validations/schema';

interface ClientOnlyRouterProps {
    monthlyTransactions: Transaction[];
    setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
    onSaveTransaction: (transaction: Schema) => Promise<void>;
    onDeleteTransaction: (transactionId: string) => Promise<void>;
}

const ClientOnlyRouter: React.FC<ClientOnlyRouterProps> = ({
    monthlyTransactions,
    setCurrentMonth,
    onSaveTransaction: handleSaveTransaction,
    onDeleteTransaction: handleDeleteTransaction
}) => {
    const isGitHubPages = process.env.NODE_ENV === 'production'; // ここでチェック
    const basename = isGitHubPages ? '/household-app-temp' : '/';
    
    return(
        <Router basename={basename}>
            <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<Home
                                monthlyTransactions={monthlyTransactions} 
                                setCurrentMonth={setCurrentMonth}
                                onSaveTransaction={handleSaveTransaction}
                                onDeleteTransaction={handleDeleteTransaction} />} 
                />
                <Route path='/report' element={<Report />} />
                <Route path='/signup' element={<Signup />} />

                <Route path='*' element={<NoMatch />} />
            </Route>
            </Routes>
        </Router>
    );
}

export default ClientOnlyRouter;