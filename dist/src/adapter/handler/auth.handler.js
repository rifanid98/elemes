"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthHandler = void 0;
const common_1 = require("@nestjs/common");
const auth_usecase_1 = require("../../usecase/auth/auth.usecase");
const auth_dto_1 = require("../../domain/dto/auth.dto");
const passport_1 = require("@nestjs/passport");
const exception_filter_1 = require("../../sharedkernel/nest/exception-filter");
const decorator_1 = require("../../sharedkernel/nest/decorator");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../domain/entity/user.entity");
const schema_1 = require("../../infrastructure/openapi/schema");
const logger_1 = require("../../sharedkernel/nest/logger");
const security_1 = require("../../sharedkernel/security");
const guard_1 = require("../../sharedkernel/nest/guard");
let AuthHandler = class AuthHandler {
    constructor(useCase, logger, security) {
        this.useCase = useCase;
        this.logger = logger;
        this.security = security;
        this.context = 'AuthHandler';
    }
    signup(auth) {
        this.logger.log('signup new user', this.context, this.security.clear(auth));
        return this.useCase.signup(auth);
    }
    async signin(auth) {
        this.logger.log('user signin', this.context, this.security.clear(auth));
        return { token: await this.useCase.signin(auth) };
    }
    async authenticator(user) {
        this.logger.log('user generates authenticator', this.context, user);
        return { qrcode_url: await this.useCase.authenticator(user) };
    }
    async authenticate(user, auth) {
        this.logger.log('user authenticates authenticator_code', this.context, {
            user,
            auth: this.security.clear(auth),
        });
        return { token: await this.useCase.authenticate(auth, user) };
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    (0, common_1.UseFilters)(exception_filter_1.QueryExceptionFilter),
    (0, swagger_1.ApiOperation)({ summary: 'Register new user' }),
    (0, swagger_1.ApiBody)({ type: schema_1.SignupRequestBody }),
    (0, swagger_1.ApiCreatedResponse)({
        type: schema_1.SignupResponseBody,
        description: 'Returns User entity',
    }),
    (0, swagger_1.ApiConflictResponse)({
        type: schema_1.SignupConflictResponseBody,
        description: 'User already exists',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthSignUpDto]),
    __metadata("design:returntype", Promise)
], AuthHandler.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('/signin'),
    (0, swagger_1.ApiOperation)({ summary: 'Signin registered user' }),
    (0, swagger_1.ApiBody)({ type: schema_1.SigninRequestBody }),
    (0, swagger_1.ApiCreatedResponse)({
        type: schema_1.SigninResponseBody,
        description: 'Returns the jsonwebtoken used to access the /auth/authenticator and /auth/authenticate endpoints',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: schema_1.SigninNotFoundResponseBody,
        description: 'User does not exists',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.AuthSignInDto]),
    __metadata("design:returntype", Promise)
], AuthHandler.prototype, "signin", null);
__decorate([
    (0, common_1.Post)('/authenticator'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Generates TOTP QRCode' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        type: schema_1.AuthenticatorResponseBody,
        description: 'Returns a QRCode url which should be scanned using an authenticator app',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthHandler.prototype, "authenticator", null);
__decorate([
    (0, common_1.Post)('/authenticate'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiOperation)({ summary: 'Authenticate TOTP code from authenticator app' }),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiBody)({ type: schema_1.AuthenticateRequestBody }),
    (0, swagger_1.ApiCreatedResponse)({
        type: schema_1.AuthenticateResponseBody,
        description: 'Returns the final jsonwebtoken',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.AuthenticateUnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User,
        auth_dto_1.AuthAuthenticateDto]),
    __metadata("design:returntype", Promise)
], AuthHandler.prototype, "authenticate", null);
AuthHandler = __decorate([
    (0, common_1.Controller)('auth'),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiTags)('Authentication'),
    __param(0, (0, common_1.Inject)('AuthUseCase')),
    __param(2, (0, common_1.Inject)('SecurityInterface')),
    __metadata("design:paramtypes", [Object, logger_1.MainLogger, Object])
], AuthHandler);
exports.AuthHandler = AuthHandler;
//# sourceMappingURL=auth.handler.js.map