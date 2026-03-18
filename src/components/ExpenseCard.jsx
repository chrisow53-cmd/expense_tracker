export function ExpenseCard({ expense, onDelete }) {
    const categoryColors = {
        Food: '#2ecc71',
        Transport: '#3498db',
        Academic: '#f1c40f',
        Other: '#95a5a6',
    }

    const borderColor = categoryColors[expense.category] || categoryColors.Other

    return (
        <div className="card" style={{ marginBottom: '1rem', borderLeft: `6px solid ${borderColor}`, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div className="todo-item">
                <div>
                    <p style={{ marginBottom: '0.25rem' }}>{expense.name}</p>
                    <small>{expense.category} • {expense.date}</small>
                </div>
                <div className="todo-buttons" style={{ alignItems: 'center' }}>
                    <h3 style={{ margin: '0 1rem', color: borderColor }}>
                        RM {expense.amount.toFixed(2)}
                    </h3>
                    <button 
                        onClick={onDelete} 
                        className="card-button-secondary"
                        style={{ color: '#ff4d4d' }}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}