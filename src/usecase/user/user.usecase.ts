import { User } from 'domain/entity/user.entity';
import { UserDto, UserFilterDto } from 'domain/dto/user.dto';

export interface UserUsecase {
  getAllUsers(userDto?: UserFilterDto): Promise<User[]>;

  getUserById(userDto: UserDto): Promise<User>;

  createUser(userDto: UserDto): Promise<User>;

  updateUser(userDto: UserDto): Promise<boolean>;

  deleteUser(userDto: UserDto): Promise<boolean>;
}
