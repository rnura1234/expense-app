import { useState } from 'react';
import './App.css';
import ExpenseHeader from './components/ExpenseHeader/ExpenseHeader';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

function App() {
   const Dummy_Item = [
      {
         id: 'e1',
         title: 'Toilet Paper',
         amount: 94.12,
         date: new Date(2020, 7, 14),
      },
      {
         id: 'e2',
         title: 'New TV',
         amount: 799.49,
         date: new Date(2021, 2, 12),
      },
      {
         id: 'e3',
         title: 'Car Insurance',
         amount: 294.67,
         date: new Date(2021, 2, 28),
      },
      {
         id: 'e4',
         title: 'New Desk (Wooden)',
         amount: 450,
         date: new Date(2021, 5, 12),
      },
   ];

   const [expenses, setExpenses] = useState(Dummy_Item);
   const saveExpenseDataHandler = (expenseData) => {
      setExpenses((prevState) => [expenseData, ...prevState]);
   };

   return (
      <div>
         <ExpenseHeader/>
         <NewExpenses onSaveExpenseData={saveExpenseDataHandler} />
         <Expenses items={expenses} />
      </div>
   );
}

export default App;
