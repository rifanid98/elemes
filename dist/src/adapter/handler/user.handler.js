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
exports.UserHandler = void 0;
const common_1 = require("@nestjs/common");
const user_usecase_1 = require("../../usecase/user/user.usecase");
const exception_filter_1 = require("../../sharedkernel/nest/exception-filter");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../domain/entity/user.entity");
const schema_1 = require("../../infrastructure/openapi/schema");
const user_dto_1 = require("../../domain/dto/user.dto");
const decorator_1 = require("../../sharedkernel/nest/decorator");
const guard_1 = require("../../sharedkernel/nest/guard");
const passport_1 = require("@nestjs/passport");
let UserHandler = class UserHandler {
    constructor(useCase) {
        this.useCase = useCase;
    }
    createUser(user) {
        return this.useCase.createUser(user);
    }
    getAllUsers(user) {
        return this.useCase.getAllUsers(user);
    }
    getUserById(id) {
        const user = new user_entity_1.User();
        user.id = id;
        return this.useCase.getUserById(user);
    }
    updateUser(id, user) {
        user.id = id;
        return this.useCase.updateUser(user);
    }
    deleteUser(id) {
        const user = new user_entity_1.User();
        user.id = id;
        return this.useCase.deleteUser(user);
    }
};
__decorate([
    (0, common_1.Post)('/'),
    (0, decorator_1.Roles)(decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Add new user' }),
    (0, swagger_1.ApiBody)({ type: schema_1.UserRequestBody }),
    (0, swagger_1.ApiCreatedResponse)({
        type: schema_1.UserResponseBody,
        description: 'User created',
    }),
    (0, swagger_1.ApiConflictResponse)({
        type: schema_1.UserConflictResponseBody,
        description: 'User already exists',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserHandler.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('/'),
    (0, decorator_1.Roles)(decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users' }),
    (0, swagger_1.ApiOkResponse)({
        type: [schema_1.UserResponseBody],
        description: 'Returns User entity',
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserFilterDto]),
    __metadata("design:returntype", Promise)
], UserHandler.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('/:id'),
    (0, decorator_1.Roles)(decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get user detail' }),
    (0, swagger_1.ApiOkResponse)({
        type: schema_1.UserResponseBody,
        description: 'Returns User entity',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: schema_1.UserNotFoundResponse,
        description: 'User does not exists',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserHandler.prototype, "getUserById", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    (0, decorator_1.Roles)(decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Update user' }),
    (0, swagger_1.ApiBody)({ type: schema_1.UserRequestBody }),
    (0, swagger_1.ApiOkResponse)({
        description: 'User updated',
    }),
    (0, swagger_1.ApiConflictResponse)({
        type: schema_1.UserConflictResponseBody,
        description: 'User already exists',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: schema_1.UserNotFoundResponse,
        description: 'User does not exists',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UserHandler.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, decorator_1.Roles)(decorator_1.Role.Admin, decorator_1.Role.SuperAdmin),
    (0, common_1.UseGuards)(guard_1.RolesGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'User deleted',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: schema_1.UserNotFoundResponse,
        description: 'User does not exists',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserHandler.prototype, "deleteUser", null);
UserHandler = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseFilters)(exception_filter_1.QueryExceptionFilter),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    __param(0, (0, common_1.Inject)('UserUsecase')),
    __metadata("design:paramtypes", [Object])
], UserHandler);
exports.UserHandler = UserHandler;
//# sourceMappingURL=user.handler.js.map