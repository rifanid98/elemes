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
exports.ApprovalRule = void 0;
const approval_rule_entity_1 = require("../../../../../domain/entity/approval-rule.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
let ApprovalRule = class ApprovalRule {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ApprovalRule.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalRule.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalRule.prototype, "approval_rule_type_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalRule.prototype, "request_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalRule.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ApprovalRule.prototype, "position_order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_rules, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], ApprovalRule.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_rules, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], ApprovalRule.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_rules, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], ApprovalRule.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalRule.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalRule.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ApprovalRule.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.ApprovalRuleType, (approval_rule_type) => approval_rule_type.approval_rules),
    __metadata("design:type", Number)
], ApprovalRule.prototype, "approval_rule_type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.ApprovalSetting, (approval_setting) => approval_setting.approval_rules),
    __metadata("design:type", Number)
], ApprovalRule.prototype, "approval_setting", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.ApprovalListDetail, (approval_list_detail) => approval_list_detail.approval_rule),
    __metadata("design:type", _1.ApprovalListDetail)
], ApprovalRule.prototype, "approval_list_details", void 0);
ApprovalRule = __decorate([
    (0, typeorm_1.Entity)()
], ApprovalRule);
exports.ApprovalRule = ApprovalRule;
//# sourceMappingURL=approval-rule.entity.js.map