import React, {useState} from 'react';
import './styles/HomeViewStyle.css'
import Account from '../components/UserComponent';
import PlayerInterface from '../templates/PlayerInterface'
import AccountOptions from '../components/AccountOptions';
import NavbarComponent from '../components/NavbarComponent';

interface FollowInterface {
    id: string,
    status: string,
}

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
            id: 'asduahsdusad1',
            accountId: 'sadijasdijasd',
            puuid: 'asdasdosadasdo',
            name: 'twoAAindarkin',
            profileIconId: 35,
            revisionDate: 12312938418,
            summonerLevel: 123,
            locale: 'BR',
        },
        {
            id: 'asduahsdusad2',
            accountId: 'sadijasdijasd',
            puuid: 'asdasdosadasdo',
            name: 'bladeXassassin',
            profileIconId: 35,
            revisionDate: 12312938418,
            summonerLevel: 432,
            locale: 'BR',
        }
    ]

    const [following, setFollowing] = useState<FollowInterface>({id: '0', status: 'queue'})

    const handleFollowClick = (id: string) => {
        setFollowing({
            id: id,
            status: 'queue',
        });
    }
    const handleCancelClick = () => {
        setFollowing({
            id: '0',
            status: 'queue'
        });
    }


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
                                
                                <div className={`user-container smurf`} key={el.id}>
                                <div className='column player-content'>
                                    <Account player={el}></Account>
                                </div>
                                <div className="column flex-column">
                                    <AccountOptions 
                                            accountStatus={following?.id == el.id ? following.status : 'Not Following'}
                                            setFollowing={handleFollowClick} 
                                            cancelFollowing={handleCancelClick}
                                            player={el} 
                                            role='smurf' />
                                </div>
                            </div>
                            )
                        }
                    ) 
                }
                </div>
                <button className='smurfBtn' onClick={() => setShow(false)}>Hide Smurfs</button>
            </>
        )
        }else {
            return (
                <>
                    {
                    smurfs ?
                    (<button className='smurfBtn' onClick={() => setShow(true)}>Show Smurfs</button>):(<p>Cadastrar Smurfs</p>)
                    }
                </>
                )
        }
    }

    return (
        <div className='home-container'>
            <NavbarComponent />
            <div className='container-wrapper'>
                <div className='accounts-wrapper'>
                    {   main ? (
                                
                                    <div className={`user-container main`}>
                                        <div className='column player-content'>
                                            <Account player={player}></Account>
                                        </div>
                                        <div className="column flex-column">
                                            <AccountOptions 
                                            accountStatus={following?.id == player.id ? following.status : 'Not Following'}
                                            setFollowing={handleFollowClick} 
                                            cancelFollowing={handleCancelClick}
                                            player={player} 
                                            role='main' />
                                        </div>
                                    </div>
                                
                            )
                        : (
                            <a href="#">Link para cadastrar a main</a>
                        )
                        
                    }
                </div>
                <SmurfsComponent />
            </div>
           
        </div>
    )
}

/**
 * TODO:
 * dentro ->
 * main: shadow-box green
 * smurfs: shadow-box roxo =p
 */