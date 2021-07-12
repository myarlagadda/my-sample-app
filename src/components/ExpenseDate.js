import './ExpenseDate.css'
import Card from './Card';

function ExpenseDate(props) {
    const Month = props.date.toLocaleString('en-US', { month: 'long' });
    const Year = props.date.getFullYear();
    const Day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <Card className="expense-date">
            <div className="expense-date__month">{Month}</div>
            <div className="expense-date__year">{Year}</div>
            <div className="expense-date__day">{Day}</div>
        </Card>);

}

export default ExpenseDate;