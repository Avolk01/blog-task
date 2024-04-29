import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTagsTable1714400976074 implements MigrationInterface {
    name = 'CreateTagsTable1714400976074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "blog_task"."tag" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "name" character varying NOT NULL, 
            CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog_task"."tag"`);
    }

}
