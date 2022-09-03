import React from 'react';
import { useState } from 'react';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Button from '../../UI/Button/Button';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Information from './Information';
import styles from './Main.module.scss'


function Main() {
    let [isSidebar, setIsSidebar] = useState(false)

    return <div style={{ display: 'flex' }} className={styles.wrapper}>
        <Sidebar
            isSidebar={isSidebar}
            setIsSidebar={setIsSidebar}
        />
        <div className={styles.wrapper__main} style={{ backgroundImage: `url(${DATA[0].mainImage})`, width: isSidebar ? '85%' : '90%' }}>
            <Information movie={DATA[0]} />
            <BottomNavigation />
        </div>
    </div>
}
export default Main;


// style={{ backgroundImage: `url(${DATA[0].mainImage})`, width: isSidebar ? 70 : 85 }}