import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class tableArticle1633025903334 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'articles',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'user_id',
            type: 'int'
          },
          {
            name: 'category_id',
            type: 'int'
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'image_url',
            type: 'varchar',
          },
          {
            name: 'content',
            type: 'varchar'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      }))

      await queryRunner.createForeignKey("articles", new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      }));

      await queryRunner.createForeignKey("articles", new TableForeignKey({
        columnNames: ["category_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('articles', 'user_id');
      await queryRunner.dropForeignKey('articles', 'category_id');
      await queryRunner.dropTable('articles');
    }

}
