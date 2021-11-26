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
exports.ProjectEmployee = void 0;
const project_employee_entity_1 = require("../../../../../domain/entity/project-employee.entity");
const typeorm_1 = require("typeorm");
const _1 = require(".");
let ProjectEmployee = class ProjectEmployee {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ nullable: false }),
    __metadata("design:type", String)
], ProjectEmployee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProjectEmployee.prototype, "project_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProjectEmployee.prototype, "employee_name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.project_employees, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'created_by' }),
    __metadata("design:type", _1.User)
], ProjectEmployee.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.project_employees, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'updated_by' }),
    __metadata("design:type", _1.User)
], ProjectEmployee.prototype, "updated_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.User, (user) => user.project_employees, {
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'deleted_by' }),
    __metadata("design:type", _1.User)
], ProjectEmployee.prototype, "deleted_by", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProjectEmployee.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProjectEmployee.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], ProjectEmployee.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Project, (project) => project.project_employees),
    __metadata("design:type", _1.Project)
], ProjectEmployee.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => _1.Employee, (employee) => employee.project_employees),
    __metadata("design:type", _1.Employee)
], ProjectEmployee.prototype, "employee", void 0);
ProjectEmployee = __decorate([
    (0, typeorm_1.Entity)()
], ProjectEmployee);
exports.ProjectEmployee = ProjectEmployee;
//# sourceMappingURL=project-employee.entity.js.map