import React from 'react';
import './styles/HomeViewStyle.css'
import Account from '../components/UserComponent';

export default function Home(){


    return (
        <div className='home-container'>
            <div className='container-wrapper'>
                <div className='accounts-wrapper'>
                    {[1,2,3,4].map(
                        el => {
                            return(
                                <Account></Account>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}