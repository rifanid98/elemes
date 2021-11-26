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
exports.Profit = void 0;
const profit_entity_1 = require("../../../../../domain/entity/profit.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
const class_transformer_1 = require("class-transformer");
let Profit = class Profit {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Profit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profit.prototype, "sales_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: true }),
    __metadata("design:type", String)
], Profit.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Profit.prototype, "nominal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.profits, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], Profit.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.profits, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], Profit.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.profits, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], Profit.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Profit.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Profit.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Profit.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Employee, (employee) => employee.profits),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", _1.Employee)
], Profit.prototype, "sales", void 0);
Profit = __decorate([
    (0, typeorm_1.Entity)()
], Profit);
exports.Profit = Profit;
//# sourceMappingURL=profit.entity.js.map