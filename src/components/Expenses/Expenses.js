import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

import Card from '../UI/Card';

import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
const Expenses = (props) => {
   const [selectedYear, setSelectedYear] = useState('2021');
   const onExpenseChangeHandler = (selectedYear) => {
      
      setSelectedYear(selectedYear);
   };
   const filteredExpense = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
   });

   return (
      <div>
         <Card className='expenses'>
            <ExpensesFilter
               selected={selectedYear}
               onExpenseChange={onExpenseChangeHandler}
            />
            <ExpenseChart expenses={filteredExpense} />
            <ExpensesList items={filteredExpense} />
         </Card>
      </div>
   );
};

export default Expenses;
