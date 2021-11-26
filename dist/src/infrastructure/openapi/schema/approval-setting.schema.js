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
exports.ApprovalSettingNotFoundResponseBody = exports.ApprovalSettingResponseBody = void 0;
const approval_setting_entity_1 = require("../../../domain/entity/approval-setting.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ApprovalSettingResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    __metadata("design:type", Number)
], ApprovalSettingResponseBody.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SPJ Request Setting' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Min)(3),
    __metadata("design:type", String)
], ApprovalSettingResponseBody.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ApprovalSettingResponseBody.prototype, "request_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SPJ Request' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ApprovalSettingResponseBody.prototype, "request_type_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ApprovalSettingResponseBody.prototype, "approval_setting_type_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Upper Job Position' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ApprovalSettingResponseBody.prototype, "approval_setting_type_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ApprovalSettingResponseBody.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, default: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ApprovalSettingResponseBody.prototype, "auto_ascend", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, default: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ApprovalSettingResponseBody.prototype, "no_approval", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], ApprovalSettingResponseBody.prototype, "position_order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Date)
], ApprovalSettingResponseBody.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Date)
], ApprovalSettingResponseBody.prototype, "updated_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Date)
], ApprovalSettingResponseBody.prototype, "deleted_at", void 0);
exports.ApprovalSettingResponseBody = ApprovalSettingResponseBody;
class ApprovalSettingNotFoundResponseBody {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], ApprovalSettingNotFoundResponseBody.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Approval setting with id 21 is does not exists' }),
    __metadata("design:type", String)
], ApprovalSettingNotFoundResponseBody.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Not Found' }),
    __metadata("design:type", String)
], ApprovalSettingNotFoundResponseBody.prototype, "error", void 0);
exports.ApprovalSettingNotFoundResponseBody = ApprovalSettingNotFoundResponseBody;
//# sourceMappingURL=approval-setting.schema.js.map