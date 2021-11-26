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
exports.ApprovalList = void 0;
const approval_list_entity_1 = require("../../../../../domain/entity/approval-list.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
let ApprovalList = class ApprovalList {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ApprovalList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ApprovalList.prototype, "request_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ApprovalList.prototype, "request_type_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: approval_list_entity_1.ApprovalStatus,
        default: approval_list_entity_1.ApprovalStatus.PENDING,
    }),
    __metadata("design:type", String)
], ApprovalList.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_lists, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], ApprovalList.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_lists, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], ApprovalList.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.approval_lists, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], ApprovalList.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalList.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ApprovalList.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ApprovalList.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.RequestType, (request_type) => request_type.approval_lists),
    __metadata("design:type", Number)
], ApprovalList.prototype, "request_type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.ApprovalListDetail, (approval_list_detail) => approval_list_detail.approval_list),
    __metadata("design:type", Array)
], ApprovalList.prototype, "approval_list_details", void 0);
ApprovalList = __decorate([
    (0, typeorm_1.Entity)()
], ApprovalList);
exports.ApprovalList = ApprovalList;
//# sourceMappingURL=approval-list.entity.js.map