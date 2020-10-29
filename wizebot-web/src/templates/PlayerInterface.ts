import React from 'react';
import PlayerEloInterface from './PlayerEloInterface';

interface PlayerInterface{
    locale: string;
    name: string;
    id: string;
    accountId: string;
    puuid: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
    elo?: Array<PlayerEloInterface>;
}

export default PlayerInterface;


/**
 *       
            <option value="BR1" selected="true">BR1</option>
            <option value="EUN1">EUN1</option>
            <option value="EUW1">EUW1</option>
            <option value="JP1">JP1</option>
            <option value="KR">KR</option>
            <option value="LA1">LA1</option>
            <option value="LA2">LA2</option>
            <option value="NA1">NA1</option>
            <option value="OC1">OC1</option>
            <option value="RU">RU</option>
            <option value="TR1">TR1</option>
                
 */