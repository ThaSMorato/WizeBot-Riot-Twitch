import React, { useState } from 'react';
import PlayerInterface from '../templates/PlayerInterface';
import '../views/styles/AccountComponent.css';


interface PropsUserComponent {
    player: PlayerInterface,
    role: string,
    accountStatus : string,
    setFollowing : Function,
    cancelFollowing: Function,
}

export default function AccountOptionsComponent(props: PropsUserComponent) {

    const {player, role, accountStatus, setFollowing, cancelFollowing} = props;
    


    return (
        <div className='options-wrapper'>
            <div className='row-wrap'>
                <div className='column col33'>
                    <button className='buttons attElo'> Update elo</button>
                    <button className='buttons attNick'> Update Nick </button>
                    { role == 'main'? (
                        <button className='buttons addSmurf'>add smurf</button>
                    ) : (
                        <button className='buttons delSmurf'>del smurf</button>
                    )}
                </div>
                <div className="column col33">
                    <button className='buttons attAcc'>Update account</button>
                </div>
                <div className="column col33">
                    <input type="text" readOnly className={accountStatus != 'Not Following' ? `status ${accountStatus}` : 'status'} value={accountStatus}/>
                    {accountStatus != 'Not Following' ? (<button className='buttons unfollowBtn' onClick={() => cancelFollowing()}>Cancel Following</button>) : (<button className='buttons followBtn' onClick={() => setFollowing(player.id)}>follow</button>)}
                </div>
            </div>
        </div>
    )
}

/**
 * status: normal-game, draf-game, ranked-game, flex-game, tft?, queue, not following
 */