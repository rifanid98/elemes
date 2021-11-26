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
exports.AuthenticatorResponseBody = exports.AuthenticatorUnauthorizedResponseBody = void 0;
const swagger_1 = require("@nestjs/swagger");
class AuthenticatorUnauthorizedResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 401 }),
    (0, swagger_1.ApiProperty)({ example: 'Unauthorized' }),
    __metadata("design:type", String)
], AuthenticatorUnauthorizedResponseBody.prototype, "message", void 0);
exports.AuthenticatorUnauthorizedResponseBody = AuthenticatorUnauthorizedResponseBody;
class AuthenticatorResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'data:image/png;base64,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',
    }),
    __metadata("design:type", String)
], AuthenticatorResponseBody.prototype, "qrcode_url", void 0);
exports.AuthenticatorResponseBody = AuthenticatorResponseBody;
//# sourceMappingURL=authenticator.schema.js.map