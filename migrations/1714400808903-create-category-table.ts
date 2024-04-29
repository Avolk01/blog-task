import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoryTable1714400808903 implements MigrationInterface {
    name = 'CreateCategoryTable1714400808903'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "blog_task"."category" (
            "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
            "name" CHARACTER varying NOT NULL,
            CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "blog_task"."category"`);
    }

}
