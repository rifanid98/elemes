import { Test } from '@nestjs/testing';
import { AuthLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/auth.repository';
import { AuthUseCase } from 'usecase/auth/auth.usecase';
import { AuthInteractor } from 'usecase/auth/auth.interactor';
import { UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { User } from 'domain/entity/user.entity';
import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthAuthenticateDto, AuthSignInDto } from 'domain/dto/auth.dto';
import { NotModifiedException } from 'sharedkernel/nest/exception';
import { Security } from 'src/sharedkernel/security';
import Mock = jest.Mock;

interface MockAuthRepository {
  signup: Mock;
  signin: Mock;
  authenticate: Mock;
}

interface MockUserRepository {
  getAllUsers: Mock;
  getOneUser: Mock;
  getUserById: Mock;
  createUser: Mock;
  updateUser: Mock;
}

interface MockAuthenticatorService {
  generateSecret: Mock;
  generateQrCodeUrl: Mock;
  verify: Mock;
}

interface MockSecurityService {
  hash: Mock;
  verify: Mock;
}

interface MockAuthPresenter {
  show: Mock;
  showAll: Mock;
  json: Mock;
}

interface MockConfigService {
  get: Mock;
}

const mockAuthRepository = (): MockAuthRepository => ({
  signup: jest.fn(),
  signin: jest.fn(),
  authenticate: jest.fn(),
});

const mockUserRepository = (): MockUserRepository => ({
  getAllUsers: jest.fn(),
  getOneUser: jest.fn(),
  getUserById: jest.fn(),
  createUser: jest.fn(),
  updateUser: jest.fn(),
});

const mockAuthenticator = (): MockAuthenticatorService => ({
  generateSecret: jest.fn(),
  generateQrCodeUrl: jest.fn(),
  verify: jest.fn(),
});

const mockSecurityService = (): MockSecurityService => ({
  hash: jest.fn(),
  verify: jest.fn(),
});

const mockAuthPresenter = (): MockAuthPresenter => ({
  show: jest.fn(),
  showAll: jest.fn(),
  json: jest.fn(),
});

const mockConfigService = (): MockConfigService => ({
  get: jest.fn(),
});

describe('AuthInteractor', () => {
  // service to be test
  let authInteractor: AuthUseCase;
  // dependencies of authInteractor
  let authRepository: MockAuthRepository;
  let authPresenter: MockAuthPresenter;
  let userRepository: MockUserRepository;
  let jwtService: JwtService;
  let configService: MockConfigService;
  let authenticatorService: MockAuthenticatorService;
  // let authenticatorService: MockAuthenticator;
  let securityService: MockSecurityService;

  const security = new Security();

  // user data from request body sent by client
  const user = new User();
  user.email = 'user@email.com';
  user.password = 'P@ssword';
  user.authenticator_secret = 'secret';

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        JwtModule.registerAsync({
          useFactory: async () => {
            return {
              secret: 'secret',
              signOptions: {
                expiresIn: 3600,
              },
            };
          },
        }),
      ],
      providers: [
        {
          provide: 'AuthUseCase',
          useClass: AuthInteractor,
        },
        {
          provide: AuthLocalRepository,
          useFactory: mockAuthRepository,
        },
        {
          provide: UserLocalRepository,
          useFactory: mockUserRepository,
        },
        {
          provide: 'AuthPresenterInterface',
          useFactory: mockAuthPresenter,
        },
        {
          provide: 'AuthenticatorInterface',
          useFactory: mockAuthenticator,
        },
        {
          provide: 'SecurityInterface',
          useFactory: mockSecurityService,
        },
        {
          provide: ConfigService,
          useFactory: mockConfigService,
        },
      ],
    }).compile();

    authInteractor = await module.get('AuthUseCase');

    authRepository = await module.get(AuthLocalRepository);
    userRepository = await module.get(UserLocalRepository);
    authPresenter = await module.get('AuthPresenterInterface');
    jwtService = await module.get(JwtService);
    configService = await module.get(ConfigService);
    securityService = await module.get('SecurityInterface');
    authenticatorService = await module.get('AuthenticatorInterface');
  });

  describe('signup', () => {
    it('should successfully register the user', async () => {
      // insert user data into database
      // and returns inserted data.
      // Note: user.password was hashed before inserting data
      authRepository.signup.mockResolvedValue(user);

      // get inserted data from database
      // and parsing user data for public consumptions
      // Note: user.password was stripped
      authPresenter.show.mockReturnValue({
        ...user,
        password: await security.hash(user.password),
      });

      // client tyring to registering new user
      const result = await authInteractor.signup({
        email: user.email,
        password: user.password,
      });

      expect(authRepository.signup).toHaveBeenCalledTimes(1);
      expect(result.email).toEqual(user.email);
      expect(await security.verify(user.password, result.password)).toBe(true);
    });
  });

  describe('signin', () => {
    it('should signed in succesfully', async function () {
      // initialize the dto
      const authDto = new AuthSignInDto();
      authDto.email = user.email;
      authDto.password = user.password;

      // checking user data in database
      authRepository.signin.mockResolvedValue(user);

      // password verified
      securityService.verify.mockResolvedValue(true);

      // parsing user data for public consumptions
      authPresenter.show.mockReturnValue(user);

      // parsing user entity into plain json as jwt payload
      authPresenter.json.mockReturnValue({ ...user });

      // creating jsonwebtoken

      // client tyring to signin
      const result = await authInteractor.signin(authDto);

      // verify if jwt successfully generated
      expect(typeof result).toBe('string');

      // ensure the generated string is a valid jwt
      const verified = jwtService.verify(result, { secret: 'secret' });
      expect(typeof verified).toBe('object');
    });

    it('should failed to sign in due the invalid credentials', async function () {
      // initialize the dto
      const authDto = new AuthSignInDto();
      authDto.email = user.email;
      authDto.password = user.password;

      // checking user data in database
      authRepository.signin.mockResolvedValue(user);

      // password verified
      securityService.verify.mockResolvedValue(false);

      // client tyring to signin
      expect(authInteractor.signin(authDto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('authenticator', () => {
    it('should generate qrcode url (test logic only)', async () => {
      const qrcodeUrl = 'some qrcode url';

      // generating totp secret with speakeasy library
      authenticatorService.generateSecret.mockReturnValue('secret');

      // generating qrcode url with generated secret as the payload
      authenticatorService.generateQrCodeUrl.mockReturnValue(qrcodeUrl);

      // updating authenticator field to true
      userRepository.updateUser.mockResolvedValue(user);

      // handler request from user fo generating authenticator qrcode url
      const result = await authInteractor.authenticator(user);

      expect(result).toEqual(qrcodeUrl);
    });

    it('should generate qrcode url but user data not updated', async () => {
      const qrcodeUrl = 'some qrcode url';

      // generating totp secret with speakeasy library
      authenticatorService.generateSecret.mockReturnValue('secret');

      // generating qrcode url with generated secret as the payload
      authenticatorService.generateQrCodeUrl.mockReturnValue(qrcodeUrl);

      // updating authenticator field to true
      userRepository.updateUser.mockResolvedValue(user);

      // updating authenticator field to true
      userRepository.updateUser.mockResolvedValue(false);

      expect(authInteractor.authenticator(user)).rejects.toThrow(
        NotModifiedException,
      );
    });
  });

  describe('authenticate', () => {
    it('should authenticate totp code from client', async () => {
      // preparing AuthAuthenticateDto
      const auth = new AuthAuthenticateDto();
      auth.authenticator_code = '123456';

      // get all user data
      userRepository.getOneUser.mockResolvedValue(user);

      // verify totp data
      authenticatorService.verify.mockReturnValue(true);

      // update user authenticator data when totp data verified succesfully
      userRepository.updateUser.mockResolvedValue(user);

      // preparing user data for public consumptions
      authPresenter.json.mockReturnValue({ ...user });
      authPresenter.show.mockReturnValue(user);

      const result = await authInteractor.authenticate(auth, user);

      // ensure the generated string is a valid jwt
      const verified = jwtService.verify(result, { secret: 'secret' });
      expect(typeof verified).toBe('object');
    });

    it('should failed authenticate totp code from client (user not found)', async () => {
      // preparing AuthAuthenticateDto
      const auth = new AuthAuthenticateDto();
      auth.authenticator_code = '123456';

      // get all user data
      userRepository.getOneUser.mockResolvedValue(false);

      expect(authInteractor.authenticate(auth, user)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should failed authenticate totp code from client (unauthorized, invalid code)', async () => {
      // preparing AuthAuthenticateDto
      const auth = new AuthAuthenticateDto();
      auth.authenticator_code = '123456';

      // get all user data
      userRepository.getOneUser.mockResolvedValue(user);

      // verify totp data
      authenticatorService.verify.mockReturnValue(false);

      expect(authInteractor.authenticate(auth, user)).rejects.toThrow(
        UnauthorizedException,
      );
    });

    it('should authenticate totp code from client but user "authenticator" not updated', async () => {
      // preparing AuthAuthenticateDto
      const auth = new AuthAuthenticateDto();
      auth.authenticator_code = '123456';

      // get all user data
      userRepository.getOneUser.mockResolvedValue(user);

      // verify totp data
      authenticatorService.verify.mockReturnValue(true);

      // update user authenticator data when totp data verified succesfully
      userRepository.updateUser.mockResolvedValue(false);

      expect(authInteractor.authenticate(auth, user)).rejects.toThrow(
        NotModifiedException,
      );
    });
  });
});
