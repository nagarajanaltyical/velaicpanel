import React from 'react';
import Logo from '../../Image/Logo merge.png';
import Logo3 from '../../Image/dashboard.png';
import Logo5 from '../../Image/Line.svg';
import './sidebar.css';

const Sidebar = () => {
    return (
        <>
            <div className="Sidebar">
                <div className='top'>
                    <span className='logo'>
                        <img src={Logo} alt="Velai logo" style={{ width: 90, marginBottom: 350, marginTop: 30 }} />
                    </span>
                    <div style={{ marginTop: -320 }}>
                        <button className='hi-hi'>
                            <img src={Logo3} className='logo-icon'></img>
                            <div className='logo-dashboard'>
                                Dashboard
                            </div>
                        </button>
                        <div className='list'>
                            <ul>
                                <li>Job Seekers</li>
                            </ul>
                            <br />
                            <ul>
                                <li>Job Seekers</li>
                            </ul>
                            <br />
                            <ul>
                                <li>Job Seekers</li>
                            </ul>
                            <br />
                            <ul>
                                <li>Job Seekers</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div>
                        <img src={Logo5} className='hr-line-sidebar'></img>
                    </div>
                </div>
                <button className='logout' >Log Out</button>
            </div>

        </>
    )
}

export default Sidebar