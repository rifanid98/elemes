import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPresenterInterface } from 'adapter/presenter/user.presenter';
import { UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/user.repository';
import { UserUsecase } from './user.usecase';
import { User as UserEntity } from 'domain/entity/user.entity';
import { UserDto, UserFilterDto } from 'domain/dto/user.dto';
import { SecurityInterface } from 'src/sharedkernel/security';
import { Date as DateService } from 'sharedkernel/date';
import {
  Role,
  User,
} from 'src/infrastructure/persistence/local/typeorm/entity';

@Injectable()
export class UserInteractor implements UserUsecase {
  constructor(
    @Inject('UserPresenterInterface')
    private presenter: UserPresenterInterface,
    @InjectRepository(UserLocalRepository)
    private userRepository: UserLocalRepository,
    @Inject('SecurityInterface')
    private securityService: SecurityInterface,
    @Inject('DateService')
    private dateService: DateService,
  ) {}

  async createUser(userDto: UserDto): Promise<UserEntity> {
    if (userDto.hasOwnProperty('password')) {
      userDto.password = await this.securityService.hash(userDto.password);
    }

    if (userDto.hasOwnProperty('birth_date')) {
      userDto.birth_date = this.dateService.localToSqlDate(userDto.birth_date);
    }

    const role = new Role();
    role.id = 1;
    role.name = 'Staff';

    const user = new User();
    user.role = role;

    Object.keys(userDto).forEach((key) => {
      if (!key.includes('_id')) {
        user[key] = userDto[key];
      }
    });

    return this.userRepository.createUser(user);
  }

  getAllUsers(userDto?: UserFilterDto): Promise<UserEntity[]> {
    return this.userRepository.getAllUsers();
  }

  async getUserById(userDto: UserDto): Promise<UserEntity> {
    const result = await this.userRepository.getUserById(userDto);
    if (!result) {
      throw new NotFoundException('UserEntity does not exists');
    }
    return result;
  }

  async updateUser(userDto: UserDto): Promise<boolean> {
    if (userDto.hasOwnProperty('password')) {
      userDto.password = await this.securityService.hash(userDto.password);
    }

    if (userDto.hasOwnProperty('birth_date')) {
      userDto.birth_date = this.dateService.localToSqlDate(userDto.birth_date);
    }

    const role = new Role();
    role.id = 1;
    role.name = 'Staff';

    const user = new User();
    user.role = role;

    Object.keys(userDto).forEach((key) => {
      if (!key.includes('_id')) {
        user[key] = userDto[key];
      }
    });

    return this.userRepository.updateUser(user);
  }

  async deleteUser(userDto: UserDto): Promise<boolean> {
    const result = await this.userRepository.deleteUser(userDto);
    if (!result) {
      throw new NotFoundException('UserEntity does not exists');
    }
    return result;
  }
}
