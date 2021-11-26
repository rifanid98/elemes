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
exports.ApprovalSetting = void 0;
const approval_setting_entity_1 = require("../../../../../domain/entity/approval-setting.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
const class_transformer_1 = require("class-transformer");
let ApprovalSetting = class ApprovalSetting {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ApprovalSetting.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalSetting.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalSetting.prototype, "request_type_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalSetting.prototype, "approval_setting_type_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalSetting.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], ApprovalSetting.prototype, "auto_ascend", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], ApprovalSetting.prototype, "no_approval", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ApprovalSetting.prototype, "position_order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_settings, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], ApprovalSetting.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_settings, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], ApprovalSetting.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_settings, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], ApprovalSetting.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalSetting.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalSetting.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ApprovalSetting.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.RequestType, (request_type) => request_type.approval_settings),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", _1.RequestType)
], ApprovalSetting.prototype, "request_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.ApprovalSettingType, (approval_setting_type) => approval_setting_type.approval_settings),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", _1.ApprovalSettingType)
], ApprovalSetting.prototype, "approval_setting_type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.ApprovalRule, (approval_rule) => approval_rule.approval_setting),
    __metadata("design:type", Array)
], ApprovalSetting.prototype, "approval_rules", void 0);
ApprovalSetting = __decorate([
    (0, typeorm_1.Entity)()
], ApprovalSetting);
exports.ApprovalSetting = ApprovalSetting;
//# sourceMappingURL=approval-setting.entity.js.map