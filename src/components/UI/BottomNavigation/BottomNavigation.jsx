import React from "react";
import styles from './BottomNavigation.module.scss'

const tabs = [
    {
        id: 1,
        name: 'Overview'
    },
    {
        id: 2,
        name: 'Episodes'
    },
    {
        id: 3,
        name: 'Details'
    }
]

function BottomNavigation({ activeTab, setActiveTab }) {
    return <nav className={styles.nav}>
        {tabs.map(tab => {
            return <button key={tab.id} className={activeTab === tab.id ? styles.active : ''} onClick={() => setActiveTab(tab.id)}>{tab.name}</button>
        })}
    </nav>
}
export default BottomNavigation;