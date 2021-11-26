import { AuthUseCase } from 'usecase/auth/auth.usecase';
import { AuthAuthenticateDto, AuthSignInDto, AuthSignUpDto } from 'domain/dto/auth.dto';
import { User } from 'domain/entity/user.entity';
import { MainLogger } from 'sharedkernel/nest/logger';
import { SecurityInterface } from 'sharedkernel/security';
export declare class AuthHandler {
    private useCase;
    private logger;
    private security;
    private readonly context;
    constructor(useCase: AuthUseCase, logger: MainLogger, security: SecurityInterface);
    signup(auth: AuthSignUpDto): Promise<User>;
    signin(auth: AuthSignInDto): Promise<{
        token: string;
    }>;
    authenticator(user: User): Promise<{
        qrcode_url: string;
    }>;
    authenticate(user: User, auth: AuthAuthenticateDto): Promise<{
        token: string;
    }>;
}
