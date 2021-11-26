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
exports.SigninNotFoundResponseBody = exports.SigninResponseBody = exports.SigninRequestBody = void 0;
const user_entity_1 = require("../../../domain/entity/user.entity");
const swagger_1 = require("@nestjs/swagger");
class SigninRequestBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user@email.com' }),
    __metadata("design:type", String)
], SigninRequestBody.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'P@ssword' }),
    __metadata("design:type", String)
], SigninRequestBody.prototype, "password", void 0);
exports.SigninRequestBody = SigninRequestBody;
class SigninResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJhZG5pbi5yaWZhbmRpQG5hc2h0YS5pZCIsImF1dGhlbnRpY2F0b3IiOmZhbHNlLCJpYXQiOjE2MzYwMjA3ODUsImV4cCI6MTYzNjAyNDM4NX0.Bwt98abJDlw79UdLGt38twSsXkEZfF69mfS_cgQcvbk',
    }),
    __metadata("design:type", String)
], SigninResponseBody.prototype, "token", void 0);
exports.SigninResponseBody = SigninResponseBody;
class SigninNotFoundResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], SigninNotFoundResponseBody.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'User not found' }),
    __metadata("design:type", String)
], SigninNotFoundResponseBody.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], SigninNotFoundResponseBody.prototype, "error", void 0);
exports.SigninNotFoundResponseBody = SigninNotFoundResponseBody;
//# sourceMappingURL=signin.schema.js.map