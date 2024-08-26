import React from "react";
import { Schema } from "../validations/schema";

interface TransactionContextType {
  monthlyTransactions: any[];
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  handleSaveTransaction: (transaction: Schema) => Promise<void>;
  handleDeleteTransaction: (transactionId: string) => Promise<void>;
  isLoading: boolean;
  currentMonth: Date;
  handleUpdateTransaction: (
    transaction: Schema,
    transactionId: string
  ) => Promise<void>;
}

export const TransactionContext = React.createContext<
  TransactionContextType | undefined
>(undefined);

export const useTransactionContext = () => {
  const context = React.useContext(TransactionContext);
  if (context === undefined) {
    throw new Error(
      "useTransactionContext must be used within a TransactionProvider"
    );
  }
  return context;
};
