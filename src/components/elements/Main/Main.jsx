import React from 'react';
import { useState } from 'react';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Button from '../../UI/Button/Button';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Details from '../Details/Details';
import Episodes from '../Episodes/Episodes';
import Information from './Information';
import styles from './Main.module.scss'


function Main() {
    let [isSidebar, setIsSidebar] = useState(false);
    let [activeTab, setActiveTab] = useState(1)

    return <div style={{ display: 'flex' }} className={styles.wrapper}>
        <Sidebar
            isSidebar={isSidebar}
            setIsSidebar={setIsSidebar}
        />
        <div className={styles.wrapper__main} style={{ backgroundImage: `url(${DATA[0].mainImage})`, width: isSidebar ? '85%' : '90%' }}>
            {activeTab === 1 ?
                <Information movie={DATA[0]} />
                : activeTab === 2 ? < Episodes movie={DATA[0]} /> :
                    <Details movie={DATA[0]} />}
            <BottomNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </div>
    </div>
}
export default Main;


// style={{ backgroundImage: `url(${DATA[0].mainImage})`, width: isSidebar ? 70 : 85 }}