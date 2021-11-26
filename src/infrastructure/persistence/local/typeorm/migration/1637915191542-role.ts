import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { Role } from 'src/infrastructure/persistence/local/typeorm/entity';
import { roles } from 'src/infrastructure/persistence/local/typeorm/seeder/data';

export class role1637915191542 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository(Role).save(roles);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return Promise.resolve();
  }
}
