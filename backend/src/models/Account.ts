import { Entity, Column, PrimaryGeneratedColumn,  JoinColumn,  ManyToOne } from 'typeorm';
import User from './User';

@Entity('accounts')
export default class Account {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    riot_id: string;
    @Column()
    name: string;
    @Column()
    locale: string;
    @Column()
    puuid: string;
    @Column()
    accountId: string;
    @Column()
    is_main: boolean;
    

    
    @ManyToOne(() => User, user => user.accounts)
    @JoinColumn({ name: 'user_id'})
    user: User;
}