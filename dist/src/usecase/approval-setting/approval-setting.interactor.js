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
exports.ApprovalSettingInteractor = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const approval_setting_dto_1 = require("../../domain/dto/approval-setting.dto");
const approval_setting_use_case_1 = require("./approval-setting-use.case");
const approval_setting_repository_1 = require("../../infrastructure/persistence/local/typeorm/repository/approval-setting.repository");
const presenter_1 = require("../../adapter/presenter");
const repository_1 = require("../../infrastructure/persistence/local/typeorm/repository");
const request_type_repository_1 = require("../../infrastructure/persistence/local/typeorm/repository/request-type.repository");
const entity_1 = require("../../infrastructure/persistence/local/typeorm/entity");
let ApprovalSettingInteractor = class ApprovalSettingInteractor {
    constructor(presenter, approvalSettingRepository, approvalSettingTypeRepository, requestTypeRepository) {
        this.presenter = presenter;
        this.approvalSettingRepository = approvalSettingRepository;
        this.approvalSettingTypeRepository = approvalSettingTypeRepository;
        this.requestTypeRepository = requestTypeRepository;
    }
    async createApprovalSetting(approvalSetting) {
        const requestTypeEntity = new entity_1.RequestType();
        const approvalSettingTypeEntity = new entity_1.ApprovalSettingType();
        requestTypeEntity.id = approvalSetting.request_type_id;
        approvalSettingTypeEntity.id = approvalSetting.approval_setting_type_id;
        const requestType = await this.requestTypeRepository.getOneRequestType(requestTypeEntity);
        const approvalSettingType = await this.approvalSettingTypeRepository.getOneApprovalSettingType(approvalSettingTypeEntity);
        if (!requestType) {
            throw new common_1.NotFoundException(`Request type with id ${approvalSetting.request_type_id} not found`);
        }
        if (!approvalSettingType) {
            throw new common_1.NotFoundException(`Approval setting type with id ${approvalSetting.approval_setting_type_id} not found`);
        }
        const approvalSettingPayload = new entity_1.ApprovalSetting();
        approvalSettingPayload.approval_setting_type = approvalSettingType;
        approvalSettingPayload.approval_setting_type_name =
            approvalSettingType.name;
        approvalSettingPayload.request_type = requestType;
        approvalSettingPayload.request_type_name = requestType.name;
        Object.keys(approvalSetting).forEach((key) => {
            if (!key.includes('id')) {
                approvalSettingPayload[key] = approvalSetting[key];
            }
        });
        return await this.approvalSettingRepository.createApprovalSetting(approvalSettingPayload);
    }
    async getAllApprovalSettings() {
        return this.approvalSettingRepository.getAllApprovalSettings();
    }
    async updateApprovalSetting(approvalSetting) {
        const approvalSettingPayload = new entity_1.ApprovalSetting();
        if (approvalSetting.request_type_id) {
            let requestType = new entity_1.RequestType();
            requestType.id = approvalSetting.request_type_id;
            requestType = await this.requestTypeRepository.getOneRequestType(requestType);
            if (!requestType) {
                throw new common_1.NotFoundException(`Request type with id ${approvalSetting.request_type_id} not found`);
            }
            approvalSettingPayload.request_type = requestType;
            approvalSettingPayload.request_type_name = requestType.name;
        }
        if (approvalSetting.approval_setting_type_id) {
            let approvalSettingType = new entity_1.ApprovalSettingType();
            approvalSettingType.id = approvalSetting.approval_setting_type_id;
            approvalSettingType =
                await this.approvalSettingTypeRepository.getOneApprovalSettingType(approvalSettingType);
            if (!approvalSettingType) {
                throw new common_1.NotFoundException(`Approval setting type with id ${approvalSetting.approval_setting_type_id} not found`);
            }
            approvalSettingPayload.approval_setting_type = approvalSettingType;
            approvalSettingPayload.approval_setting_type_name =
                approvalSettingType.name;
        }
        Object.keys(approvalSetting).forEach((key) => {
            if (!key.includes('_id')) {
                approvalSettingPayload[key] = approvalSetting[key];
            }
        });
        return this.approvalSettingRepository.updateApprovalSetting(approvalSettingPayload);
    }
    async deleteApprovalSetting(approvalSettingDto) {
        const approvalSetting = new entity_1.ApprovalSetting();
        Object.keys(approvalSettingDto).forEach((key) => {
            if (!key.includes('_id')) {
                approvalSetting[key] = approvalSettingDto[key];
            }
        });
        const deleted = await this.approvalSettingRepository.deleteApprovalSetting(approvalSetting);
        if (!deleted) {
            throw new common_1.NotFoundException(`Approval setting with id ${approvalSettingDto.id} is does not exists`);
        }
        return deleted;
    }
};
ApprovalSettingInteractor = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('ApprovalSettingPresenterInterface')),
    __param(1, (0, typeorm_1.InjectRepository)(approval_setting_repository_1.ApprovalSettingLocalRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(repository_1.ApprovalSettingTypeLocalRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(request_type_repository_1.RequestTypeLocalRepository)),
    __metadata("design:paramtypes", [Object, approval_setting_repository_1.ApprovalSettingLocalRepository,
        repository_1.ApprovalSettingTypeLocalRepository,
        request_type_repository_1.RequestTypeLocalRepository])
], ApprovalSettingInteractor);
exports.ApprovalSettingInteractor = ApprovalSettingInteractor;
//# sourceMappingURL=approval-setting.interactor.js.map