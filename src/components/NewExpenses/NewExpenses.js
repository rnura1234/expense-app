import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpenses = (props) => {
   const expenseFormHandler = (expense) => {
      const expenseData = {
         ...expense,
         id: Math.random(),
      };
      props.onSaveExpenseData(expenseData);
   };

   const [isFormShow, setFormShow] = useState(false);

   //function to set form visible
   const formShowHandler = () => {
      setFormShow(true);
   };
   //function to set form hide
   const hideFormHandler = (props) => {
      setFormShow(false);
   };

   // NewExpenseButton content
   const newExpenseButton = (
      <button type='button' onClick={formShowHandler}>
         Add New Expenses
      </button>
   );
   return (
      <div className='new-expense'>
         {isFormShow ? (
            <ExpenseForm
               onSaveExpenseForm={expenseFormHandler}
               onHide={hideFormHandler}
            />
         ) : (
            newExpenseButton
         )}
      </div>
   );
};

export default NewExpenses;
