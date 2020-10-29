import React, {useState} from 'react';
import './styles/HomeViewStyle.css'
import Account from '../components/UserComponent';
import PlayerInterface from '../templates/PlayerInterface'

export default function Home(){
    const main: boolean = true;
    const player:PlayerInterface = {
        id: 'asduahsdusad',
        accountId: 'sadijasdijasd',
        puuid: 'asdasdosadasdo',
        name: '2man1darkin',
        profileIconId: 35,
        revisionDate: 12312938418,
        summonerLevel: 654,
        locale: 'BR',
        elo: [{
            leagueId: 'string',
            queueType: 'soloq',
            tier: 'III',
            rank: 'Diamond',
            summonerId: 'string',
            summonerName: 'string',
            leaguePoints: 99,
            wins: 99,
            losses: 99,
            veteran: false,
            inactive: false,
            freshBlood: false,
            hotStreak: false,
        },
        {
            leagueId: 'string',
            queueType: 'flexq',
            tier: 'III',
            rank: 'Platinum',
            summonerId: 'string',
            summonerName: 'string',
            leaguePoints: 99,
            wins: 99,
            losses: 99,
            veteran: false,
            inactive: false,
            freshBlood: false,
            hotStreak: false,
        },
        {
            leagueId: 'string',
            queueType: 'string',
            tier: 'III',
            rank: 'Bronze',
            summonerId: 'string',
            summonerName: 'string',
            leaguePoints: 99,
            wins: 99,
            losses: 99,
            veteran: false,
            inactive: false,
            freshBlood: false,
            hotStreak: false,
        }
    ]
    };

    const smurfs:boolean = true;
    const smurf: Array<PlayerInterface> = [
        {
            id: 'asduahsdusad',
            accountId: 'sadijasdijasd',
            puuid: 'asdasdosadasdo',
            name: 'twoAAindarkin',
            profileIconId: 35,
            revisionDate: 12312938418,
            summonerLevel: 123,
            locale: 'BR',
        },
        {
            id: 'asduahsdusad',
            accountId: 'sadijasdijasd',
            puuid: 'asdasdosadasdo',
            name: 'bladeXassassin',
            profileIconId: 35,
            revisionDate: 12312938418,
            summonerLevel: 432,
            locale: 'BR',
        }
    ]

    const [show, setShow] = useState(false)

    const SmurfsComponent = () => {
        if(show){
            return(
            <>
                <div className='accounts-wrapper'>
                    {
                    smurf.map(
                        el => {
                            return(
                                <Account role='main' player={el}></Account>
                            )
                        }
                    ) 
                }
                </div>
                <button onClick={() => setShow(false)}>Hide Smurfs</button>
            </>
        )
        }else {
            return (
                <>
                    {
                    smurfs ?
                    (<button onClick={() => setShow(true)}>Show Smurfs</button>):(<p>Cadastrar Smurfs</p>)
                    }
                </>
                )
        }
    }

    return (
        <div className='home-container'>
            <div className='container-wrapper'>
                <div className='accounts-wrapper'>
                    {   main ? (
                                <Account role='main' player={player}></Account>
                            )
                        : (
                            <a href="#">Link para cadastrar a main</a>
                        )
                        
                    }
                </div>
                <SmurfsComponent />
            </div>
            <div className="content-wrapper">
                
            </div>
        </div>
    )
}