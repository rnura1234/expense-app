import React from 'react'
import classes from './ExpenseHeader.module.css'
function ExpenseHeader() {
  
  return (
    <div className={classes.header}>
      <h1 className={classes['header_text']}>Expense App</h1>
   </div>
  )
}

export default ExpenseHeader