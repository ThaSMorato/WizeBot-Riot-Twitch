import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, UpdateDateColumn } from 'typeorm';
import Account from './Account';

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    login: string;
    @Column()
    password: string;
    @Column()
    wize_bot_api_key: string;
    @Column({ nullable: true })
    api_key: string;
    @Column({ nullable: true })
    session_token: string;
    @Column({ nullable: true })
    refresh_token: string;
    @UpdateDateColumn()
    last_login: string;
    @Column()
    ip_mask: string;
    
    @OneToMany(() => Account, account => account.user, {
        cascade: ['insert', 'update']
    })

    @JoinColumn( {name: 'user_id'})
    accounts: Account[];
}