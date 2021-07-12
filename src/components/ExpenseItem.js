import React from 'react';
import ReactDOM from "react-dom";

import ExpenseItemStyles from './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description"><h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}
export default ExpenseItem;