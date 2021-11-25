import { UserRepository } from 'domain/repository/user.repository';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@EntityRepository(User)
export class UserLocalRepository
  extends Repository<User>
  implements UserRepository
{
  createUser(user: User): Promise<User> {
    return this.save(user);
  }

  getAllUsers(): Promise<User[]> {
    return this.find();
  }

  async getOneUser(user: User): Promise<User> {
    return this.findOne(user, {
      relations: ['role'],
    });
  }

  getUserById(user: User): Promise<User> {
    return this.findOne(user.id);
  }

  async updateUser(user: User): Promise<boolean> {
    const result = await this.update(user.id, user);
    return result.affected > 0;
  }

  async deleteUser(user: User): Promise<boolean> {
    const result = await this.softDelete(user.id);
    return result.affected > 0;
  }

  countUsers(): Promise<number> {
    return this.count();
  }
}
