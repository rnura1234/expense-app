import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = (props) => {
   if (props.items.length === 0) {
      return <h2 className='expenses-list__fallback'>Found No Expense</h2>;
   }

   return (
      <ul className='expenses-list'>
         {props.items.map((expense) => {
            return (
               <ExpenseItem
                  key={expense.id.toString()}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
               />
            );
         })}
      </ul>
   );
};
export default ExpensesList;
