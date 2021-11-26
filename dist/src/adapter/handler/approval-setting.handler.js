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
exports.ApprovalSettingHandler = void 0;
const common_1 = require("@nestjs/common");
const approval_setting_use_case_1 = require("../../usecase/approval-setting/approval-setting-use.case");
const swagger_1 = require("@nestjs/swagger");
const approval_setting_entity_1 = require("../../domain/entity/approval-setting.entity");
const passport_1 = require("@nestjs/passport");
const schema_1 = require("../../infrastructure/openapi/schema");
const approval_setting_dto_1 = require("../../domain/dto/approval-setting.dto");
let ApprovalSettingHandler = class ApprovalSettingHandler {
    constructor(useCase) {
        this.useCase = useCase;
    }
    createApprovalSetting(approvalSetting) {
        return this.useCase.createApprovalSetting(approvalSetting);
    }
    getAllApprovalSettings() {
        return this.useCase.getAllApprovalSettings();
    }
    updateApprovalSetting(id, approvalSetting) {
        approvalSetting.id = id;
        return this.useCase.updateApprovalSetting(approvalSetting);
    }
    async deleteApprovalSetting(id) {
        const approvalSettingDto = new approval_setting_dto_1.ApprovalSettingDto();
        approvalSettingDto.id = id;
        return this.useCase.deleteApprovalSetting(approvalSettingDto);
    }
};
__decorate([
    (0, common_1.Post)('/setting'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Add approval setting' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: schema_1.ApprovalSettingResponseBody,
        description: 'Created approval setting',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [approval_setting_dto_1.ApprovalSettingDto]),
    __metadata("design:returntype", Promise)
], ApprovalSettingHandler.prototype, "createApprovalSetting", null);
__decorate([
    (0, common_1.Get)('/setting'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all approval settings' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: [schema_1.ApprovalSettingResponseBody],
        description: 'Returns all approval settings',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApprovalSettingHandler.prototype, "getAllApprovalSettings", null);
__decorate([
    (0, common_1.Patch)('/setting/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Add approval setting' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: schema_1.ApprovalSettingResponseBody,
        description: 'Updated approval setting',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, approval_setting_dto_1.ApprovalSettingDto]),
    __metadata("design:returntype", Promise)
], ApprovalSettingHandler.prototype, "updateApprovalSetting", null);
__decorate([
    (0, common_1.Delete)('/setting/:id'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)('Authorization'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove approval setting' }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        type: schema_1.UnauthorizedResponseBody,
        description: 'Unauthorized. Jsonwebtoken is missing or invalid',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Deleted approval setting',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        type: schema_1.ApprovalSettingNotFoundResponseBody,
        description: 'Deleted approval setting',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ApprovalSettingHandler.prototype, "deleteApprovalSetting", null);
ApprovalSettingHandler = __decorate([
    (0, common_1.Controller)('approvals'),
    (0, swagger_1.ApiTags)('ApprovalSetting'),
    __param(0, (0, common_1.Inject)('ApprovalSettingUseCase')),
    __metadata("design:paramtypes", [Object])
], ApprovalSettingHandler);
exports.ApprovalSettingHandler = ApprovalSettingHandler;
//# sourceMappingURL=approval-setting.handler.js.map