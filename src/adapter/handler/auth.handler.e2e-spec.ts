import { HttpStatus, INestApplication } from '@nestjs/common';
import { MainModule } from 'di/module';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository';
import { User } from 'infrastructure/persistence/local/typeorm/entity';
import { AuthenticatorInterface } from 'sharedkernel/authenticator';
import { TotpOptions } from 'speakeasy';
import * as faker from 'faker';

describe('AuthHandler', () => {
  let user = new User();
  user.email = 'auth@handler.com';
  user.password = faker.internet.password();

  let app: INestApplication;
  let jwtToken: string;
  let userRepository: UserLocalRepository;
  let authenticatorService: AuthenticatorInterface;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [MainModule],
    }).compile();

    userRepository = moduleRef.get(UserLocalRepository);
    authenticatorService = moduleRef.get('AuthenticatorInterface');

    app = moduleRef.createNestApplication();
    await app.init();
    await userRepository.delete({ email: user.email });
  });

  describe('/POST /auth/signup', () => {
    it('201 CREATED', async function () {
      return request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          email: user.email,
          password: user.password,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(HttpStatus.CREATED);
    });

    it('409 CONFLICT', async function () {
      return request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          email: user.email,
          password: user.password,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(HttpStatus.CONFLICT);
    });
  });

  describe('/POST /auth/signin', () => {
    it('201 CREATED', async function () {
      return request(app.getHttpServer())
        .post('/auth/signin')
        .send({
          email: user.email,
          password: user.password,
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(HttpStatus.CREATED)
        .then((response) => {
          const { body } = response;
          expect(body).toHaveProperty('token');
          expect(typeof body.token).toBe('string');
          jwtToken = body.token;
        });
    });

    it('404 NOT FOUND', async function () {
      return request(app.getHttpServer())
        .post('/auth/signin')
        .send({
          email: 'user@email1.com',
          password: 'P@ssword',
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(HttpStatus.NOT_FOUND);
    });
  });

  describe('/POST /auth/authenticator', () => {
    it('201 CREATED', async function () {
      return request(app.getHttpServer())
        .post('/auth/authenticator')
        .set('Authorization', `Bearer ${jwtToken}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(HttpStatus.CREATED);
    });

    it('401 UNAUTHORIZED', async function () {
      return request(app.getHttpServer())
        .post('/auth/authenticator')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(HttpStatus.UNAUTHORIZED);
    });
  });

  describe('/POST /auth/authenticate', () => {
    it('201 CREATED', async function () {
      // sanitize user data
      delete user.created_at;
      delete user.updated_at;
      delete user.deleted_at;
      delete user.password;
      user = await userRepository.getOneUser(user);

      // preparing totp payload
      const totpOptions: TotpOptions = {
        secret: user.authenticator_secret,
        encoding: 'base32',
      };

      // generating current totp token / authenticator code
      const authenticator_code =
        authenticatorService.generateTotpToken(totpOptions);

      // validate if generated totp token is valid
      expect(authenticator_code.length).toBe(6);

      return request(app.getHttpServer())
        .post('/auth/authenticate')
        .send({ authenticator_code })
        .set('Authorization', `Bearer ${jwtToken}`)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(HttpStatus.CREATED);
    });

    it('401 UNAUTHORIZED', async function () {
      return request(app.getHttpServer())
        .post('/auth/authenticate')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(HttpStatus.UNAUTHORIZED);
    });
  });

  afterAll(async () => {
    const result = await userRepository.delete({ email: user.email });
    expect(result.affected > 0).toBe(true);
    await app.close();
  });
});
