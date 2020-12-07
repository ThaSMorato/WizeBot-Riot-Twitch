import RiotController from './riotApiController';
import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import Account from '../models/Account';
import * as Yup from 'yup';
import { summonerInterface } from '../interfaces/AccountInterfaces';


export default {
    login(request : Request, response : Response){
        let ret = {
            user: {},
            api_token : `123123123`,
            session_token: 'asdasdas',
            refresh_token: 'asdasdadasdad'
        }
        console.log(request.ip);
        
        return response.json({data:ret, status:200});
    },

    async registerMainAccount(request : Request, response : Response){
        const  {
            accountNick,
            locale
        } = request.body;

        RiotController.getSummonerByName(accountNick, locale).then((summoner) => {
            console.log(summoner.data);
            let data = summoner.data
            return response.json({data});
        }).catch(error => { 
            console.log(error)
            return response.json({error});
        })

    },

    registerAccount(account: summonerInterface, locale: string, isMain: boolean) : any {
       
    }
}