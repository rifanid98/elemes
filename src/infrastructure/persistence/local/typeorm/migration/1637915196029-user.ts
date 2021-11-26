import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import {
  Role,
  User,
} from 'src/infrastructure/persistence/local/typeorm/entity';
import { users } from 'src/infrastructure/persistence/local/typeorm/seeder/data';

export class user1637915196029 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const role = await getRepository(Role).findOne({
      name: 'Admin',
    });
    const tempUsers: User[] = users.map((user) => {
      user.role = role;
      return user;
    });
    await getRepository(User).save(tempUsers);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return Promise.resolve();
  }
}
