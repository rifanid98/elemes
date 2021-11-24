import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { User } from 'src/infrastructure/persistence/local/typeorm/entity';
import { users } from 'src/infrastructure/persistence/local/typeorm/seeder/data';

export class user1637658276739 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository(User).save(users);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
