import React, { useState } from 'react';
import navData from './navData'
import { Link } from 'react-router-dom';
const NavBar = () => {
    
    const [nav,isNav]=useState(false)
    const onToggle=()=>{
        isNav(!nav)
    }
    return (
        <div className='navbar'>

            <p className='all-menu' onClick={onToggle}>menu</p>
            <nav className={`nav ${nav && 'on'}`}>
                <ul>
                    {
                        navData.map((item,index)=>{
                            return <li key={index}><Link to={item.path}>{item.title}</Link></li>
                        })
                    }
                </ul>
                <p className='close' onClick={()=>isNav(false)}>X</p>
            </nav>
              
        </div>
    );
};

export default NavBar;