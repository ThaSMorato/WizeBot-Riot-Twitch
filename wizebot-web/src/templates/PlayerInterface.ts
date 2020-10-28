import React from 'react';
import PlayerEloInterface from './PlayerEloInterface';

interface PlayerInterface{
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
    elo?: Array<PlayerEloInterface>;
}

export default PlayerInterface;