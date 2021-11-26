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
exports.ReimbursementRequest = void 0;
const reimbursement_request_entity_1 = require("../../../../../domain/entity/reimbursement-request.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
let ReimbursementRequest = class ReimbursementRequest {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ReimbursementRequest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ReimbursementRequest.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ReimbursementRequest.prototype, "reimbursement_type_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ReimbursementRequest.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ReimbursementRequest.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ReimbursementRequest.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.reimbursement_requests, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], ReimbursementRequest.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.reimbursement_requests, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], ReimbursementRequest.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.reimbursement_requests, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], ReimbursementRequest.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ReimbursementRequest.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ReimbursementRequest.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ReimbursementRequest.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.ReimbursementType, (reimbursement_type) => reimbursement_type.reimbursement_requests),
    __metadata("design:type", Number)
], ReimbursementRequest.prototype, "reimbursement_type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.ReimbursementRequestDetail, (reimbursement_request_detail) => reimbursement_request_detail.reimbursement_request),
    __metadata("design:type", Array)
], ReimbursementRequest.prototype, "reimbursement_request_details", void 0);
ReimbursementRequest = __decorate([
    (0, typeorm_1.Entity)()
], ReimbursementRequest);
exports.ReimbursementRequest = ReimbursementRequest;
//# sourceMappingURL=reimbursement-request.entity.js.map