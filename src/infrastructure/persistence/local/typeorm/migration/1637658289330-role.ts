import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Role } from 'infrastructure/persistence/local/typeorm/entity';
import { roles } from 'infrastructure/persistence/local/typeorm/seeder/data';

export class role1637658289330 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository(Role).save(roles);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
