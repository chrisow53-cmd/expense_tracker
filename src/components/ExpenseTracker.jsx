import { ExpenseCard } from "./ExpenseCard";

export function ExpenseTracker({ tracker, onDeleteExpense }) {
    return (
        <div className="expense-list">
            {tracker.map((expense) => (
                <ExpenseCard 
                    key={expense.id}
                    expense={expense} 
                    onDelete={() => onDeleteExpense(expense.id)} 
                />
            ))}
        </div>
    )
}