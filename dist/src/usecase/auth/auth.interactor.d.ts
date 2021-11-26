import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthPresenterInterface } from 'adapter/presenter/auth.presenter';
import { User } from 'domain/entity/user.entity';
import { AuthRepository } from 'domain/repository/auth.repository';
import { UserRepository } from 'domain/repository/user.repository';
import { AuthAuthenticateDto, AuthSignInDto, AuthSignUpDto } from 'domain/dto/auth.dto';
import { AuthUseCase } from './auth.usecase';
import { AuthenticatorInterface } from 'sharedkernel/authenticator';
import { SecurityInterface } from 'sharedkernel/security';
export declare class AuthInteractor implements AuthUseCase {
    private presenter;
    private authRepository;
    private userRepository;
    private jwtService;
    private configService;
    private authenticatorService;
    private securityService;
    constructor(presenter: AuthPresenterInterface, authRepository: AuthRepository, userRepository: UserRepository, jwtService: JwtService, configService: ConfigService, authenticatorService: AuthenticatorInterface, securityService: SecurityInterface);
    signup(auth: AuthSignUpDto): Promise<User>;
    signin(auth: AuthSignInDto): Promise<string>;
    authenticator(user: User): Promise<string>;
    authenticate(auth: AuthAuthenticateDto, user: User): Promise<string>;
}
