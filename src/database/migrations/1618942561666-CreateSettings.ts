import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1618942561666 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "settings",
        columns: [
          {
            name: "id",
            //Id único e universal
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "username",
            type: "varchar",
          },
          {
            name: "chat",
            type: "boolean",
            default: true,
          },
          {
            /*
              Se alterarmos algum dado da tabela(settings),
              ele altera com o valor atual ->"now()"
              */
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
          {
            /*
              Se criarmos algum dado da tabela(settings),
              ele altera com o valor atual ->"now()"
              */
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("settings");
  }
}

/*
Para rodar nossa migration:
    yarn typeorm migration:run

Para parar nossa migration:
    yarn typeorm migration:revert
*/
