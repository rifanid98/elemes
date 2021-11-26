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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundResponse = exports.UserFilter = exports.UserResponseBody = exports.UserRequestBody = exports.UserConflictResponseBody = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("../../../domain/entity/user.entity");
class UserConflictResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 409 }),
    __metadata("design:type", Number)
], UserConflictResponseBody.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Data already exists' }),
    __metadata("design:type", String)
], UserConflictResponseBody.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Conflict' }),
    __metadata("design:type", String)
], UserConflictResponseBody.prototype, "error", void 0);
exports.UserConflictResponseBody = UserConflictResponseBody;
class UserRequestBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'User', required: false }),
    __metadata("design:type", String)
], UserRequestBody.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@email.com', required: false }),
    __metadata("design:type", String)
], UserRequestBody.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: user_entity_1.Gender.MALE, required: false }),
    __metadata("design:type", String)
], UserRequestBody.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bogor', required: false }),
    __metadata("design:type", String)
], UserRequestBody.prototype, "birth_place", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '21/11/1998', required: false }),
    __metadata("design:type", String)
], UserRequestBody.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '089606415122', required: false }),
    __metadata("design:type", String)
], UserRequestBody.prototype, "phone", void 0);
exports.UserRequestBody = UserRequestBody;
class UserResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], UserResponseBody.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'User' }),
    __metadata("design:type", String)
], UserResponseBody.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@email.com' }),
    __metadata("design:type", String)
], UserResponseBody.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: user_entity_1.Gender.MALE }),
    __metadata("design:type", String)
], UserResponseBody.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bogor' }),
    __metadata("design:type", String)
], UserResponseBody.prototype, "birth_place", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '21/11/1998' }),
    __metadata("design:type", String)
], UserResponseBody.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '089606415122' }),
    __metadata("design:type", String)
], UserResponseBody.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], UserResponseBody.prototype, "authenticator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    __metadata("design:type", Number)
], UserResponseBody.prototype, "role_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UserResponseBody.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UserResponseBody.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], UserResponseBody.prototype, "deleted_at", void 0);
exports.UserResponseBody = UserResponseBody;
class UserFilter {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'User', required: false }),
    __metadata("design:type", String)
], UserFilter.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@email.com', required: false }),
    __metadata("design:type", String)
], UserFilter.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: user_entity_1.Gender.MALE, required: false }),
    __metadata("design:type", String)
], UserFilter.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bogor', required: false }),
    __metadata("design:type", String)
], UserFilter.prototype, "birth_place", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: new Date().toLocaleDateString(), required: false }),
    __metadata("design:type", String)
], UserFilter.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '089606415122', required: false }),
    __metadata("design:type", String)
], UserFilter.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, required: false }),
    __metadata("design:type", Boolean)
], UserFilter.prototype, "authenticator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    __metadata("design:type", Number)
], UserFilter.prototype, "role_id", void 0);
exports.UserFilter = UserFilter;
class UserNotFoundResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], UserNotFoundResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'User does not exists' }),
    __metadata("design:type", String)
], UserNotFoundResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], UserNotFoundResponse.prototype, "error", void 0);
exports.UserNotFoundResponse = UserNotFoundResponse;
//# sourceMappingURL=user.schema.js.map