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
exports.AuthenticateResponseBody = exports.AuthenticateRequestBody = exports.AuthenticateUnauthorizedResponseBody = void 0;
const swagger_1 = require("@nestjs/swagger");
class AuthenticateUnauthorizedResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 401 }),
    __metadata("design:type", Number)
], AuthenticateUnauthorizedResponseBody.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Authenticator code is invalid' }),
    __metadata("design:type", String)
], AuthenticateUnauthorizedResponseBody.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Unauthorized' }),
    __metadata("design:type", String)
], AuthenticateUnauthorizedResponseBody.prototype, "error", void 0);
exports.AuthenticateUnauthorizedResponseBody = AuthenticateUnauthorizedResponseBody;
class AuthenticateRequestBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '457389',
    }),
    __metadata("design:type", String)
], AuthenticateRequestBody.prototype, "authenticator_code", void 0);
exports.AuthenticateRequestBody = AuthenticateRequestBody;
class AuthenticateResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiZW1haWwiOiJhZG5pbi5yaWZhbmRpQG5hc2h0YS5pZCIsImF1dGhlbnRpY2F0b3IiOnRydWUsImlhdCI6MTYzNjAzODYwNCwiZXhwIjoxNjM2MDQyMjA0fQ.vOHzdRiCRSKtZ48GW5GmxVcBzvH6GaSFog14z4f7JR4',
    }),
    __metadata("design:type", String)
], AuthenticateResponseBody.prototype, "token", void 0);
exports.AuthenticateResponseBody = AuthenticateResponseBody;
//# sourceMappingURL=authenticate.schema.js.map