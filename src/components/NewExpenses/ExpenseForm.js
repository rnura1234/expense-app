import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
   const [enteredTitle, setTitle] = useState('');
   const [enteredAmount, setAmount] = useState('');
   const [enteredDate, setDate] = useState('');

   const titleChangeHandler = (event) => {
      setTitle(event.target.value);
   };
   const amountChangeHandler = (event) => {
      setAmount(event.target.value);
   };
   const dateChangeHandler = (event) => {
      setDate(event.target.value);
   };

   const formSubmitHandler = (event) => {
      event.preventDefault();
      const expenseData = {
         title: enteredTitle,
         amount: +enteredAmount,
         date: new Date(enteredDate),
      };

      props.onSaveExpenseForm(expenseData);
      setTitle('');
      setAmount('');
      setDate('');
   };

   return (
      <form onSubmit={formSubmitHandler}>
         <div className='new-expense__controls'>
            <div className='new-expense__control'>
               <label htmlFor='title'>Title</label>
               <input
                  id='title'
                  type='text'
                  value={enteredTitle}
                  onChange={titleChangeHandler}
               />
            </div>

            <div className='new-expense__control'>
               <label htmlFor='amount'>Amount</label>
               <input
                  id='amount'
                  type='number'
                  min='0.01'
                  step='0.01'
                  value={enteredAmount}
                  onChange={amountChangeHandler}
               />
            </div>
            <div className='new-expense__control'>
               <label htmlFor='date'>Date</label>
               <input
                  id='date'
                  type='date'
                  min='2019-01-01'
                  max='2022-12-31'
                  value={enteredDate}
                  onChange={dateChangeHandler}
               />
            </div>
         </div>
         <div className='new-expense__actions'>
            <button type='button' onClick={props.onHide}>
               Cancel
            </button>
            <button type='submit'>Add Expense</button>
         </div>
      </form>
   );
};
export default ExpenseForm;
