import {
  Body,
  Controller,
  Inject,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthUseCase } from 'usecase/auth/auth.usecase';
import {
  AuthAuthenticateDto,
  AuthSignInDto,
  AuthSignUpDto,
} from 'domain/dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { QueryExceptionFilter } from 'sharedkernel/nest/exception-filter';
import { GetUser } from 'sharedkernel/nest/decorator';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from 'domain/entity/user.entity';
import {
  AuthenticateRequestBody,
  AuthenticateResponseBody,
  AuthenticateUnauthorizedResponseBody,
  AuthenticatorResponseBody,
  SigninNotFoundResponseBody,
  SigninRequestBody,
  SigninResponseBody,
  SignupConflictResponseBody,
  SignupRequestBody,
  SignupResponseBody,
  UnauthorizedResponseBody,
} from 'infrastructure/openapi/schema';
import { MainLogger } from 'sharedkernel/nest/logger';
import { SecurityInterface } from 'sharedkernel/security';

@Controller('auth')
@ApiTags('Authentication')
export class AuthHandler {
  private readonly context = 'AuthHandler';

  constructor(
    @Inject('AuthUseCase') private useCase: AuthUseCase,
    private logger: MainLogger,
    @Inject('SecurityInterface')
    private security: SecurityInterface,
  ) {}

  @Post('/signup')
  @UseFilters(QueryExceptionFilter)
  @ApiOperation({ summary: 'Register new user' })
  @ApiBody({ type: SignupRequestBody })
  @ApiCreatedResponse({
    type: SignupResponseBody,
    description: 'Returns User entity',
  })
  @ApiConflictResponse({
    type: SignupConflictResponseBody,
    description: 'User already exists',
  })
  signup(@Body() auth: AuthSignUpDto): Promise<User> {
    this.logger.log('signup new user', this.context, this.security.clear(auth));
    return this.useCase.signup(auth);
  }

  @Post('/signin')
  @ApiOperation({ summary: 'Signin registered user' })
  @ApiBody({ type: SigninRequestBody })
  @ApiCreatedResponse({
    type: SigninResponseBody,
    description:
      'Returns the jsonwebtoken used to access the /auth/authenticator and /auth/authenticate endpoints',
  })
  @ApiNotFoundResponse({
    type: SigninNotFoundResponseBody,
    description: 'User does not exists',
  })
  async signin(@Body() auth: AuthSignInDto): Promise<{ token: string }> {
    this.logger.log('user signin', this.context, this.security.clear(auth));
    return { token: await this.useCase.signin(auth) };
  }

  /**
   * Generate qrcode authenticator
   */
  @Post('/authenticator')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('Authorization')
  @ApiOperation({ summary: 'Generates TOTP QRCode' })
  @ApiUnauthorizedResponse({
    type: UnauthorizedResponseBody,
    description: 'Unauthorized. Jsonwebtoken is missing or invalid',
  })
  @ApiCreatedResponse({
    type: AuthenticatorResponseBody,
    description:
      'Returns a QRCode url which should be scanned using an authenticator app',
  })
  async authenticator(@GetUser() user: User): Promise<{ qrcode_url: string }> {
    this.logger.log('user generates authenticator', this.context, user);
    return { qrcode_url: await this.useCase.authenticator(user) };
  }

  /**
   * Authenticate code from google authenticator
   * @param user
   * @param auth
   */
  @Post('/authenticate')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Authenticate TOTP code from authenticator app' })
  @ApiBearerAuth('Authorization')
  @ApiBody({ type: AuthenticateRequestBody })
  @ApiCreatedResponse({
    type: AuthenticateResponseBody,
    description: 'Returns the final jsonwebtoken',
  })
  @ApiUnauthorizedResponse({
    type: AuthenticateUnauthorizedResponseBody,
    description: 'Unauthorized. Jsonwebtoken is missing or invalid',
  })
  async authenticate(
    @GetUser() user: User,
    @Body() auth: AuthAuthenticateDto,
  ): Promise<{ token: string }> {
    this.logger.log('user authenticates authenticator_code', this.context, {
      user,
      auth: this.security.clear(auth),
    });
    return { token: await this.useCase.authenticate(auth, user) };
  }
}
