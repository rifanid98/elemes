import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import {
  Role,
  User,
} from 'src/infrastructure/persistence/local/typeorm/entity';
import { users } from 'src/infrastructure/persistence/local/typeorm/seeder/data';

export class user1637915196029 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const roleAdmin = await getRepository(Role).findOne({
      name: 'Admin',
    });
    const roleStaff = await getRepository(Role).findOne({
      name: 'Staff',
    });

    const roles: Record<string, any>[] = [
      {
        name: 'Admin',
        instance: roleAdmin,
      },
      {
        name: 'Staff',
        instance: roleStaff,
      },
    ];

    const tempUsers: User[] = users.map((user) => {
      const roleInstance = roles.find((role) => role.name === user.name);
      user.role = roleInstance as Role;
      return user;
    });

    await getRepository(User).save(tempUsers);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return Promise.resolve();
  }
}
