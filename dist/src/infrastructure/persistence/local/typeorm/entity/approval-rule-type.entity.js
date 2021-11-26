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
exports.ApprovalRuleType = void 0;
const approval_rule_type_entity_1 = require("../../../../../domain/entity/approval-rule-type.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
let ApprovalRuleType = class ApprovalRuleType {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ApprovalRuleType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ApprovalRuleType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_rule_types, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], ApprovalRuleType.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_rule_types, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], ApprovalRuleType.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_rule_types, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], ApprovalRuleType.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalRuleType.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalRuleType.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ApprovalRuleType.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.ApprovalRule, (approval_rule) => approval_rule.approval_rule_type),
    __metadata("design:type", Array)
], ApprovalRuleType.prototype, "approval_rules", void 0);
ApprovalRuleType = __decorate([
    (0, typeorm_1.Entity)()
], ApprovalRuleType);
exports.ApprovalRuleType = ApprovalRuleType;
//# sourceMappingURL=approval-rule-type.entity.js.map