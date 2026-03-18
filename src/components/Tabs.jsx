export function Tabs({ tracker = [], activeTab = 'All', onChangeTab }) {
    const tabs = ['All', 'Food', 'Transport', 'Academic', 'Other']

    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const numOfExpenses = tab === 'All'
                    ? tracker.length
                    : tracker.filter(val => val.category === tab).length

                return (
                    <button
                        key={tabIndex}
                        onClick={() => onChangeTab(tab)}
                        className={`tab-button ${activeTab === tab ? 'tab-selected' : ''}`}>
                        <h4>{tab} <span>({numOfExpenses})</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}