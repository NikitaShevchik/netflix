import React from "react";
import styles from './Sidebar.module.scss'

const menu = [
    'Popular', 'TV Shows', 'Films', 'My list'
]

let isSidebar = false;

function Sidebar({ isSidebar, setIsSidebar }) {
    return <div className={styles.sidebar} style={{ width: isSidebar ? '15%' : '10%' }}>
        <button onClick={() => setIsSidebar(!isSidebar)} className={styles.sidebar__button}>
            <i className={`bx bx-${isSidebar ? 'x' : 'menu-alt-left'}`}></i>
        </button>
        <ul style={{ position: 'absolute', left: isSidebar ? '0' : '-100%', transform: isSidebar ? 'translate(0, 0)' : 'translate(-150%, 0)' }}>
            {menu.map(item => {
                return <li key={item}>
                    <a href={item}>{item}</a>
                </li>
            })}
        </ul>
    </div>
}

export default Sidebar;