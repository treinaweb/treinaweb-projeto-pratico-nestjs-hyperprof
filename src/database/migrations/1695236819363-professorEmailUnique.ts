import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProfessorEmailUnique1695236819363 implements MigrationInterface {
  name = 'ProfessorEmailUnique1695236819363';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`professor\` ADD UNIQUE INDEX \`IDX_492e744e6333071da912c7d651\` (\`email\`)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`professor\` DROP INDEX \`IDX_492e744e6333071da912c7d651\``,
    );
  }
}
