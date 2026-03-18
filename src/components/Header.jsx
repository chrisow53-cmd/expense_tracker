export function Header(props) { 
    const { tracker = [] } = props   
    
    const now = new Date()
    const currentMonth = now.getMonth() 
    const currentYear = now.getFullYear()

    // Total All-Time
    const totalAmount = tracker.reduce((acc, curr) => acc + curr.amount, 0)

    // Monthly Total 
    const monthlyTotal = tracker.filter(item => {
        const itemDate = new Date(item.date)
        return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear
    }).reduce((acc, curr) => acc + curr.amount, 0)

    // Yearly Total 
    const yearlyTotal = tracker.filter(item => {
        const itemDate = new Date(item.date)
        return itemDate.getFullYear() === currentYear
    }).reduce((acc, curr) => acc + curr.amount, 0)

    return (
        <header style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 180px', padding: '1rem', borderRadius: '0.8rem', backgroundColor: '#121b29', color: 'white', boxShadow: '0 0 16px rgba(37, 99, 235, 0.45)', border: '1px solid rgba(37, 99, 235, 0.4)' }}>
                    <h4 style={{ margin: 0, opacity: 0.8 }}>Total</h4>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '1.5rem', fontWeight: '700', color: '#72c7ff' }}>RM {totalAmount.toFixed(2)}</p>
                </div>
                <div style={{ flex: '1 1 180px', padding: '1rem', borderRadius: '0.8rem', backgroundColor: '#ffffff', color: '#030615', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h4 style={{ margin: 0, opacity: 0.8 }}>This Month</h4>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '1.2rem', fontWeight: '600' }}>RM {monthlyTotal.toFixed(2)}</p>
                </div>
                <div style={{ flex: '1 1 180px', padding: '1rem', borderRadius: '0.8rem', backgroundColor: '#ffffff', color: '#030615', boxShadow: '0 2px 10px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.1)' }}>
                    <h4 style={{ margin: 0, opacity: 0.8 }}>This Year</h4>
                    <p style={{ margin: '0.25rem 0 0', fontSize: '1.2rem', fontWeight: '600' }}>RM {yearlyTotal.toFixed(2)}</p>
                </div>
            </div>
        </header>
    )
}