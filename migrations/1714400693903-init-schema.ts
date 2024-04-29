import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1714400693903 implements MigrationInterface {
    name = 'InitSchema1714400693903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SCHEMA blog_task`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> { }

}
