import axios from 'axios';
require('dotenv/config');

const headers = {
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": process.env.RIOT_APP_ORIGIN,
    "X-Riot-Token": process.env.APP_RIOT_API_TOKEN
}
const baseUrl = 'api.riotgames.com';

export const riotApi = axios.create({
    headers: headers,
});

export const localesUrl = {
    BR1 : `https://br1.${baseUrl}`,
    EUN1: `https://eun1.${baseUrl}`,
    EUW1 : `https://euw1.${baseUrl}`,
    JP1 : `https://jp1.${baseUrl}`,
    KR : `https://kr.${baseUrl}`,
    LA1 : `https://la1.${baseUrl}`,
    LA2 : `https://la1.${baseUrl}`,
    NA1 : `https://na1.${baseUrl}`,
    OC1 : `https://oc1.${baseUrl}`,
    RU : `https://ru.${baseUrl}`,
    TR1 : `https://tr1.${baseUrl}`,
    AMERICAS:  `https://americas.${baseUrl}`,
    ASIA: `https://asia.${baseUrl}`,
    EUROPE: `https://europe.${baseUrl}`,

}

export const services = {
    account_v1: {
        getAccountByPuuid : "/riot/account/v1/accounts/by-puuid/",
        getAccountByRiotId : '/riot/account/v1/accounts/by-riot-id/',
        getActiveShardsLor : '/riot/account/v1/active-shards/by-game/lor/',
        getActiveShardsVar : '/riot/account/v1/active-shards/by-game/var/'
    },
    championMastery_v4: {
        getAllMateryBySummonerId :'/lol/champion-mastery/v4/champion-masteries/by-summoner/',
        getByChampion: '/by-champion/',
        getPlayerTotalScoreBySummonerId :'/lol/champion-mastery/v4/scores/by-summoner/'
    },
    champion_v3: {
        getChampionRotations : '/lol/platform/v3/champion-rotations'
    },
    clash_v1: {
        getPlayersBySummonerId :'/lol/clash/v1/players/by-summoner/',
        getTeamByTeamId : '/lol/clash/v1/teams/',
        getActiveAndUpcomingTournaments :'/lol/clash/v1/tournaments',
        getTournamentByTeamId : '/lol/clash/v1/tournaments/by-team/',
        getTournamentById :'/lol/clash/v1/tournaments/'
    },
    league_v4: {
        getChallengerLeagueByQueue: '/lol/league/v4/challengerleagues/by-queue/',
        getLeagueEntriesBySummonerId:'/lol/league/v4/entries/by-summoner/',
        getLeagueEntries: '/lol/league/v4/entries/', ///{queue}/{tier}/{division}
        getLeagueGrandMastersByQueue: '/lol/league/v4/grandmasterleagues/by-queue/',
        getLeagueById: '/lol/league/v4/leagues/',
        getMastersByQueue: '/lol/league/v4/masterleagues/by-queue/',
    },
    lolStatus_v3: {
        getLolStatus: '/lol/status/v3/shard-data',
    },
    match_v4: {
        getMatchById: '/lol/match/v4/matches/',
        getMatchlistByAccountId: '/lol/match/v4/matchlists/by-account/', //look for params
        getMatchTimelineByMatchId : '/lol/match/v4/timelines/by-match/',
        getMatchIdByTournamentCode : '/lol/match/v4/matches/by-tournament-code/', ///lol/match/v4/matches/by-tournament-code/{tournamentCode}/ids
        getMatchByIdTournamentCode :'/lol/match/v4/matches/' ///lol/match/v4/matches/{matchId}/by-tournament-code/{tournamentCode}
    },
    spectator_v4: {
        getCurrentGameInfoBySummonerId: '/lol/spectator/v4/active-games/by-summoner/',
        getListFeaturedGames : '/lol/spectator/v4/featured-games',
    },
    summoner_v4:{
        getSummonerByAccountId: '/lol/summoner/v4/summoners/by-account/',
        getSummonerBySummonerName: '/lol/summoner/v4/summoners/by-name/',
        getSummonerByPuuid: '/lol/summoner/v4/summoners/by-puuid/',
        getSummonerBySummonerId: '/lol/summoner/v4/summoners/by'
    },
    tftLeague_v1:{
        getChallengerLeague: '/tft/league/v1/challenger',
        getEntriesBySummonerId: '/tft/league/v1/entries/by-summoner/',
        getAllLeagueEntries: '/tft/league/v1/entries/', ///tft/league/v1/entries/{tier}/{division}
        getGrandMasterLeague: '/tft/league/v1/grandmaster',
        getLeagueById: '/tft/league/v1/leagues/',
        getMasterLeague: '/tft/league/v1/master'
    },
    tftMatch_v1: {
        getListOfMatchIdByPuuid: '/tft/match/v1/matches/by-puuid/', ///tft/match/v1/matches/by-puuid/{puuid}/ids
        getMatchById: '/tft/match/v1/matches/',
    },
    tftSummoners_v1: {
        getSumonnerByAccountId: '/tft/summoner/v1/summoners/by-account/',
        getSummonerByName: '/tft/summoner/v1/summoners/by-name/',
        getSummonerByPuuid: '/tft/summoner/v1/summoners/by-puuid/',
        getSummonerById: '/tft/summoner/v1/summoners/'
    },
    lorMatch_v1:{
        getListOfMatchIdByPuuid: '/lor/match/v1/matches/by-puuid/', ///lor/match/v1/matches/by-puuid/{puuid}/ids
        getMatchById: '/lor/match/v1/matches/',
    },
    lorRanked_v1:{
        getMasterPlayers: '/lor/ranked/v1/leaderboards'
    },
    valContent_v1: {
        getContent: '/val/content/v1/contents' //can filther by locale
    },
    valMatch_v1:{
        getMatchById: '/val/match/v1/matches/',
        getMatchlistByPuuid: '/val/match/v1/matchlists/by-puuid/', 
        getRecentMatchesByQueue: '/val/match/v1/recent-matches/by-queue/'
    },
    thirdPartyCode_v4: '/lol/platform/v4/third-party-code/by-summoner/',
    tournamentStub_v4:{
        createTournamentCode: '/lol/tournament-stub/v4/codes', //post
        getLobbyListByTournamentCode: ' /lol/tournament-stub/v4/lobby-events/by-code/', //get
        createTournamentProvider: '/lol/tournament-stub/v4/providers', //post
        createTournament: '/lol/tournament-stub/v4/tournaments' //post
    },
    tournament_v4: {
        createTournamentCode: '/lol/tournament/v4/codes', //post
        getLobbyListByTournamentCode: ' /lol/tournament/v4/lobby-events/by-code/', //get
        createTournamentProvider: '/lol/tournament/v4/providers', //post
        createTournament: '/lol/tournament/v4/tournaments', //post
        getTournamentCodeDTOByCode: '/lol/tournament/v4/codes/', //get
        updateTournamentConfigByCode: '/lol/tournament/v4/codes/', //put
    }
}