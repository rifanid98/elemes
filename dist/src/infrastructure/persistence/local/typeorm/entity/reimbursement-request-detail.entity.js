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
exports.ReimbursementRequestDetail = void 0;
const reimbursement_request_detail_entity_1 = require("../../../../../domain/entity/reimbursement-request-detail.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
let ReimbursementRequestDetail = class ReimbursementRequestDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ReimbursementRequestDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ReimbursementRequestDetail.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ReimbursementRequestDetail.prototype, "reimbursement_benefit_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ReimbursementRequestDetail.prototype, "request_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ReimbursementRequestDetail.prototype, "paid_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ReimbursementRequestDetail.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.reimbursement_request_details, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], ReimbursementRequestDetail.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.reimbursement_request_details, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], ReimbursementRequestDetail.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.reimbursement_request_details, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], ReimbursementRequestDetail.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ReimbursementRequestDetail.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ReimbursementRequestDetail.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ReimbursementRequestDetail.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.ReimbursementBenefit, (reimbursement_benefit) => reimbursement_benefit.reimbursement_request_details),
    __metadata("design:type", Object)
], ReimbursementRequestDetail.prototype, "reimbursement_benefit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.ReimbursementRequest, (reimbursement_request) => reimbursement_request.reimbursement_request_details),
    __metadata("design:type", Object)
], ReimbursementRequestDetail.prototype, "reimbursement_request", void 0);
ReimbursementRequestDetail = __decorate([
    (0, typeorm_1.Entity)()
], ReimbursementRequestDetail);
exports.ReimbursementRequestDetail = ReimbursementRequestDetail;
//# sourceMappingURL=reimbursement-request-detail.entity.js.map