import React from 'react';
import ExpenseItemStyles from './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>July 11 2021</div>
            <div className="expense-item__description"><h2>Car Insurance</h2>
                <div className="expense-item__price">28.32</div>
            </div>
        </div>
    );
}
export default ExpenseItem;