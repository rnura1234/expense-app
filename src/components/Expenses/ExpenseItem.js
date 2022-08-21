// import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

//creating component as function
const ExpenseItem = (props) => {
   ////react not update direct instead use useState react buitin hooks
   // let title = props.title;
   // const changeHandler = () => {
   //    title = 'updated';
   //    console.log(title);
   // };

   //use setState hook
   // const [title, setTitle] = useState(props.item.title);

   // const changeTitleHandler = () => {
   //    setTitle('update');
   //    console.log(title);
   // };

   return (
      <Card className='expense-item'>
         {/* use culry bracket to write expression in jsx */}
         {/*use another component  */}
         <ExpenseDate date={props.date} />
         <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
         </div>
      </Card>
   );
};
export default ExpenseItem;
