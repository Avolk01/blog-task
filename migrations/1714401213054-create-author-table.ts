import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAuthorTable1714401213054 implements MigrationInterface {
    name = 'CreateAuthorTable1714401213054'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "blog_task"."author" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "first_name" character varying NOT NULL, 
            "last_name" character varying, 
            "nickname" character varying NOT NULL, 
            CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog_task"."author"`);
    }

}
