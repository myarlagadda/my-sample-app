import './CreateExpenseForm.css'

const CreateExpenseForm = () => {
    return (
        <div className="new-expense__controls">
            <form>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" id="Title" name="Title" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="text" label="Amount" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" label="Date" />
                </div>
                <div className="new-expense__actions"><button type="submit">Add Expense</button></div>
            </form>
        </div>

    );
}
export default CreateExpenseForm;