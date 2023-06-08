import React from 'react'
import Sidebar from '../../Pages/Sidebar/Sidebar'
import './cpanel.css'
import Cpanelcontent from '../../Pages/Cpanelcontent/Cpanelcontent'

const Cpanel = () => {
    return (
        <>
            <div className='Cpannel'>
                <Sidebar />
                <Cpanelcontent/>
            </div>
        </>
    )
}

export default Cpanel