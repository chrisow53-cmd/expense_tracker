import { useState } from 'react'

export function ExpenseInput({ onAddExpense }) {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('Food')
    const [date, setDate] = useState('')

    const submit = (e) => {
        e.preventDefault()
        const parsedAmount = parseFloat(amount)
        if (!name.trim() || Number.isNaN(parsedAmount) || parsedAmount <= 0 || !date) return

        onAddExpense({
            name: name.trim(),
            amount: parsedAmount,
            category,
            date,
        })

        setName('')
        setAmount('')
        setCategory('Food')
        setDate('')
    }

    return (
    <form className="card" onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="input-container">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Expense name (e.g. Lunch)" />
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="0.00" step="0.01" style={{ maxWidth: '120px' }} />
        </div>
        <div className="input-container">
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Academic">Academic</option>
                <option value="Other">Other</option>
            </select>
            <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
            <button type="submit" className="card-button-primary">Add Expense</button>
        </div>
    </form>
)
}