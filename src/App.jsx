import React from 'react';
import TransactionForm from 'components/MainTransactions/TransactionFormComponent';
import TransactionChart from 'components/MainTransactions/TransactionChartComponent';
import TransactionTotal from 'components/MainTransactions/TransactionTotalComponent';
import TransactionHeader from 'components/MainTransactions/TransactionHeaderComponent';
import TransactionDescription from 'components/MainTransactions/TransactionDescriptionComponent';
import CategoriesModal from 'components/CategoriesModalComponent';

const App = () => {
  return (
    <>
      <TransactionHeader />
      <TransactionDescription />
      <TransactionTotal />
      <TransactionForm />
      <TransactionChart />
      <CategoriesModal />
    </>
  );
};

export default App;