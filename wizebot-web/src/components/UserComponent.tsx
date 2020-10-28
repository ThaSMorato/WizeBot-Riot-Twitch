import React from 'react';

import Elo from './EloComponent';
import '../views/styles/UserComponents.css'

export default function UserComponent(){


    return (
        <div className='user-container'>
            <div className='image-wrapper'>
                <img src='#' alt='userIcon'/>
            </div>
            <div className='content-wrapper'>
                <p>Name</p>
                <p>Level</p>
                <div className='elo-wrapper'>
                    {[1,2].map(el => {
                        return(
                            <Elo></Elo>)
                    })}
                </div>
            </div>
        </div>
    )
}