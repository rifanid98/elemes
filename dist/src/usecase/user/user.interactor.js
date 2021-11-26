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
exports.UserInteractor = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_presenter_1 = require("../../adapter/presenter/user.presenter");
const user_repository_1 = require("../../infrastructure/persistence/local/typeorm/repository/user.repository");
const user_entity_1 = require("../../domain/entity/user.entity");
const user_dto_1 = require("../../domain/dto/user.dto");
const security_1 = require("../../sharedkernel/security");
const date_1 = require("../../sharedkernel/date");
const entity_1 = require("../../infrastructure/persistence/local/typeorm/entity");
let UserInteractor = class UserInteractor {
    constructor(presenter, userRepository, securityService, dateService) {
        this.presenter = presenter;
        this.userRepository = userRepository;
        this.securityService = securityService;
        this.dateService = dateService;
    }
    async createUser(userDto) {
        if (userDto.hasOwnProperty('password')) {
            userDto.password = await this.securityService.hash(userDto.password);
        }
        if (userDto.hasOwnProperty('birth_date')) {
            userDto.birth_date = this.dateService.localToSqlDate(userDto.birth_date);
        }
        const role = new entity_1.Role();
        role.id = 1;
        role.name = 'Staff';
        const user = new entity_1.User();
        user.role = role;
        Object.keys(userDto).forEach((key) => {
            if (!key.includes('_id')) {
                user[key] = userDto[key];
            }
        });
        return this.userRepository.createUser(user);
    }
    getAllUsers(userDto) {
        return this.userRepository.getAllUsers();
    }
    async getUserById(userDto) {
        const result = await this.userRepository.getUserById(userDto);
        if (!result) {
            throw new common_1.NotFoundException('UserEntity does not exists');
        }
        return result;
    }
    async updateUser(userDto) {
        if (userDto.hasOwnProperty('password')) {
            userDto.password = await this.securityService.hash(userDto.password);
        }
        if (userDto.hasOwnProperty('birth_date')) {
            userDto.birth_date = this.dateService.localToSqlDate(userDto.birth_date);
        }
        const role = new entity_1.Role();
        role.id = 1;
        role.name = 'Staff';
        const user = new entity_1.User();
        user.role = role;
        Object.keys(userDto).forEach((key) => {
            if (!key.includes('_id')) {
                user[key] = userDto[key];
            }
        });
        return this.userRepository.updateUser(user);
    }
    async deleteUser(userDto) {
        const result = await this.userRepository.deleteUser(userDto);
        if (!result) {
            throw new common_1.NotFoundException('UserEntity does not exists');
        }
        return result;
    }
};
UserInteractor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('UserPresenterInterface')),
    __param(1, (0, typeorm_1.InjectRepository)(user_repository_1.UserLocalRepository)),
    __param(2, (0, common_1.Inject)('SecurityInterface')),
    __param(3, (0, common_1.Inject)('DateService')),
    __metadata("design:paramtypes", [Object, user_repository_1.UserLocalRepository, Object, date_1.Date])
], UserInteractor);
exports.UserInteractor = UserInteractor;
//# sourceMappingURL=user.interactor.js.map