import React from 'react';
import PlayerEloInterface from '../templates/PlayerEloInterface';

interface EloComponentPros{
    elo: PlayerEloInterface
}

export default function EloComponent(props: EloComponentPros){
    const {elo} = props;

    return (
        <div className='elo-container'>
            <div className='image-wrapper'>
                <img src={elo.rank} alt='userIcon'/>
            </div>
            <div className='content-wrapper'>
                <p>{elo.queueType == 'soloq'? "Solo Queue": (elo.queueType == 'flexq'? "Flex Queue" : "TFT")}</p>
                <p>{elo.rank}</p>
                <p>{elo.leaguePoints}</p>
                <p>{`${elo.wins}/${elo.losses}`}</p>
            </div>
        </div>
    )
}