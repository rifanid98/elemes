import { User } from 'domain/entity/user.entity';

export interface UserRepository {
  getAllUsers(): Promise<User[]>;

  getOneUser(user: User): Promise<User>;

  getUserById(user: User): Promise<User>;

  createUser(user: User): Promise<User>;

  updateUser(user: User): Promise<boolean>;

  deleteUser(user: User): Promise<boolean>;

  countUsers(): Promise<number>;
}
