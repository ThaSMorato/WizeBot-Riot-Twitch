import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration1605835175070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns : [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'login',
                    type: 'varchar'
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'wize_bot_api_key',
                    type: 'varchar'
                },
                {
                    name: 'api_key',
                    type: 'varchar',
                    default:null
                },
                {
                    name: 'session_token',
                    type: 'varchar',
                    default: null
                },
                {
                    name: 'refresh_token',
                    type: 'varchar',
                    default: null
                },
                {
                    name: 'last_login',
                    type: 'timestamp'
                },
                {
                    name: 'ip_mask',
                    type: 'varchar'
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}