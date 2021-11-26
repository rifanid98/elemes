import { User as UserEntity } from 'domain/entity/user.entity';
import { AuthRepository } from 'domain/repository/auth.repository';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
export declare class AuthLocalRepository extends Repository<User> implements AuthRepository {
    signup(user: UserEntity): Promise<UserEntity>;
    signin(user: UserEntity): Promise<UserEntity>;
}
