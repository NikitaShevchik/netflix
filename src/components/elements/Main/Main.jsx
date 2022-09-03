import React from 'react';
import { DATA } from '../../../data';
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation';
import Button from '../../UI/Button/Button';
import Sidebar from '../../UI/Sidebar/Sidebar';
import Information from './Information';


function Main() {
    return <div>
        <Sidebar />
        <div style={{}}>
            <Information movie={DATA[0]} />
            <BottomNavigation />
        </div>
        {/*         
        <Button
            icon={<i class='bx bx-play'></i>}
            text='Play'
            iconFS='60px'
            iconColor='#c62e21'
        />
        <Button
            icon={<i class='bx bx-plus' ></i>}
            text='My list'
        /> */}
    </div>
}
export default Main;