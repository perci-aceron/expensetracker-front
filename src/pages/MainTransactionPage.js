// src/pages/MainTransactionPage.js
import React from 'react';
import TransactionHeader from 'components/MainTransactions/TransactionHeaderComponent';
import TransactionDescription from 'components/MainTransactions/TransactionDescriptionComponent';
import TransactionTotal from 'components/MainTransactions/TransactionTotalComponent';
import TransactionForm from 'components/MainTransactions/TransactionFormComponent';
import TransactionChart from 'components/MainTransactions/TransactionChartComponent';
const MainTransactionPage = () => {
  return (
    <>
      <TransactionHeader />
      <TransactionDescription />
      <TransactionTotal />
      <TransactionForm />
      <TransactionChart />
    </>
  );
};

export default MainTransactionPage;
