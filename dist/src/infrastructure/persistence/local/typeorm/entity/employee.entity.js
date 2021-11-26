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
exports.Employee = void 0;
const employee_entity_1 = require("../../../../../domain/entity/employee.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
const business_unit_entity_1 = require("./business-unit.entity");
let Employee = class Employee {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Employee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Employee.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "alias", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "position_name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Role, (role) => role.employees, { eager: false }),
    __metadata("design:type", _1.Role)
], Employee.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Position, (position) => position.employees, { eager: false }),
    __metadata("design:type", _1.Position)
], Employee.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.PositionLevel, (position_level) => position_level.employees, { eager: false }),
    __metadata("design:type", _1.PositionLevel)
], Employee.prototype, "position_level", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => business_unit_entity_1.BusinessUnit, (business_unit) => business_unit.employees, {
        eager: false,
    }),
    __metadata("design:type", business_unit_entity_1.BusinessUnit)
], Employee.prototype, "business_unit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.employees, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], Employee.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.employees, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], Employee.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.employees, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], Employee.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Employee.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Employee.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Employee.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Company, (company) => company.director),
    __metadata("design:type", Array)
], Employee.prototype, "companies", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => business_unit_entity_1.BusinessUnit, (business_units) => business_units.director),
    __metadata("design:type", Array)
], Employee.prototype, "business_units", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.Profit, (profit) => profit.sales),
    __metadata("design:type", Array)
], Employee.prototype, "profits", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.SalesTarget, (sales_target) => sales_target.sales),
    __metadata("design:type", Array)
], Employee.prototype, "sales_targets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => _1.ProjectEmployee, (project_employees) => project_employees.employee),
    __metadata("design:type", Array)
], Employee.prototype, "project_employees", void 0);
Employee = __decorate([
    (0, typeorm_1.Entity)()
], Employee);
exports.Employee = Employee;
//# sourceMappingURL=employee.entity.js.map