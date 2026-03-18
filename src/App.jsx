import { useState, useEffect } from 'react'
import { ExpenseInput } from './components/ExpenseInput'
import { ExpenseTracker } from './components/ExpenseTracker'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'

const DEFAULT_EXPENSES = [
  { id: 1, name: 'Dinner at Sepang', amount: 25.5, category: 'Food', date: '2026-03-16' },
  { id: 2, name: 'Grab to Xiamen Uni', amount: 15.0, category: 'Transport', date: '2026-03-17' },
  { id: 3, name: 'Stationery', amount: 5.0, category: 'Academic', date: '2026-03-17' },
]

function App() {
  const [tracker, setTracker] = useState(() => {
    const saved = localStorage.getItem('expenseTracker')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (error) {
        console.error('Failed to parse localStorage data for expenses', error)
      }
    }
    return DEFAULT_EXPENSES
  })

  const [activeTab, setActiveTab] = useState('All')

  const addExpense = (expense) => {
    const newExpense = {
      ...expense,
      id: Date.now(),
    }
    setTracker((prev) => [newExpense, ...prev])
  }

  const deleteExpense = (idToDelete) => {
    setTracker((prev) => prev.filter((item) => item.id !== idToDelete))
  }

  const clearAllExpenses = () => {
    setTracker([])
    setActiveTab('All')
  }

  useEffect(() => {
    localStorage.setItem('expenseTracker', JSON.stringify(tracker))
  }, [tracker])

  const filteredTracker = activeTab === 'All'
    ? tracker
    : tracker.filter((item) => item.category === activeTab)

  return (
    <>
      <Header tracker={filteredTracker} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <Tabs tracker={tracker} activeTab={activeTab} onChangeTab={setActiveTab} />
        <button
          onClick={clearAllExpenses}
          className="card-button-secondary"
          style={{ minWidth: '110px', backgroundColor: '#ff4d4d', color: 'white' }}
        >
          Clear All
        </button>
      </div>
      
      {/* UPDATE THIS LINE TO ADD THE PROP: */}
      <ExpenseTracker 
        tracker={filteredTracker} 
        onDeleteExpense={deleteExpense} 
      />
      
      <ExpenseInput onAddExpense={addExpense} />
    </>
)
}

export default App