"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLocalRepository = void 0;
const employee_repository_1 = require("../../../../../domain/repository/employee.repository");
const typeorm_1 = require("typeorm");
const employee_entity_1 = require("../entity/employee.entity");
let EmployeeLocalRepository = class EmployeeLocalRepository extends typeorm_1.Repository {
    getAllEmployees(employees) {
        if (employees && employees.length > 0) {
            return this.find({
                where: {
                    name: (0, typeorm_1.In)(employees.map((employee) => employee.name)),
                },
            });
        }
        else {
            return this.find();
        }
    }
    getOneEmployee(employee) {
        return this.findOne(employee);
    }
    getEmployeeById(id) {
        return this.findOne(id);
    }
    createEmployee(employee) {
        return this.save(employee);
    }
    async updateEmployee(employee) {
        const updateresult = await this.update(employee.id, employee);
        return updateresult.affected > 0;
    }
};
EmployeeLocalRepository = __decorate([
    (0, typeorm_1.EntityRepository)(employee_entity_1.Employee)
], EmployeeLocalRepository);
exports.EmployeeLocalRepository = EmployeeLocalRepository;
//# sourceMappingURL=employee.repository.js.map