import React from 'react';
import { NavLink } from 'react-router-dom';


export default function NavbarComponent() {
    return (
        <nav className='navBar'>
            <ul>
                <li>
                    <NavLink  to='/Home'>
                        Home
                    </NavLink >
                </li>
                <li>
                    <NavLink to='/Keys'>
                        WizeBot Keys
                    </NavLink>
                </li>
                <li className='account-options-wrapper'>
                    <button className='logout'>Logout</button>
                </li>
            </ul>
        </nav>
    )
}