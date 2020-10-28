import React from 'react';

export default function EloComponent(){


    return (
        <div className='elo-container'>
            <div className='image-wrapper'>
                <img src='#' alt='userIcon'/>
            </div>
            <div className='content-wrapper'>
                <p>Name</p>
                <p>Level</p>
                <p>wins/loss</p>
            </div>
        </div>
    )
}