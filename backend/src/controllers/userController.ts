import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';
import * as Yup from 'yup';
import PasswordPolicy  from '../utils/PasswordPolicy';

export default {

    async login(request : Request, response : Response){
        const  {
            login,
            password
        } = request.body;

        
        const usersRepository = getRepository(User);

        
        const user = await usersRepository.find({login});
        if(user.length > 0){
            const loggedUser = user[0]
            if(PasswordPolicy.checkPasword(password, loggedUser.password)) {
                loggedUser.last_login = new Date().toISOString();
                usersRepository.update(loggedUser.id, {last_login: new Date().toISOString()});
                return response.json({data:loggedUser, status:200});
            }
            else return response.json({data:'Login or Password incorrect', status:404});
        }else  return response.json({data:'Login or Password incorrect', status:404});
        

        
    },

    async loginWithSession(request : Request, response : Response, next : NextFunction ){ //midleware
        if(request.body.session_token){
            const  {
                session_token
            } = request.body;
            const usersRepository = getRepository(User);
    
            
            const user = await usersRepository.find({session_token});
            if(user.length > 0){
                const loggedUser = user[0]
                loggedUser.last_login = new Date().toISOString();
                usersRepository.update(loggedUser.id, {last_login: new Date().toISOString()});
                return response.json({data:loggedUser, status:200});
            } 
            else next();
        }
        else next();
    },

    async singUp(request : Request, response : Response){

        const  {
            login,
            password,
            wize_bot_api_key
        } = request.body;

        let validated = PasswordPolicy.validatePassword(password);

        if(validated.status_code != 200) return response.json(validated);

        const usersRepository = getRepository(User);

        const data = {
            login, 
            password, 
            wize_bot_api_key
        }

        const schema = Yup.object().shape({
            login: Yup.string().required(),
            password: Yup.string().required(),
            wize_bot_api_key: Yup.string().required(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        data['ip_mask'] = request.ip;

        data['api_key'] = PasswordPolicy.getSalt(120);

        data['session_token'] = PasswordPolicy.getSalt(120);

        data['refresh_token'] = PasswordPolicy.getSalt(120);

        data.password = PasswordPolicy.generateHashedPassword(data.password);

        const user = usersRepository.create(data);

        await usersRepository.save(user);
        
        return response.json({data:{data}, status:201});
    },

    emailHandler(request : Request, response : Response){
        console.log(request.body.login);

        return response.json({data:request.body.email, status:200});
    },
}