import axios from 'axios';
require('dotenv/config');

const headers = {
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": process.env.APP_ORIGIN,
    "X-Riot-Token": process.env.APP_RIOT_API_TOKEN
}
const baseUrl = '.api.riotgames.com';

export const riotApi = axios.create({
    headers: headers,
});

export const localesUrl = {
    "BR1" : `https://br1${baseUrl}`,
    "EUN1": `https://eun1${baseUrl}`,
    "EUW1" : `https://euw1${baseUrl}`,
    "JP1" : `https://jp1${baseUrl}`,
    "KR" : `https://kr${baseUrl}`,
    "LA1" : `https://la1${baseUrl}`,
    "LA2" : `https://la1${baseUrl}`,
    "NA1" : `https://na1${baseUrl}`,
    "OC1" : `https://oc1${baseUrl}`,
    "RU" : `https://ru${baseUrl}`,
    "TR1" : `https://tr1${baseUrl}`
}