import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class tableTagsArticle1633029386373 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'tags_article',
        columns: [
          {
            name: 'articlesId',
            type: 'int',
          },
          {
            name: 'tagsId',
            type: 'int'
          }
        ]
      }))

      await queryRunner.createForeignKey("tags_article", new TableForeignKey({
        columnNames: ["articlesId"],
        referencedColumnNames: ["id"],
        referencedTableName: "articles",
    }));

    await queryRunner.createForeignKey("tags_article", new TableForeignKey({
      columnNames: ["tagsId"],
      referencedColumnNames: ["id"],
      referencedTableName: "tags",
    }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('tags_article', 'articlesId');
      await queryRunner.dropForeignKey('tags_article', 'tagsId');
      await queryRunner.dropTable('tags_article');

    }

}
