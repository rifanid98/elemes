import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { TotpVerifyOptions } from 'speakeasy';
import { AuthPresenterInterface } from 'adapter/presenter/auth.presenter';
import { User } from 'domain/entity/user.entity';
import { AuthRepository } from 'domain/repository/auth.repository';
import { UserRepository } from 'domain/repository/user.repository';
import {
  AuthAuthenticateDto,
  AuthSignInDto,
  AuthSignUpDto,
} from 'domain/dto/auth.dto';
import { AuthLocalRepository } from 'infrastructure/persistence/local/typeorm/repository/auth.repository';
import { UserLocalRepository } from 'infrastructure/persistence/local/typeorm/repository';
import { AuthUseCase } from './auth.usecase';
import { NotModifiedException } from 'sharedkernel/nest/exception';
import { AuthenticatorInterface } from 'sharedkernel/authenticator';
import { SecurityInterface } from 'sharedkernel/security';

@Injectable()
export class AuthInteractor implements AuthUseCase {
  constructor(
    @Inject('AuthPresenterInterface')
    private presenter: AuthPresenterInterface,
    @InjectRepository(AuthLocalRepository)
    private authRepository: AuthRepository,
    @InjectRepository(UserLocalRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private configService: ConfigService,
    @Inject('AuthenticatorInterface')
    private authenticatorService: AuthenticatorInterface,
    @Inject('SecurityInterface')
    private securityService: SecurityInterface, // private logger: AuthLogger,
  ) {}

  async signup(auth: AuthSignUpDto): Promise<User> {
    // this.logger.log(
    //   'user signup',
    //   'AuthInteractor',
    //   this.securityService.clear(auth),
    // );

    const user = new User();
    user.email = auth.email;
    user.password = await this.securityService.hash(auth.password);

    const result = await this.authRepository.signup(user);
    return this.presenter.show(result);
  }

  async signin(auth: AuthSignInDto): Promise<string> {
    // this.logger.log(
    //   'user signin',
    //   'AuthInteractor',
    //   this.securityService.clear(auth),
    // );

    const result = await this.authRepository.signin({
      email: auth.email,
    });

    if (!result) {
      throw new NotFoundException('User not found');
    }

    if (!(await this.securityService.verify(auth.password, result.password))) {
      throw new BadRequestException('Credentials is invalid');
    }

    const presentedUser = this.presenter.show(result);
    const jwtPayload = this.presenter.json(presentedUser);
    return this.jwtService.sign(jwtPayload);
  }

  async authenticator(user: User): Promise<string> {
    // this.logger.log(
    //   'user generates authenticator qrcode',
    //   'AuthInteractor',
    //   this.securityService.clear(user),
    // );

    const secret = this.authenticatorService.generateSecret({
      name: this.configService.get('AUTHENTICATOR_NAME'),
    });

    const qrCodeUrl = await this.authenticatorService.generateQrCodeUrl(
      secret.otpauth_url,
    );

    const update = await this.userRepository.updateUser({
      id: user.id,
      authenticator_secret: secret.base32,
    });

    if (!update) {
      throw new NotModifiedException();
    }

    return qrCodeUrl;
  }

  async authenticate(auth: AuthAuthenticateDto, user: User): Promise<string> {
    // this.logger.log(
    //   'user validating authenticator code from authenticator app',
    //   'AuthInteractor',
    //   this.securityService.clear({
    //     auth: this.securityService.clear(auth),
    //     user: this.securityService.clear(user),
    //   }),
    // );

    const currentUser = await this.userRepository.getOneUser({
      id: user.id,
    });

    if (!currentUser) {
      throw new NotFoundException('User is does not exists');
    }

    const totpPayload: TotpVerifyOptions = {
      secret: currentUser.authenticator_secret,
      encoding: 'base32',
      token: auth.authenticator_code,
    };

    const verified = this.authenticatorService.verify(totpPayload);

    if (!verified) {
      throw new UnauthorizedException('Authenticator code is invalid.');
    }

    const update = await this.userRepository.updateUser({
      id: user.id,
      authenticator: true,
    });

    if (!update) {
      throw new NotModifiedException('Failed to update user configuration');
    }

    currentUser.authenticator = true;

    return this.jwtService.sign(
      this.presenter.json(this.presenter.show(currentUser)),
    );
  }
}
