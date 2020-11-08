import PlayerInterface from './PlayerInterface';

interface UserInterface{
    id: number;
    email: string;
    password: string;
    wize_bot_api_key: string;
    main?: PlayerInterface;
    smurfs?: Array<PlayerInterface>;
    api_key?: string;
    riot_api_key?: string;
}

export default UserInterface;