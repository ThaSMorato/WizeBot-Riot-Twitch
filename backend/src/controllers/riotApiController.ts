import * as riotService from '../api/riotApi'
import { summonerInterface } from '../interfaces/AccountInterfaces';

export default {

    getSummonerByName(accountNick : string, locale: string ){
        return riotService.riotApi.get<{data: summonerInterface}>(`${riotService.localesUrl[locale]}${riotService.services.summoner_v4.getSummonerBySummonerName}${accountNick}`);
    }
}