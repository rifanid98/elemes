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
exports.ApprovalListDetail = void 0;
const approval_list_detail_entity_1 = require("../../../../../domain/entity/approval-list-detail.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
const approval_list_entity_1 = require("../../../../../domain/entity/approval-list.entity");
let ApprovalListDetail = class ApprovalListDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ApprovalListDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ApprovalListDetail.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: approval_list_entity_1.ApprovalStatus,
        default: approval_list_entity_1.ApprovalStatus.PENDING,
    }),
    __metadata("design:type", String)
], ApprovalListDetail.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_list_details, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], ApprovalListDetail.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_list_details, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], ApprovalListDetail.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_list_details, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], ApprovalListDetail.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalListDetail.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalListDetail.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ApprovalListDetail.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.ApprovalList, (approval_list) => approval_list.approval_list_details),
    __metadata("design:type", Number)
], ApprovalListDetail.prototype, "approval_list", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.ApprovalRule, (approval_rule) => approval_rule.approval_list_details),
    __metadata("design:type", Number)
], ApprovalListDetail.prototype, "approval_rule", void 0);
ApprovalListDetail = __decorate([
    (0, typeorm_1.Entity)()
], ApprovalListDetail);
exports.ApprovalListDetail = ApprovalListDetail;
//# sourceMappingURL=approval-list-detail.entity.js.map