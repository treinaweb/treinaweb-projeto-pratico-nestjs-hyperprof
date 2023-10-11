import { MigrationInterface, QueryRunner } from 'typeorm';

export class CascadeProfessor1697063090889 implements MigrationInterface {
  name = 'CascadeProfessor1697063090889';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`aluno\` DROP FOREIGN KEY \`FK_65d07eaee14ea20ab04791cb555\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`aluno\` ADD CONSTRAINT \`FK_65d07eaee14ea20ab04791cb555\` FOREIGN KEY (\`professor_id\`) REFERENCES \`professor\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`aluno\` DROP FOREIGN KEY \`FK_65d07eaee14ea20ab04791cb555\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`aluno\` ADD CONSTRAINT \`FK_65d07eaee14ea20ab04791cb555\` FOREIGN KEY (\`professor_id\`) REFERENCES \`professor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
