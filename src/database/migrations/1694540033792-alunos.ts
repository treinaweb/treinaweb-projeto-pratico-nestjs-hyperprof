import { MigrationInterface, QueryRunner } from 'typeorm';

export class Alunos1694540033792 implements MigrationInterface {
  name = 'Alunos1694540033792';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`aluno\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(100) NOT NULL, \`email\` varchar(255) NOT NULL, \`data_aula\` datetime NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`professor_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`aluno\` ADD CONSTRAINT \`FK_65d07eaee14ea20ab04791cb555\` FOREIGN KEY (\`professor_id\`) REFERENCES \`professor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`aluno\` DROP FOREIGN KEY \`FK_65d07eaee14ea20ab04791cb555\``,
    );
    await queryRunner.query(`DROP TABLE \`aluno\``);
  }
}
