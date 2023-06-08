import React, { useState } from 'react';
import './cpanelcontent.css';
import Logo1 from '../../Image/download-to-storage-drive.png';
import Logo2 from '../../Image/group.png';
import Logo4 from '../../Image/user (1).png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Cpanelcontent = () => {

    const [value, onChange] = useState(new Date());

    return (<div className='Cpanelcontent'>
        <div style={{ color: "white", marginTop: -570, }}>

            <button className='aa-aa'>
                <img src={Logo4} className='user-icon'></img>
                <div className='user-text'>New User</div>
            </button>
        </div>

        <div className='admin-box'  >
            <button className='bb-bb'>
                <div className='id-sir'>Sathish</div><br />
                <div className='b-b'>Super Admin</div>
                <div className='usericon'><button className='border-inside-circle'>
                    <img src={Logo4} className='user-icon-admin'></img>
                </button>
                </div>

            </button>
        </div>
        <div className='top'>

            <div className='download'>
                <button className='dd-dd'>
                    <img className='cc-cc' src={Logo1}></img>
                    <div className='asdf'>
                        <p className='ee-ee'>10K</p>
                        <p className='ff-ff'>Downloads</p>
                    </div>
                </button>
            </div>

            <div className='we'>
                <button className='gg-gg'>
                    <img className='hh-hh' src={Logo2}></img>
                    <div>
                        <p className='ii-ii'>9K</p>
                        <p className='jj-jj'>Users</p>
                    </div>
                </button>
            </div>
        </div>
        <div>
            <div className='ll-ll'>
                <button className='kk-kk'><p className='kk'>Job Seekers</p><h1>2K</h1></button>
            </div>
            <div className='mm-mm'>
                <button className='kk-kk'><p className='kk'>Job Provider</p><h1>2K</h1></button>
            </div>
            <div className='nn-nn'>
                <button className='kk-kk'><p className='kk'>Rental Seekers</p><h1>2K</h1></button>
            </div>
            <div className='oo-oo'>
                <button className='kk-kk'><p className='kk'>Rental Providers</p><h1>2K</h1></button>
            </div>
            <div className='pp-pp'>
                <Calendar onChange={onChange} value={value} />            </div>
        </div>

    </div>
    )
}

export default Cpanelcontent;