import React from 'react';

import Elo from './EloComponent';
import '../views/styles/UserComponents.css';
import PlayerInterface from '../templates/PlayerInterface';

interface PropsUserComponent {
    role: string,
    player: PlayerInterface,
}

export default function UserComponent(props: PropsUserComponent){

    const { player, role } = props;


    return (
        <div className={`user-container ${role}`}>
            <div className='image-wrapper'>
                <img src={`/asseets/${player.profileIconId}`} alt={player.name}/>
            </div>
            <div className='content-wrapper'>
                <p>{player.name}</p>
                <p>{player.summonerLevel}</p>
                <p>{player.locale}</p>
                {   
                    player.elo?(
                        <div className='elo-wrapper'>
                            {player.elo.map(el => {
                            return(
                                <Elo elo={el}></Elo>)
                            })}
                        </div>
                    ) : (<p>
                        Unranked
                    </p>)
                }
            </div>
        </div>
    )
}