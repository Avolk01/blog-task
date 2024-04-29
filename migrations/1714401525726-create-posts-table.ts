import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePostsTable1714401525726 implements MigrationInterface {
    name = 'CreatePostsTable1714401525726'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE TABLE "blog_task"."post" (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "title" character varying NOT NULL, 
            "content" character varying NOT NULL, 
            "authorId" uuid, 
            CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);

        await queryRunner.query(`
        CREATE TABLE "blog_task"."post_tags_tag" (
            "postId" uuid NOT NULL, 
            "tagId" uuid NOT NULL, 
            CONSTRAINT "PK_e9b7b8e6a07bdccb6a954171676" PRIMARY KEY ("postId", "tagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b651178cc41334544a7a9601c4" ON "blog_task"."post_tags_tag" ("postId") `);
        await queryRunner.query(`CREATE INDEX "IDX_41e7626b9cc03c5c65812ae55e" ON "blog_task"."post_tags_tag" ("tagId") `);

        await queryRunner.query(`
        CREATE TABLE "blog_task"."post_categories_category" (
            "postId" uuid NOT NULL, 
            "categoryId" uuid NOT NULL, 
            CONSTRAINT "PK_91306c0021c4901c1825ef097ce" PRIMARY KEY ("postId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_93b566d522b73cb8bc46f7405b" ON "blog_task"."post_categories_category" ("postId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a5e63f80ca58e7296d5864bd2d" ON "blog_task"."post_categories_category" ("categoryId") `);

        await queryRunner.query(`ALTER TABLE "blog_task"."post" ADD CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0" FOREIGN KEY ("authorId") REFERENCES "blog_task"."author"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "blog_task"."post_tags_tag" ADD CONSTRAINT "FK_b651178cc41334544a7a9601c45" FOREIGN KEY ("postId") REFERENCES "blog_task"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "blog_task"."post_tags_tag" ADD CONSTRAINT "FK_41e7626b9cc03c5c65812ae55e8" FOREIGN KEY ("tagId") REFERENCES "blog_task"."tag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "blog_task"."post_categories_category" ADD CONSTRAINT "FK_93b566d522b73cb8bc46f7405bd" FOREIGN KEY ("postId") REFERENCES "blog_task"."post"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "blog_task"."post_categories_category" ADD CONSTRAINT "FK_a5e63f80ca58e7296d5864bd2d3" FOREIGN KEY ("categoryId") REFERENCES "blog_task"."category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "blog_task"."post_categories_category" DROP CONSTRAINT "FK_a5e63f80ca58e7296d5864bd2d3"`);
        await queryRunner.query(`ALTER TABLE "blog_task"."post_categories_category" DROP CONSTRAINT "FK_93b566d522b73cb8bc46f7405bd"`);
        await queryRunner.query(`ALTER TABLE "blog_task"."post_tags_tag" DROP CONSTRAINT "FK_41e7626b9cc03c5c65812ae55e8"`);
        await queryRunner.query(`ALTER TABLE "blog_task"."post_tags_tag" DROP CONSTRAINT "FK_b651178cc41334544a7a9601c45"`);
        await queryRunner.query(`ALTER TABLE "blog_task"."post" DROP CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0"`);
        await queryRunner.query(`DROP INDEX "blog_task"."IDX_a5e63f80ca58e7296d5864bd2d"`);
        await queryRunner.query(`DROP INDEX "blog_task"."IDX_93b566d522b73cb8bc46f7405b"`);
        await queryRunner.query(`DROP TABLE "blog_task"."post_categories_category"`);
        await queryRunner.query(`DROP INDEX "blog_task"."IDX_41e7626b9cc03c5c65812ae55e"`);
        await queryRunner.query(`DROP INDEX "blog_task"."IDX_b651178cc41334544a7a9601c4"`);
        await queryRunner.query(`DROP TABLE "blog_task"."post_tags_tag"`);
        await queryRunner.query(`DROP TABLE "blog_task"."post"`);
    }

}
