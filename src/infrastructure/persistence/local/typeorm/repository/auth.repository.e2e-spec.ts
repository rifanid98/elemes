import { Test } from '@nestjs/testing';
import { AuthLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/auth.repository';
import { UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'infrastructure/persistence/local/typeorm/entity';
import { INestApplication } from '@nestjs/common';
import * as faker from 'faker';
import { ConfigModuleConfig, TypeOrmConfig } from 'di/config';

describe('AuthInteractor', () => {
  let authRepository: AuthLocalRepository;
  let userRepository: UserLocalRepository;

  // user data from request body sent by client
  const user = new User();
  user.email = 'auth@repository.com';
  user.password = faker.internet.password();
  user.authenticator_secret = faker.random.alphaNumeric();

  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(ConfigModuleConfig),
        TypeOrmModule.forRootAsync(TypeOrmConfig),
        TypeOrmModule.forFeature([AuthLocalRepository, UserLocalRepository]),
      ],
      providers: [AuthLocalRepository, UserLocalRepository],
    }).compile();

    authRepository = await module.get(AuthLocalRepository);
    userRepository = await module.get(UserLocalRepository);

    app = module.createNestApplication();
    await app.init();
  });

  describe('AuthLocalRepository', () => {
    it('should save user data and returns user entity', async () => {
      const result = await authRepository.signup(user);
      expect(result instanceof User).toBe(true);
    });

    it('should returns user entity', async () => {
      const result = await authRepository.signin(user);
      expect(result instanceof User).toBe(true);
    });
  });

  afterAll(async () => {
    const result = await userRepository.delete({ email: user.email });
    expect(result.affected > 0).toBe(true);
    app.close();
  });
});
