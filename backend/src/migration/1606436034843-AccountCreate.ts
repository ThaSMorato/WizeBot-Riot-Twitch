import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AccountCreate1606436034843 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.createTable(new Table({
            name: 'accounts',
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
                    name: 'riot_id',
                    type: 'varchar'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'locale',
                    type: 'varchar'
                },
                {
                    name: 'puuid',
                    type: 'varchar'
                },
                {
                    name: 'accountId',
                    type: 'varchar'
                },
                {
                    name: 'user_id',
                    type: 'integer'
                },
                {
                    name: 'is_main',
                    type: 'boolean',
                    default: false
                }
            ],
            foreignKeys: [
                {
                    name: 'AccountUser',
                    columnNames: ['user_id'],
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('accounts');
    }

}
