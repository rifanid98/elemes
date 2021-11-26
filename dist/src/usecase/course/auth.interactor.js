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
exports.AuthInteractor = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_presenter_1 = require("../../adapter/presenter/auth.presenter");
const user_entity_1 = require("../../domain/entity/user.entity");
const auth_repository_1 = require("../../domain/repository/auth.repository");
const user_repository_1 = require("../../domain/repository/user.repository");
const auth_dto_1 = require("../../domain/dto/auth.dto");
const auth_repository_2 = require("../../infrastructure/persistence/local/typeorm/repository/auth.repository");
const repository_1 = require("../../infrastructure/persistence/local/typeorm/repository");
const exception_1 = require("../../sharedkernel/nest/exception");
const authenticator_1 = require("../../sharedkernel/authenticator");
const security_1 = require("../../sharedkernel/security");
let AuthInteractor = class AuthInteractor {
    constructor(presenter, authRepository, userRepository, jwtService, configService, authenticatorService, securityService) {
        this.presenter = presenter;
        this.authRepository = authRepository;
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.configService = configService;
        this.authenticatorService = authenticatorService;
        this.securityService = securityService;
    }
    async signup(auth) {
        const user = new user_entity_1.User();
        user.email = auth.email;
        user.password = await this.securityService.hash(auth.password);
        const result = await this.authRepository.signup(user);
        return this.presenter.show(result);
    }
    async signin(auth) {
        const result = await this.authRepository.signin({
            email: auth.email,
        });
        if (!result) {
            throw new common_1.NotFoundException('User not found');
        }
        if (!(await this.securityService.verify(auth.password, result.password))) {
            throw new common_1.BadRequestException('Credentials is invalid');
        }
        const presentedUser = this.presenter.show(result);
        const jwtPayload = this.presenter.json(presentedUser);
        return this.jwtService.sign(jwtPayload);
    }
    async authenticator(user) {
        const secret = this.authenticatorService.generateSecret({
            name: this.configService.get('AUTHENTICATOR_NAME'),
        });
        const qrCodeUrl = await this.authenticatorService.generateQrCodeUrl(secret.otpauth_url);
        const update = await this.userRepository.updateUser({
            id: user.id,
            authenticator_secret: secret.base32,
        });
        if (!update) {
            throw new exception_1.NotModifiedException();
        }
        return qrCodeUrl;
    }
    async authenticate(auth, user) {
        const currentUser = await this.userRepository.getOneUser({
            id: user.id,
        });
        if (!currentUser) {
            throw new common_1.NotFoundException('User is does not exists');
        }
        const totpPayload = {
            secret: currentUser.authenticator_secret,
            encoding: 'base32',
            token: auth.authenticator_code,
        };
        const verified = this.authenticatorService.verify(totpPayload);
        if (!verified) {
            throw new common_1.UnauthorizedException('Authenticator code is invalid.');
        }
        const update = await this.userRepository.updateUser({
            id: user.id,
            authenticator: true,
        });
        if (!update) {
            throw new exception_1.NotModifiedException('Failed to update user configuration');
        }
        currentUser.authenticator = true;
        return this.jwtService.sign(this.presenter.json(this.presenter.show(currentUser)));
    }
};
AuthInteractor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AuthPresenterInterface')),
    __param(1, (0, typeorm_1.InjectRepository)(auth_repository_2.AuthLocalRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(repository_1.UserLocalRepository)),
    __param(5, (0, common_1.Inject)('AuthenticatorInterface')),
    __param(6, (0, common_1.Inject)('SecurityInterface')),
    __metadata("design:paramtypes", [Object, Object, Object, jwt_1.JwtService,
        config_1.ConfigService, Object, Object])
], AuthInteractor);
exports.AuthInteractor = AuthInteractor;
//# sourceMappingURL=auth.interactor.js.map