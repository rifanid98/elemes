import { Test } from '@nestjs/testing';
import { UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'infrastructure/persistence/local/typeorm/entity';
import { INestApplication } from '@nestjs/common';
import * as faker from 'faker';
import { ConfigModuleConfig, TypeOrmConfig } from 'di/config';

describe('AuthInteractor', () => {
  let userRepository: UserLocalRepository;

  // user data from request body sent by client
  const user = new User();
  user.email = 'user@repository.com';
  user.password = faker.internet.password();
  user.authenticator_secret = faker.random.alphaNumeric();

  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(ConfigModuleConfig),
        TypeOrmModule.forRootAsync(TypeOrmConfig),
        TypeOrmModule.forFeature([UserLocalRepository]),
      ],
      providers: [UserLocalRepository],
    }).compile();

    userRepository = await module.get(UserLocalRepository);

    app = module.createNestApplication();
    app.init();
  });

  describe('AuthLocalRepository', () => {
    it('should save user data and returns user entity', async () => {
      const result = await userRepository.createUser(user);
      expect(result instanceof User).toBe(true);
    });

    it('should returns all of users in database', async () => {
      const result = await userRepository.getAllUsers();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThanOrEqual(1);
    });

    it('should returns one user from database', async () => {
      // cleaning user data
      delete user.created_at;
      delete user.updated_at;
      delete user.deleted_at;

      const result = await userRepository.getOneUser(user);
      expect(result instanceof User).toBe(true);
      user.id = result.id;
    });

    it('should returns one user by id from database', async () => {
      const result = await userRepository.getUserById(user.id);
      expect(result instanceof User).toBe(true);
    });

    it('should deletes one user from database', async () => {
      const result = await userRepository.deleteUser(user);
      expect(result).toBe(true);
    });
  });

  afterAll(async () => {
    const result = await userRepository.delete({ email: user.email });
    expect(result.affected > 0).toBe(true);
    await app.close();
  });
});
