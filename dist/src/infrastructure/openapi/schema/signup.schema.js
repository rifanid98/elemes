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
exports.SignupConflictResponseBody = exports.SignupResponseBody = exports.SignupRequestBody = void 0;
const user_entity_1 = require("../../../domain/entity/user.entity");
const swagger_1 = require("@nestjs/swagger");
class SignupRequestBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@email.com' }),
    __metadata("design:type", String)
], SignupRequestBody.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'P@ssword' }),
    __metadata("design:type", String)
], SignupRequestBody.prototype, "password", void 0);
exports.SignupRequestBody = SignupRequestBody;
class SignupResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], SignupResponseBody.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], SignupResponseBody.prototype, "authenticator", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@email.com' }),
    __metadata("design:type", String)
], SignupResponseBody.prototype, "email", void 0);
exports.SignupResponseBody = SignupResponseBody;
class SignupConflictResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 409 }),
    __metadata("design:type", Number)
], SignupConflictResponseBody.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Data already exists' }),
    __metadata("design:type", String)
], SignupConflictResponseBody.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Conflict' }),
    __metadata("design:type", String)
], SignupConflictResponseBody.prototype, "error", void 0);
exports.SignupConflictResponseBody = SignupConflictResponseBody;
//# sourceMappingURL=signup.schema.js.map