import React, { useState } from 'react';
import ReactDOM from "react-dom";
import ExpenseDate from './ExpenseDate';
import Card from './Card';

import ExpenseItemStyles from './ExpenseItem.css';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    console.log(title);
    const ClickHandler = () => {
        setTitle('Updated!');
        setAmount('111.11');
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description"><h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
            <button onClick={ClickHandler}>Click Here!</button>
        </Card>
    );
}
export default ExpenseItem;